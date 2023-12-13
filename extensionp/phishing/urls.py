from django.urls import path
from . import views

urlpatterns = [
    path('receive_json/', views.receive_json, name='receive_json'),
    path('get_content/', views.get_content, name='get_content'),
]
