# Generated by Django 4.1.7 on 2023-04-10 11:53

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    dependencies = [
        ("products", "0001_initial"),
        ("catalogs", "0005_template"),
    ]

    operations = [
        migrations.AddField(
            model_name="template",
            name="attribute",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                to="products.attribute",
            ),
        ),
        migrations.AddField(
            model_name="template",
            name="catalog",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                to="catalogs.catalog",
            ),
        ),
    ]
