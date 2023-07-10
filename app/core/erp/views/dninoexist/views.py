from django.urls import reverse_lazy
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
# from django.http import JsonResponse, HttpResponseRedirect
from django.shortcuts import render
from django.views.generic import ListView, CreateView, UpdateView, DeleteView
from core.erp.models import DniNoExist
from core.erp.forms import DniNoExistModelForm


class DniNoExistListView(ListView):
    model = DniNoExist
    template_name = 'dninoexist/list.html'

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        data = {}
        try:
            action = request.POST['action']
            if action == 'searchdata':
                data = []
                for i in DniNoExist.objects.all():
                    data.append(i.toJSON())
            else:
                data['ERROR'] = 'Ha ocurrido un Error. No se pudo realizar la solicitud'
        except Exception as e:
            data['ERROR'] = str(e)
        return JsonResponse(data, safe=False)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Listado DNI No Encontrado'
        context['create_url'] = reverse_lazy('app:dninoexist_create')
        context['list_url'] = reverse_lazy('app:dninoexist_list')
        context['padron_url'] = reverse_lazy('app:padron_list')
        context['dni_no_url'] = reverse_lazy('app:dninoexist_list')
        return context

class DniNoExistCreateView(CreateView):
    model = DniNoExist
    form_class = DniNoExistModelForm
    template_name = 'dninoexist/create.html'
    success_url = reverse_lazy('app:dninoexist_list')

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        data = {}
        try:
            action = request.POST['action']
            if action == 'create':
                form = self.get_form()
                data = form.save()
            else:
                data['ERROR'] = 'No se pudo realizar la solicitud'
        except Exception as e:
            data['ERROR'] = str(e)
        return JsonResponse(data)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Crear DNI No Encontrado'
        context['padron_url'] = reverse_lazy('app:padron_list')
        context['dni_no_url'] = reverse_lazy('app:dninoexist_list')
        context['list_url'] = reverse_lazy('app:dninoexist_list')
        context['action'] = 'create'
        return context


class DniNoExistUpdateView(UpdateView):
    model = DniNoExist
    form_class = DniNoExistModelForm
    template_name = 'dninoexist/create.html'
    success_url = reverse_lazy('app:dninoexist_list')
    url_redirect = success_url

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        self.object = self.get_object()
        return super().dispatch(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        data = {}
        try:
            action = request.POST['action']
            if action == 'update':
                form = self.get_form()
                data = form.save()
            else:
                data['ERROR'] = 'No se pudo realizar la solicitud'
        except Exception as e:
            data['ERROR'] = str(e)
        return JsonResponse(data)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['padron_url'] = reverse_lazy('app:padron_list')
        context['dni_no_url'] = reverse_lazy('app:dninoexist_list')
        context['action'] = 'update'
        context['list_url'] = self.success_url
        return context


class DniNoExistDeleteView(DeleteView):
    model = DniNoExist
    template_name = 'dninoexist/delete.html'
    success_url = reverse_lazy('app:dninoexist_list')
    url_redirect = success_url

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        self.object = self.get_object()
        return super().dispatch(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        data = {}
        try:
            self.object.delete()
        except Exception as e:
            data['ERROR'] = str(e)
        return JsonResponse(data)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Eliminar DNI No Encontrado'
        context['padron_url'] = reverse_lazy('app:padron_list')
        context['dni_no_url'] = reverse_lazy('app:dninoexist_list')
        context['action'] = 'delete'
        context['list_url'] = self.success_url
        return context