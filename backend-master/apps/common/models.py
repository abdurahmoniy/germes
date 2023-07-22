import uuid

from django.db import models
from django.db.models.functions import Upper

from .managers import OptionManager
from .validators import validate_phone


class BaseModel(models.Model):
    guid = models.UUIDField(
        unique=True, default=uuid.uuid4, editable=False, db_index=True
    )
    created_time = models.DateTimeField(auto_now_add=True)
    updated_time = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Region(models.Model):
    guid = models.UUIDField(
        unique=True, default=uuid.uuid4, editable=False, db_index=True
    )
    name = models.CharField(max_length=100)

    def __str__(self) -> str:
        return self.name

    class Meta:
        db_table = "regions"
        """Index for iexact lookups"""
        indexes = [
            models.Index(
                Upper("name_uz").desc(), name="region_name_uz_upper_index"
            ),
            models.Index(
                Upper("name_ru").desc(), name="region_name_ru_upper_index"
            ),
        ]


class District(models.Model):
    guid = models.UUIDField(
        unique=True, default=uuid.uuid4, editable=False, db_index=True
    )
    name = models.CharField(max_length=100)
    region = models.ForeignKey(Region, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.name

    class Meta:
        db_table = "districts"
        """Index for iexact lookup"""
        indexes = [
            models.Index(
                Upper("name_uz").desc(), name="district_name_uz_upper_index"
            ),
            models.Index(
                Upper("name_ru").desc(), name="district_name_ru_upper_index"
            ),
        ]


class Option(BaseModel):
    name = models.CharField(max_length=100, unique=True)
    objects = OptionManager()

    class Meta:
        indexes = [models.Index(Upper("name"), name="option_name_upper_index")]

    @property
    def option_values(self):
        return self.values.values_list("value", flat=True)

    def __str__(self) -> str:
        return self.name


class OptionValue(models.Model):
    option = models.ForeignKey(
        Option, on_delete=models.CASCADE, related_name="values"
    )
    value = models.CharField(max_length=150)

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=["option", "value"], name="option_value_unique"
            )
        ]


class SingletonModel(models.Model):
    class Meta:
        abstract = True

    def save(self, *args, **kwargs):
        self.pk = 1
        super(SingletonModel, self).save(*args, **kwargs)

    def delete(self, *args, **kwargs):
        pass

    @classmethod
    def load(cls):
        obj, _ = cls.objects.get_or_create(pk=1)
        return obj


class SelfPickUpAddress(SingletonModel):
    name = models.CharField(max_length=255)
    image = models.ImageField(default="innmall/innmall.png")
    address = models.TextField()
    phone = models.CharField(
        max_length=12, validators=[validate_phone], null=True
    )
    latitude = models.DecimalField(max_digits=12, decimal_places=9)
    longitude = models.DecimalField(max_digits=12, decimal_places=9)
