from django.contrib.auth.decorators import login_required
from django.contrib.auth.views import LoginView
import smtplib
import uuid
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

from django.contrib.auth import logout
from django.contrib.auth.views import LoginView
from django.http import JsonResponse, HttpResponseRedirect
from django.shortcuts import redirect
from django.template.loader import render_to_string
from django.urls import reverse_lazy
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.views.generic import RedirectView, FormView

import config.settings as setting
from config import settings


# INCIO DE SECIÓN
class LoginFormView(LoginView):
    template_name = 'login/login.html'

    def dispatch(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            return redirect(setting.LOGIN_REDIRECT_URL)
        return super().dispatch(request, *args, **kwargs)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Iniciar sesión'
        return context


# CIERRE DE SECIÓN
class LogoutRedirectView(RedirectView):
    pattern_name = 'login/login'

    def dispatch(self, request, *args, **kwargs):
        logout(request)
        return super().dispatch(request, *args, **kwargs)