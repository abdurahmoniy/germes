# from django.db.models import Prefetch
from rest_framework import serializers

# class CatalogRecursiveSerializer(serializers.Serializer):
#     def to_representation(self, instance):
#         serializer = self.parent.parent.__class__(
#             instance, context=self.context
#         )
#         return serializer.data


class CatalogAllSerializer(serializers.Serializer):
    guid = serializers.UUIDField(read_only=True)
    name = serializers.CharField(read_only=True)


class CatalogBaseSerializer(serializers.Serializer):
    guid = serializers.UUIDField(read_only=True)
    parent = serializers.UUIDField(read_only=True, source="parent.guid")
    name = serializers.CharField(read_only=True)
    icon = serializers.ImageField(read_only=True)
    product_amount = serializers.IntegerField(read_only=True)


class CatalogSerializer(CatalogBaseSerializer):
    # pass
    # child = CatalogRecursiveSerializer(many=True, read_only=True)

    def to_representation(self, instance):
        data = super().to_representation(instance)
        data["child"] = CatalogSerializer(
            instance.child.all(), many=True, context=self.context
        ).data
        return data


class CatalogOptionsSerializer(serializers.Serializer):
    catalog_guid = serializers.UUIDField(read_only=True)
    name = serializers.CharField(read_only=True, source="option.name")
    values = serializers.ListField(
        child=serializers.CharField(), read_only=True
    )
