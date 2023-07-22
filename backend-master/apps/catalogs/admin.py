from django.contrib import admin

from .models import Catalog, CatalogFilterableField


@admin.register(Catalog)
class CatalogModelAdmin(admin.ModelAdmin):
    list_display = ("id", "guid", "parent", "name_uz", "name_ru")
    search_fields = ("id", "guid", "name_uz", "name_ru")


# @admin.register(Template)
# class TemplateModelAdmin(admin.ModelAdmin):
#     list_display = ("guid", "catalog", "attribute",
# "filterable", "searchable")


@admin.register(CatalogFilterableField)
class OptionModelAdmin(admin.ModelAdmin):
    list_display = ("id", "catalog", "option")
