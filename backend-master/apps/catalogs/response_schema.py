from drf_yasg import openapi
from rest_framework import status

CATALOG_LIST_SCHEMA_RESPONSE = {
    status.HTTP_200_OK: openapi.Schema(
        title="Catalog list",
        type=openapi.TYPE_OBJECT,
        properties={
            "success": openapi.Schema(type=openapi.TYPE_BOOLEAN),
            "errors": openapi.Schema(
                type=openapi.TYPE_ARRAY,
                items=openapi.Items(type=openapi.TYPE_OBJECT),
            ),
            "data": openapi.Schema(
                type=openapi.TYPE_ARRAY,
                items=openapi.Items(
                    type=openapi.TYPE_OBJECT,
                    properties={
                        "guid": openapi.Schema(
                            type=openapi.TYPE_STRING,
                            format=openapi.FORMAT_UUID,
                        ),
                        "name": openapi.Schema(type=openapi.TYPE_STRING),
                        "icon": openapi.Schema(
                            type=openapi.TYPE_STRING, format=openapi.FORMAT_URI
                        ),
                    },
                ),
            ),
        },
    )
}
