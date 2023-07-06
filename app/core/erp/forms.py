from django import forms
from django.forms import ModelForm

from core.erp.models import *


class PadronForm(ModelForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['dni'].widget.attrs['autofocus'] = True

        for form in self.visible_fields():
            form.field.widget.attrs['class'] = 'form-control'

    class Meta:
        model = Padron
        fields = '__all__'
        widgets = {
            'dni': forms.TextInput(
                attrs={
                    'placeholder': 'DNI',
                    'autocomplete': 'off',
                }
            ),
            'apellido': forms.TextInput(
                attrs={
                    'placeholder': 'Apellido',
                    'autocomplete': 'off',
                }
            ),
            'nombre': forms.TextInput(
                attrs={
                    'placeholder': 'Nombre',
                    'autocomplete': 'off',
                }
            ),
            'tipo_dni': forms.TextInput(
                attrs={
                    'placeholder': 'Tipo DNI',
                    'autocomplete': 'on',
                }
            ),
            'sexo': forms.TextInput(
                attrs={
                    'placeholder': 'Sexo',
                    'autocomplete': 'on',
                }
            ),
            'domicilio': forms.TextInput(
                attrs={
                    'placeholder': 'Domicilio',
                    'autocomplete': 'off',
                }
            ),
            'departamento': forms.TextInput(
                attrs={
                    'placeholder': 'Departamento',
                    'autocomplete': 'on',
                }
            ),
            'circuito': forms.TextInput(
                attrs={
                    'placeholder': 'N° Circuito',
                    'autocomplete': 'off',
                }
            ),
            'nombre_circuito': forms.TextInput(
                attrs={
                    'placeholder': 'Nombre Circuito',
                    'autocomplete': 'off',
                }
            ),
            'voto': forms.TextInput(
                attrs={
                    'placeholder': 'Voto',
                    'autocomplete': 'off',
                }
            ),
        }

class DniNoExistForm(ModelForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['num_distrito'].widget.attrs['autofocus'] = True

        for form in self.visible_fields():
            form.field.widget.attrs['class'] = 'form-control'

    class Meta:
        model = DniNoExist
        fields = '__all__'
        widgets = {
            'num_distrito': forms.TextInput(
                attrs={
                    'placeholder': 'N° Distrito',
                    'autocomplete': 'on',
                }
            ),
            'num_circuito': forms.TextInput(
                attrs={
                    'placeholder': 'N° Circuito',
                    'autocomplete': 'on',
                }
            ),
            'num_mesa': forms.TextInput(
                attrs={
                    'placeholder': 'N° Mesa',
                    'autocomplete': 'on',
                }
            ),
            'num_orden': forms.TextInput(
                attrs={
                    'placeholder': 'N° Orden',
                    'autocomplete': 'on',
                }
            ),
            'dni': forms.TextInput(
                attrs={
                    'placeholder': 'DNI',
                    'autocomplete': 'off',
                }
            ),
            'apellido': forms.TextInput(
                attrs={
                    'placeholder': 'Apellido',
                    'autocomplete': 'off',
                }
            ),
            'nombre': forms.TextInput(
                attrs={
                    'placeholder': 'Nombre',
                    'autocomplete': 'off',
                }
            ),
        }