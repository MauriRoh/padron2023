from django import forms
from django.forms import ModelForm
from core.erp.models import *


class PadronModelForm(ModelForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['dni'].widget.attrs['autofocus'] = True
        for form in self.visible_fields():
            form.field.widget.attrs['class'] = 'form-control'
            form.field.widget.attrs['readonly'] = 'on'

    class Meta:
        model = Padron
        fields = '__all__'
        widgets = {
            'dni': forms.TextInput(
                attrs={
                    'placeholder': 'Ingrese DNI',
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
            'nombre_circuito': forms.TextInput(
                attrs={
                    'placeholder': 'Nombre Circuito',
                    'autocomplete': 'off',
                }
            ),
            'codigo_circuito': forms.TextInput(
                attrs={
                    'placeholder': 'Código Circuito',
                    'autocomplete': 'off',
                }
            ),
            'mesa': forms.TextInput(
                attrs={
                    'placeholder': 'Ingrese N° Mesa',
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

    def save(self, commit=True):
        data = {}
        form = super()
        try:
            if form.is_valid():
                instance = form.save()
                data = instance.toJSON()
            else:
                data['error'] = form.errors
        except Exception as e:
            data['error'] = str(e)
        return data



class PadronDNIUpdateModelForm(ModelForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        for form in self.visible_fields():
            form.field.widget.attrs['class'] = 'form-control'
            # form.field.widget.attrs['readonly'] = 'on'

    class Meta:
        model = Padron
        fields = '__all__'
        widgets = {
            'dni': forms.TextInput(
                attrs={
                    'placeholder': 'Ingrese DNI',
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

    def save(self, commit=True):
        data = {}
        form = super()
        try:
            if form.is_valid():
                instance = form.save()
                data = instance.toJSON()
            else:
                data['error'] = form.errors
        except Exception as e:
            data['error'] = str(e)
        return data



class DniNoExistModelForm(ModelForm):
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

    def save(self, commit=True):
        data = {}
        form = super()
        try:
            if form.is_valid():
                instance = form.save()
                data = instance.toJSON()
            else:
                data['error'] = form.errors
        except Exception as e:
            data['error'] = str(e)
        return data