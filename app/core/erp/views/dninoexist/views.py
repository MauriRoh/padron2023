from django.http import JsonResponse, HttpResponseRedirect
from django.shortcuts import render
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.urls import reverse_lazy
from django.views.generic import ListView, CreateView, UpdateView
from core.erp.models import DniNoExist
from core.erp.forms import DniNoExistForm


class DniNoExistListView(ListView):
    model = DniNoExist
    template_name = 'dninoexist/list.html'

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)
    def post(self, request, *args, **kwargs):
        data = {}
        try:
            data = DniNoExist.objects.get(pk=request.POST['id']).toJSON()
        except Exception as er:
            # data['error'] = str(er)
            data['error'] = 'ERROR: Dato no Encontrado'
        return JsonResponse(data)
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
    form_class = DniNoExistForm
    template_name = 'dninoexist/create.html'
    success_url = reverse_lazy('app:dninoexist_list')

    def post(self, request, *args, **kwargs):
        form = DniNoExistForm(request.POST)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect()
        self.object=None
        contex = self.get_context_data(**kwargs)
        contex['form'] = form
        return render(request, self.template_name, contex)
        # data = {}
        # try:
        #     data = {}
        #     # action = request.POST['action']
        #     # if action == 'create':
        #     #     with transaction.atomic():
        #     #         form = self.get_form()
        #     #         data = form.save()
        #     # else:
        #     #     data['error'] = 'No ha Ingresado Ningún Dato'
        # except Exception as e:
        #     data['error'] = str(e)
        # return JsonResponse(data)
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = 'Crear DNI No Encontrado'
        context['action'] = 'create'
        context['cancel_url'] = reverse_lazy('app:dninoexist_list')
        context['padron_url'] = reverse_lazy('app:padron_list')
        context['dni_no_url'] = reverse_lazy('app:dninoexist_list')
        return context
