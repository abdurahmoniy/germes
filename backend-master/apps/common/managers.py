from django.db import models, transaction


class OptionManager(models.Manager):
    def create_values(self, data):
        values = data.pop("values")
        with transaction.atomic():
            option = self.create(**data)
            self.create_values_(option, values)
        return option

    def update_values(self, option, values):
        if values is not None:
            # first remove all values ​​related to option instance.
            # then create
            self.delete_values(option)
            self.create_values_(option, values)

    def create_values_(self, option, values):
        from common.models import OptionValue

        values = list(
            map(
                lambda value: OptionValue(option=option, value=value),
                values,
            )
        )
        OptionValue.objects.bulk_create(values, ignore_conflicts=True)

    def delete_values(self, option):
        from common.models import OptionValue

        OptionValue.objects.filter(option=option).delete()
