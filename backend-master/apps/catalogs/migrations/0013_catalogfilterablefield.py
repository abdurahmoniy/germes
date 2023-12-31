# Generated by Django 4.1.7 on 2023-05-02 16:40

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    dependencies = [
        ("common", "0006_option_optionvalue"),
        ("catalogs", "0012_alter_catalog_guid_alter_template_guid"),
    ]

    operations = [
        migrations.CreateModel(
            name="CatalogFilterableField",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "catalog",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="filterable_fields",
                        to="catalogs.catalog",
                    ),
                ),
                (
                    "option",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="common.option",
                    ),
                ),
            ],
        ),
    ]
