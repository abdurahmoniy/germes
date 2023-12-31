# Generated by Django 4.1.7 on 2023-04-11 09:27

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("catalogs", "0007_rename_filtirable_template_filterable"),
    ]

    operations = [
        migrations.AddConstraint(
            model_name="template",
            constraint=models.UniqueConstraint(
                fields=("catalog", "attribute"),
                name="catalog_attribute_unique",
            ),
        ),
    ]
