from django.contrib import admin
from .models import TODO

# Register your models here.


class TODOAdmin(admin.ModelAdmin):
    list_display = ("Title", "Description", "Completed")


# Register model
admin.site.register(TODO, TODOAdmin)
