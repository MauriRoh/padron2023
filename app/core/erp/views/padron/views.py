from django.http import JsonResponse
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.urls import reverse_lazy
from django.views.generic import ListView, CreateView, UpdateView
from core.erp.models import Padron
from core.erp.forms import PadronModelForm


# Create your views here.
class PadronListView(ListView):
    model = Padron
    template_name = 'padron/list.html'

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

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
            print(e)
            print(data)
        return JsonResponse(data, safe=False)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Listado Padrón'
        context['list_url'] = reverse_lazy('app:padron_list')
        context['padron_url'] = reverse_lazy('app:padron_list')
        context['dni_no_url'] = reverse_lazy('app:dninoexist_list')
        return context


class PadronUpdateView(UpdateView):
    model = Padron
    form_class = PadronModelForm
    template_name = 'padron/create.html'
    success_url = reverse_lazy('app:padron_list')
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
                data['error'] = 'No se pudo realizar la solicitud'
        except Exception as e:
            data['error'] = str(e)
        return JsonResponse(data)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Editar Voto'
        context['padron_url'] = reverse_lazy('app:padron_list')
        context['dni_no_url'] = reverse_lazy('app:dninoexist_list')
        context['action'] = 'update'
        context['list_url'] = self.success_url
        return context