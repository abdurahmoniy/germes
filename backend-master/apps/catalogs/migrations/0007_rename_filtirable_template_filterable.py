# Generated by Django 4.1.7 on 2023-04-11 08:58

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("catalogs", "0006_template_attribute_template_catalog"),
    ]

    operations = [
        migrations.RenameField(
            model_name="template",
            old_name="filtirable",
            new_name="filterable",
        ),
    ]