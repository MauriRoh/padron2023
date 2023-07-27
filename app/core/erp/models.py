from django.db import models
from django.forms import model_to_dict

# Create your models here.
class Padron(models.Model):
    dni = models.IntegerField(blank=True, null=True, verbose_name='DNI')
    apellido = models.CharField(max_length=255, blank=True, null=True, verbose_name='Apellido')
    nombre = models.CharField(max_length=255, blank=True, null=True, verbose_name='Nombres')
    domicilio = models.CharField(max_length=255, blank=True, null=True, verbose_name='Domicilio')
    departamento = models.CharField(max_length=255, blank=True, null=True, verbose_name='Departamento')
    nombre_circuito = models.CharField(max_length=255, blank=True, null=True, verbose_name='Nombre Circuito')
    codigo_circuito = models.CharField(max_length=10, blank=True, null=True, verbose_name='Código Circuito')
    voto = models.SmallIntegerField(default=1, blank=True, null=True, verbose_name='Votó')

    def __str__(self):
        return self.dni

    def toJSON(self):
        item = model_to_dict(self)
        return item

    class Meta:
        db_table = 'padron'
        ordering = ['id']


class DniNoExist(models.Model):
    num_distrito = models.CharField(max_length=5, blank=False, null=False, verbose_name='Número Distrito')
    num_circuito = models.CharField(max_length=5, blank=False, null=False, verbose_name='Número Circuito')
    num_mesa = models.CharField(max_length=3, blank=False, null=False, verbose_name='Número Mesa')
    num_orden = models.CharField(max_length=4, blank=False, null=False, verbose_name='Número Orden')
    dni = models.CharField(max_length=10, blank=False, null=False, unique=True, verbose_name='DNI')
    apellido = models.CharField(max_length=255, blank=True, null=True, verbose_name='Apellido')
    nombre = models.CharField(max_length=255, blank=True, null=True, verbose_name='Nombre')

    def __str__(self):
        return self.dni

    def toJSON(self):
        item = model_to_dict(self)
        return item

    class Meta:
        db_table = 'dninoexist'
        ordering = ['id']



# circuito = models.CharField(max_length=8, blank=True, null=True, verbose_name='Nombre Circuito')
# nombre_circuito = models.CharField(max_length=255, blank=True, null=True, verbose_name='Nombre Circuito')