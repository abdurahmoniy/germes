from rest_framework import exceptions
from rest_framework.generics import get_object_or_404
from shops.models import Shop


def check_shop_owner(func):
    def wrapper(view, *args, **kwargs):
        shop = get_object_or_404(
            Shop.objects.select_related("customer").all(),
            guid=view.kwargs["shop_guid"],
        )
        try:
            view.check_object_permissions(view.request, shop)
        except exceptions.PermissionDenied as e:
            raise exceptions.PermissionDenied(
                detail="You are not allowed to access this store.",
                code=e.default_code,
            )

    return wrapper
