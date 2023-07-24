import json
import os
from django.contrib.auth.mixins import LoginRequiredMixin
from core.erp.mixins import ValidatePermissionRequiredMixin
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.urls import reverse_lazy
from django.views.generic import ListView, CreateView, UpdateView
from core.erp.models import Padron
from core.erp.forms import PadronModelForm, PadronDNIUpdateModelForm


# Create your views here.
# class PadronListView(LoginRequiredMixin, ValidatePermissionRequiredMixin, ListView):
class PadronListView(LoginRequiredMixin, ListView):
    model = Padron
    template_name = 'padron/list.html'
    permission_required = 'view_padron'

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    def get(self, request, *args, **kwargs):
        request.user.get_group_session()
        return super().get(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        data = {}
        try:
            action = request.POST['action']
            if action == 'searchdata':
                data = []
                for i in Padron.objects.all():
                    data.append(i.toJSON())
            else:
                data['error'] = 'Ha ocurrido un Error. No se pudo realizar la solicitud'
        except Exception as e:
            data['error'] = str(e)
        return JsonResponse(data, safe=False)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Listado Padrón'
        context['list_url'] = reverse_lazy('app:padron_list')
        context['padron_url'] = reverse_lazy('app:padron_list')
        context['dni_no_url'] = reverse_lazy('app:dninoexist_list')
        context['padron_dni_update'] = reverse_lazy('app:padron_dniupdate')
        return context


class PadronUpdateView(LoginRequiredMixin, UpdateView):
    model = Padron
    form_class = PadronModelForm
    template_name = 'padron/update.html'
    success_url = reverse_lazy('app:padron_list')
    url_redirect = success_url
    permission_required = 'change_padron'

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        self.object = self.get_object()
        return super().dispatch(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        data = {}
        try:
            action = request.POST['action']
            if action == 'update':
                dataproces = json.loads(request.POST['dataproces'])
                # votante = self.get_object()
                # votante.id = int(dataproces['id'])
                for i in Padron.objects.filter(pk=int(dataproces['id'])):
                # for i in Padron.objects.filter(pk=int(request.POST['id'])):
                    if int(dataproces['voto']) == 0:
                        i.voto = 1
                    else:
                        i.voto = 0
                    i.save()
            else:
                data['error'] = 'No se pudo realizar la solicitud'
        except Exception as e:
            data['error'] = str(e)
        return JsonResponse(data)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Editar Voto'
        context['padron_url'] = reverse_lazy('app:padron_list')
        context['dni_no_url'] = reverse_lazy('app:dninoexist_list')
        context['padron_dni_update'] = reverse_lazy('app:padron_dniupdate')
        context['action'] = 'update'
        context['list_url'] = self.success_url
        return context


class PadronDNIUpdateView(LoginRequiredMixin, CreateView):
    model = Padron
    form_class = PadronDNIUpdateModelForm
    template_name = 'padron/dniupdate.html'
    success_url = reverse_lazy('app:padron_dniupdate')
    url_redirect = success_url
    permission_required = 'change_padron'

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        # self.object = self.get_object()
        return super().dispatch(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        data = {}
        try:
            action = request.POST['action']
            if action == 'search_dni':
                data = []
                for i in Padron.objects.filter(dni__icontains=request.POST['term']):
                    item = i.toJSON()
                    item['text'] = i.dni
                    data.append(item)
                    
            elif action == 'update_dni':
                dataproces = json.loads(request.POST['dataproces'])
                for i in Padron.objects.filter(pk=int(dataproces['id'])):
                    if int(dataproces['voto']) == 0:
                        i.voto = 1
                    else:
                        i.voto = 0
                    i.save()
            else:
                data['error'] = 'No se pudo realizar la solicitud'
        except Exception as e:
            data['error'] = str(e)
        return JsonResponse(data, safe=False)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Editar Voto'
        context['padron_url'] = reverse_lazy('app:padron_list')
        context['dni_no_url'] = reverse_lazy('app:dninoexist_list')
        context['padron_dni_update'] = reverse_lazy('app:padron_dniupdate')
        context['action'] = 'update_dni'
        context['list_url'] = self.success_url
        return context
