from django.contrib import admin
from core.erp.models import *

# Register your models here.
class PadronModelAdmin(admin.ModelAdmin):
    list_display = (
        'dni',
        'apellido',
        'nombre',
        'domicilio',
        'departamento',
        'circuito',
        'nombre_circuito',
        'voto',
    )
    # Buscador
    search_fields = ('dni', 'apellido', 'nombre', 'departamento', 'circuito', 'nombre_circuito', 'voto',)
    ordering = ['dni']
admin.site.register(Padron, PadronModelAdmin)

class DniNoExistModelAdmin(admin.ModelAdmin):
    list_display = (
        'num_distrito',
        'num_circuito',
        'num_mesa',
        'num_orden',
        'dni',
        'apellido',
        'nombre',
    )
    search_fields = ('num_distrito', 'num_circuito', 'num_mesa', 'num_orden', 'dni', 'apellido', 'nombre',)
    ordering = ['num_distrito']
admin.site.register(DniNoExist, DniNoExistModelAdmin)
