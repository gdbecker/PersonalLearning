from django.contrib import admin
from . import models

# Register your models here.
class GroupMemeberInLine(admin.TabularInline):
    model = models.GroupMember

class GroupAdmin(admin.ModelAdmin):
    search_fields = ['name']
    list_filter = ['name', 'members']
    list_display = ['name', 'description']
    list_editable = ['description']

admin.site.register(models.Group, GroupAdmin)
