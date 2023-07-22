from django.contrib.postgres.aggregates import ArrayAgg

# from mptt.managers import TreeManager
from django.db import models
from django.db.models import F
from rest_framework.exceptions import ValidationError
from rest_framework.generics import get_object_or_404


class CatalogManager(models.Manager):
    def root_nodes(self):
        return self.select_related("parent").filter(parent=None)

    def add_option(self, catalog, options):
        if options is not None:
            self.add_option_(catalog, options)

    def update_option(self, product, options):
        if options is not None:
            catalog = product.catalog
            self.delete_option(catalog)
            self.add_option_(catalog, options)

    def delete_option(self, catalog):
        from catalogs.models import CatalogFilterableField

        CatalogFilterableField.objects.filter(catalog=catalog).delete()

    def add_option_(self, catalog, options):
        from catalogs.models import CatalogFilterableField

        options = list(
            map(
                lambda option: CatalogFilterableField(
                    catalog=catalog, option=option
                ),
                options,
            )
        )
        CatalogFilterableField.objects.bulk_create(
            options, ignore_conflicts=True
        )

    def options(self, catalog_guid):
        from catalogs.models import CatalogFilterableField

        catalog = get_object_or_404(self.model, guid=catalog_guid)
        return (
            CatalogFilterableField.objects.filter(catalog_id=catalog.id)
            .select_related("option")
            .annotate(
                catalog_guid=F("catalog__guid"),
                values=ArrayAgg("option__values__value"),
            )
        )

    def childs(self, guid):
        try:
            parent = self.get(guid=guid)
        except self.model.DoesNotExist:
            raise ValidationError(
                {"product": f"Object with guid={guid} does not exist."},
                code="DOES_NOT_EXIST",
            )
        return parent.child.all()

    # def tree(self, view, guid=None):
    #     match guid:
    #         case None:
    #             qs = self.all()
    #         case _:
    #             qs = self._mptt_filter(guid=guid).all()
    #     root_nodes = qs.annotate(
    #         count_product=Count(
    #             "products", filter=Q(products__shops__isnull=False)
    #         )
    #     ).get_cached_trees()

    #     data = []
    #     for node in root_nodes:
    #         data.append(self.tree_model.recursive_node_to_dict(view, node))

    #     return data
