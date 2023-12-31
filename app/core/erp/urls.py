from django.urls import path
from core.erp.views.padron.views import *
from core.erp.views.dninoexist.views import *
from core.erp.views.dashboard.views import *

app_name = 'app'

urlpatterns = [
    # PADRON
    path('padron/list/', PadronListView.as_view(), name='padron_list'),
    path('padron/update/<int:pk>/', PadronUpdateView.as_view(), name='padron_update'),
    path('padron/dniupdate/', PadronDNIUpdateView.as_view(), name='padron_dniupdate'),
    path('padron/mesaupdate/', PadronMesaDNIUpdateView.as_view(), name='padron_tableupdate'),

    # DNI no Existen
    path('dninoexist/list/', DniNoExistListView.as_view(), name='dninoexist_list'),
    path('dninoexist/create/', DniNoExistCreateView.as_view(), name='dninoexist_create'),
    path('dninoexist/update/<int:pk>/', DniNoExistUpdateView.as_view(), name='dninoexist_update'),
    path('dninoexist/delete/<int:pk>/', DniNoExistDeleteView.as_view(), name='dninoexist_delete'),

    # PANEL DASHBOARD
    path('dashboard/', DashboardView.as_view(), name='dashboard'),
]