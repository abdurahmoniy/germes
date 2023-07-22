import re

from payments.errors import codes as error_code
from rest_framework.exceptions import ErrorDetail
from rest_framework.views import APIView

"""
response structure

{
    status_code : 200,
    errors {},
    data {}
}
"""


def custom_response(view):
    def inner(self, request, *args, **kwargs):
        response = super(view, self).dispatch(request, args, **kwargs)
        list_errors = []
        response_data = response.data
        data = dict(
            success=True,
            errors=list_errors,
            data={},
        )
        card_data = (
            response_data.get("card_data")
            if isinstance(response_data, dict)
            else None
        )
        if card_data is not None:
            response_data, response = customize_card_data(card_data, response)
        if response.exception:
            data["success"] = False
            errors = response_data.get("errors")
            for e in errors:
                field = e.get("field")
                message = e.get("message")
                try:
                    if isinstance(message, list):
                        message_ = message[0]
                    else:
                        message_ = message
                    error_data = {
                        "field": field,
                        "message": message_,
                        "code": message_.code.upper(),
                    }
                except Exception:
                    error_data = {
                        "field": field,
                        "message": message,
                    }
                list_errors.append(error_data)
            data["errors"] = list_errors
        else:
            data["data"] = response_data
        response.data = data

        return response

    assert issubclass(view, APIView), (
        "class %s must be subclass of APIView" % view.__class__
    )

    view.dispatch = inner
    return view


def customize_card_data(card_data, response):
    response_data = card_data.get("result")
    if response_data is None:
        error_detail = ErrorDetail(card_data["error"]["errorMessage"])
        code = str(card_data["error"]["errorCode"])
        code = re.sub("[^0-9]", "", code)
        code = error_code[code]
        error_detail.code = code
        error_data = {
            "errors": [{"field": "non_field_errors", "message": error_detail}]
        }
        response_data = error_data
        response.exception = True
    return response_data, response
