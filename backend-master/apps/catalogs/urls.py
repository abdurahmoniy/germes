from django.urls import path

from .views import (
    CatalogAllAPIView,
    CatalogChildsAPIView,
    CatalogListAPIView,
    CatalogOptionsAPIView,
)

app_name = "catalogs"
urlpatterns = [
    path("", CatalogListAPIView.as_view(), name="list"),
    path(
        "<uuid:guid>/options/", CatalogOptionsAPIView.as_view(), name="option"
    ),
    path("all/", CatalogAllAPIView.as_view(), name="all"),
    path("<uuid:guid>/child/", CatalogChildsAPIView.as_view(), name="child"),
]
