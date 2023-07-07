from django.db import models
from django.forms import model_to_dict

# Create your models here.
class Padron(models.Model):
    id = models.IntegerField(primary_key=True)
    dni = models.CharField(max_length=10, blank=True, null=True, verbose_name='DNI')
    apellido = models.CharField(max_length=255, blank=True, null=True, verbose_name='Apellido')
    nombre = models.CharField(max_length=255, blank=True, null=True, verbose_name='Nombre')
    sexo = models.CharField(max_length=2, blank=True, null=True, verbose_name='Sexo')
    domicilio = models.CharField(max_length=255, blank=True, null=True, verbose_name='Domicilio')
    tipo_dni = models.CharField(max_length=25, blank=True, null=True, verbose_name='Tipo DNI')
    n = models.SmallIntegerField(blank=True, null=True, verbose_name='Número')
    departamento = models.CharField(max_length=255, blank=True, null=True, verbose_name='Departamento')
    circuito = models.CharField(max_length=8, blank=True, null=True, verbose_name='Circuito')
    nombre_circuito = models.CharField(max_length=255, blank=True, null=True, verbose_name='Nombre Circuito')
    voto = models.SmallIntegerField(blank=True, null=True, verbose_name='Votó')

    def __str__(self):
        return self.dni

    def toJSON(self):
        item = model_to_dict(self)
        return item

    class Meta:
        managed = False
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

