from catalogs.models import Catalog
from common.utils.custom_response_decorator import custom_response
from rest_framework import generics, permissions

from .serializers import (
    CatalogAllSerializer,
    CatalogOptionsSerializer,
    CatalogSerializer,
)


@custom_response
class CatalogAllAPIView(generics.ListAPIView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = CatalogAllSerializer
    queryset = Catalog.objects.all()


@custom_response
class CatalogListAPIView(generics.ListAPIView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = CatalogSerializer
    queryset = Catalog.objects.root_nodes()

    # def get(self, request, *args, **kwargs):
    #     catalog_tree = Catalog.objects.tree(view=self)
    #     return Response(catalog_tree)


@custom_response
class CatalogChildsAPIView(generics.ListAPIView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = CatalogSerializer

    # def get(self, queryset, *args, **kwargs):
    #     parent_guid = self.kwargs.get("guid")
    #     childs = Catalog.objects.childs(self, parent_guid)
    #     return Response(childs)

    def get_queryset(self):
        parent_guid = self.kwargs.get("guid")
        return Catalog.objects.childs(parent_guid)


@custom_response
class CatalogOptionsAPIView(generics.ListAPIView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = CatalogOptionsSerializer

    def get_queryset(self):
        catalog_guid = self.kwargs.get("guid")
        return Catalog.objects.options(catalog_guid)
