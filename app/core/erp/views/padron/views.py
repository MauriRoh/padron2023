from django.http import JsonResponse
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.urls import reverse_lazy
from django.views.generic import ListView, CreateView, UpdateView
from core.erp.models import Padron


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
            data = Padron.objects.get(pk=request.POST['id']).toJSON()
        except Exception as er:
            # data['error'] = str(er)
            data['ERROR'] = 'No se pudo realizar la solicitud'
        return JsonResponse(data)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Listado Padrón'
        # context['create_url'] = reverse_lazy('app:dninoexist_create')
        context['list_url'] = reverse_lazy('app:padron_list')
        context['padron_url'] = reverse_lazy('app:padron_list')
        context['dni_no_url'] = reverse_lazy('app:dninoexist_list')
        return context

# class PadronUpdateView(UpdateView):
#     model = Padron