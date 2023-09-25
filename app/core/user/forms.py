from django.forms import ModelForm
from django import forms
from datetime import datetime
from core.user.models import User



class UserForm(ModelForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['first_name'].widget.attrs['autofocus'] = True
        # for form in self.visible_fields():
        #     form.field.widget.attrs['class'] = 'form-control'

    class Meta:
        model = User
        fields = 'first_name', 'last_name', 'username', 'email', 'password', 'image', 'groups'
        widgets = {
            'first_name': forms.TextInput(
                attrs={
                    'placeholder': 'Ingrese su Nombre',
                    'class': 'form-control',
                }
            ),
            'last_name': forms.TextInput(
                attrs={
                    'placeholder': 'Ingrese su Apellido',
                    'class': 'form-control',
                }
            ),
            'username': forms.TextInput(
                attrs={
                    'placeholder': 'Ingrese su Nombre de Usuario',
                    'class': 'form-control',
                }
            ),
            'email': forms.TextInput(
                attrs={
                    'placeholder': 'Ingrese su Email',
                    'class': 'form-control',
                }
            ),
            'password': forms.PasswordInput(
                render_value=True,
                attrs={
                    'placeholder': 'Ingrese su Password',
                    'class': 'form-control',
                }
            ),
            'groups': forms.SelectMultiple(attrs={
                'class': 'form-control select2',
                'style': 'width: 100%',
                'multiple': 'multiple'
                }
            )

        }
        exclude = ['user_permissions', 'last_login', 'date_joined', 'is_superuser', 'is_active', 'is_staff']

    def save(self, commit=True):
        data = {}
        form = super()
        try:
            if form.is_valid():
                pwd = self.cleaned_data['password']
                u = form.save(commit=False)
                if u.pk is None:
                    u.set_password(pwd)
                else:
                    user = User.objects.get(pk=u.pk)
                    if user.password != pwd:
                        u.set_password(pwd)
                u.save()
                u.groups.clear()
                for g in self.cleaned_data['groups']:
                    u.groups.add(g)
            else:
                data['error'] = form.errors
        except Exception as e:
            data['error'] = str(e)
        return data



class UserProfileForm(ModelForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['first_name'].widget.attrs['autofocus'] = True

    class Meta:
        model = User
        fields = 'first_name', 'last_name', 'username', 'email', 'password', 'image'
        widgets = {
            'first_name': forms.TextInput(
                attrs={
                    'placeholder': 'Enter your Names',
                }
            ),
            'last_name': forms.TextInput(
                attrs={
                    'placeholder': 'Enter your Surname',
                }
            ),
            'username': forms.TextInput(
                attrs={
                    'placeholder': 'Enter your Username',
                }
            ),
            'email': forms.TextInput(
                attrs={
                    'placeholder': 'Enter your Email',
                }
            ),
            'password': forms.PasswordInput(
                render_value=True,
                attrs={
                    'placeholder': 'Enter your Password',
                }
            ),
        }
        exclude = ['user_permissions', 'last_login', 'date_joined', 'is_superuser', 'is_active', 'is_staff', 'groups']

    def save(self, commit=True):
        data = {}
        form = super()
        try:
            if form.is_valid():
                pwd = self.cleaned_data['password']
                u = form.save(commit=False)
                if u.pk is None:
                    u.set_password(pwd)
                else:
                    user = User.objects.get(pk=u.pk)
                    if user.password != pwd:
                        u.set_password(pwd)
                u.save()
            else:
                data['error'] = form.errors
        except Exception as e:
            data['error'] = str(e)
        return data

