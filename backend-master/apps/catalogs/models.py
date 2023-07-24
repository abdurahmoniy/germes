from common.models import BaseModel
from common.utils.upload_files import upload_icon
from common.validators import icon_extensions
from django.db import connection, models

# from mptt.models import MPTTModel, TreeForeignKey
from .managers import CatalogManager


class Catalog(BaseModel):
    parent = models.ForeignKey(
        "self",
        on_delete=models.CASCADE,
        related_name="child",
        null=True,
        blank=True,
    )
    name = models.CharField(max_length=255)
    icon = models.ImageField(
        upload_to=upload_icon, validators=[icon_extensions], null=True
    )

    objects = CatalogManager()

    def __str__(self) -> str:
        return self.name

    class Meta:
        db_table = "catalogs"
        constraints = [
            models.UniqueConstraint(
                fields=["parent", "name"],
                name="unique_catalog_name",
            )
        ]

    @classmethod
    def get_all_descendants(cls, parent_guid):
        """get all descendants of a parent"""
        with connection.cursor() as cursor:
            cursor.execute(
                f"""
                WITH RECURSIVE cte AS (
                    SELECT id, guid, name
                    FROM catalogs
                    WHERE guid = '{parent_guid}'
                    UNION ALL
                    SELECT child.id, child.guid, child.name
                    FROM catalogs child
                    JOIN cte c
                    ON c.id = child.parent_id
                )
                SELECT id, guid, name
                FROM cte
                WHERE guid <> '{parent_guid}';
                """
            )
            row = cursor.fetchall()
        return [r[0] for r in row]

    # @classmethod
    # def get_total_amount_products_descendants(cls, parent_guid) -> int:
    #     with connection.cursor() as cursor:
    #         cursor.execute(
    #             f"""
    #             WITH RECURSIVE cte AS (
    #                 SELECT
    #                     id,
    #                     guid,
    #                     parent_id
    #                 FROM catalogs
    #                 WHERE guid = '{parent_guid}'
    #                 UNION ALL
    #                 SELECT
    #                     child.id,
    #                     child.guid,
    #                     child.parent_id
    #                 FROM catalogs child
    #                 JOIN cte c ON c.id = child.parent_id
    #             )
    #             SELECT COALESCE(SUM(pj.product_amount), 0)
    #             AS product_total_amount
    #             FROM cte ct
    #             LEFT JOIN (
    #                 SELECT catalog_id, count(*) AS product_amount
    #                 FROM products p
    #                 INNER JOIN shops_shopproduct shp ON p.id = shp.product_id
    #                 GROUP BY catalog_id
    #             ) pj ON ct.id = pj.catalog_id
    #             WHERE ct.guid <> '{parent_guid}';
    #             """
    #         )
    #         row = cursor.fetchall()
    #     total_amount, *_ = row[0]
    #     return int(total_amount)

    # @classmethod
    # def recursive_node_to_dict(cls, view, node):
    #     result = view.get_serializer(instance=node).data
    #     children = [
    #         cls.recursive_node_to_dict(view, child)
    #         for child in node.get_children()
    #     ]
    #     result["child"] = children
    #     return result


class CatalogFilterableField(models.Model):
    catalog = models.ForeignKey(
        Catalog, on_delete=models.CASCADE, related_name="filterable_fields"
    )
    option = models.ForeignKey("common.Option", on_delete=models.CASCADE)

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=["catalog", "option"], name="catalog_option_unique"
            )
        ]
