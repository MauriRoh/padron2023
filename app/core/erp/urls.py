from django.urls import path
from core.erp.views.padron.views import *
from core.erp.views.dninoexist.views import *

app_name = 'app'

urlpatterns = [
    # PADRON
    path('padron/list/', PadronListView.as_view(), name='padron_list'),
    path('padron/update/<int:pk>/', PadronUpdateView.as_view(), name='padron_update'),

    # DNI no Existen
    path('dninoexist/list/', DniNoExistListView.as_view(), name='dninoexist_list'),
    path('dninoexist/create/', DniNoExistCreateView.as_view(), name='dninoexist_create'),
    path('dninoexist/update/<int:pk>/', DniNoExistUpdateView.as_view(), name='dninoexist_update'),
    path('dninoexist/delete/<int:pk>/', DniNoExistDeleteView.as_view(), name='dninoexist_delete'),
]