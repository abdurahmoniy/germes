# Generated by Django 4.1.7 on 2023-03-14 08:52

import os

from django.core import serializers
from django.db import migrations

fixture_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '../fixtures'))
regions_fixture_filename = 'regions.json'
districts_fixture_filename = 'districts.json'
self_pickup_address_fixture_filename = "self_pickup_address.json"

def _load_fixture(fixture_file: str):
    fixture = open(fixture_file, 'rb')
    objects = serializers.deserialize('json', fixture, ignorenonexistent=True)
    for obj in objects:
        obj.save()
    fixture.close()

def load_fixture(apps, schema_editor):
    regions_fixture_file = os.path.join(fixture_dir, regions_fixture_filename)
    districts_fixture_file = os.path.join(fixture_dir, districts_fixture_filename)
    self_pickup_fixture_file = os.path.join(fixture_dir, self_pickup_address_fixture_filename)
    
    _load_fixture(regions_fixture_file)
    _load_fixture(districts_fixture_file)
    _load_fixture(self_pickup_fixture_file)

def _unload_fixture(apps, app_name, model_name):
    MyModel = apps.get_model(app_name, model_name)
    MyModel.objects.all().delete()

def unload_fixture(apps, schema_editor):
    "Brutally deleting all entries for this model..."
    _unload_fixture(apps, "common", "District")
    _unload_fixture(apps, "common", "Region")
    _unload_fixture(apps, "common", "SelfPickUpAddress")

class Migration(migrations.Migration):
    dependencies = [
        ("common", "0001_initial"),
    ]

    operations = [
        migrations.RunPython(load_fixture, reverse_code=unload_fixture)
    ]
