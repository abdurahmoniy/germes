from django.contrib import admin

from .models import District, Option, OptionValue, Region


@admin.register(Region)
class RegionModelAdmin(admin.ModelAdmin):
    list_display = ("id", "name_uz", "name_ru", "guid")
    search_fields = ("name_uz", "name_ru")


@admin.register(District)
class DistrictModelAdmin(admin.ModelAdmin):
    list_display = ("id", "name_uz", "name_ru", "region", "guid")
    search_fields = ("name_uz", "name_ru")
    list_filter = ("region",)


@admin.register(Option)
class OptionModelAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "guid")


@admin.register(OptionValue)
class OptionValueModelAdmin(admin.ModelAdmin):
    list_display = ("id", "option", "value")
    list_filter = ("option",)
