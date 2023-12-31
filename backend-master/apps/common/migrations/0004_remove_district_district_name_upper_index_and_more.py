# Generated by Django 4.1.7 on 2023-04-24 18:21

from django.db import migrations, models
import django.db.models.functions.text


class Migration(migrations.Migration):
    dependencies = [
        ("common", "0003_district_district_name_upper_index_and_more"),
    ]

    operations = [
        migrations.RemoveIndex(
            model_name="district",
            name="district_name_upper_index",
        ),
        migrations.RemoveIndex(
            model_name="region",
            name="region_name_upper_index",
        ),
        migrations.AddIndex(
            model_name="district",
            index=models.Index(
                models.OrderBy(
                    django.db.models.functions.text.Upper("name"),
                    descending=True,
                ),
                name="district_name_upper_index",
            ),
        ),
        migrations.AddIndex(
            model_name="region",
            index=models.Index(
                models.OrderBy(
                    django.db.models.functions.text.Upper("name"),
                    descending=True,
                ),
                name="region_name_upper_index",
            ),
        ),
    ]
