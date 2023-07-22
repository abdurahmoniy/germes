import uuid

from slugify import slugify


def change_filename(filename: str) -> str:
    extension = filename.split(".")[-1]
    filename = uuid.uuid4().hex
    return filename, extension


def upload_icon(self, filename: str) -> str:
    new_filename, extension = change_filename(filename)
    filename_with_extension = "{}/{}/{}.{}".format(
        self._meta.model_name, slugify(self.name), new_filename, extension
    )
    return filename_with_extension


def upload_product_image(self, filename: str) -> str:
    new_filename, extension = change_filename(filename)
    filename_with_extension = "{}/{}/{}/{}/{}.{}".format(
        self._meta.model_name,
        self.catalog_name,
        self.brand_name,
        self.product_name,
        new_filename,
        extension,
    )
    return filename_with_extension
