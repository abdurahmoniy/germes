from rest_framework.pagination import PageNumberPagination


class CustomPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = "page_size"
    max_page_size = 100
    # cursor_query_param = "cursor"
    # ordering_fields = ["created_time", "name"]


class CatalogPagination(CustomPagination):
    pass


class BrandPagination(CustomPagination):
    pass


class ShopPagination(CustomPagination):
    pass


class AppShopPagination(CustomPagination):
    page_size = 3


class AdminPagination(CustomPagination):
    pass


class ClientPagination(CustomPagination):
    pass


class ProductPagination(CustomPagination):
    pass


class ShopProductPagination(CustomPagination):
    pass


class ZonePagination(CustomPagination):
    pass


class OrderPagination(CustomPagination):
    pass
