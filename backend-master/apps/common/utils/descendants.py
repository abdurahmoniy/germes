from itertools import chain
from typing import Iterable

from django.db.models import Prefetch


def get_descendants(parent) -> Iterable:
    from catalogs.models import Catalog

    catalogs = Catalog.objects.filter(parent=parent).prefetch_related(
        Prefetch("child")
    )
    result = chain(catalogs)
    for child in catalogs:
        result = chain(result, get_descendants(child))
    return result
