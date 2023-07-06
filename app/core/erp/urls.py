from django.urls import path
from core.erp.views.padron.views import *
from core.erp.views.dninoexist.views import *

app_name = 'app'

urlpatterns = [
    # PADRON
    path('padron/list/', PadronListView.as_view(), name='padron_list'),

    # DNI no Existen
    path('dninoexist/list/',DniNoExistListView.as_view(), name='dninoexist_list'),
    path('dninoexist/create/',DniNoExistCreateView.as_view(), name='dninoexist_create')

]