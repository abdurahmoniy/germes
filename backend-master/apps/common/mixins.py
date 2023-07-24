from rest_framework import permissions
from users.permissions import IsCustomer


class IsCustomerPermissionMixin:
    def get_permissions(self):
        match self.request.user.is_authenticated:
            case True:
                self.permission_classes = (
                    permissions.IsAuthenticated,
                    IsCustomer,
                )
            case False:
                self.permission_classes = (permissions.AllowAny,)
        return super().get_permissions()
