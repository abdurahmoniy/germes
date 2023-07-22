# Generated by Django 4.1.7 on 2023-04-18 10:24

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("catalogs", "0010_remove_catalog_unique_catalog_name_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="catalog",
            name="name",
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name="catalog",
            name="name_ru",
            field=models.CharField(max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name="catalog",
            name="name_uz",
            field=models.CharField(max_length=255, null=True),
        ),
    ]
