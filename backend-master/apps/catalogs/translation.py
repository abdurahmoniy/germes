from modeltranslation.translator import TranslationOptions, register

from .models import Catalog


@register(Catalog)
class CatalogTranslationOptions(TranslationOptions):
    fields = ("name",)
