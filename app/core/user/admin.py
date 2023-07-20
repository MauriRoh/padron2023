from django.contrib import admin

# Register your models here.
from core.user.models import User

class ModelAdminUsers(admin.ModelAdmin):
    list_display = (
        'id',
        'first_name',
        'last_name',
        'username',
        'password',
        'date_joined',
        'last_login',
        'email',
        'image',
        'is_superuser',
        'is_staff',
        'is_active',
    )

# Register your models here.
admin.site.register(User, ModelAdminUsers)