from django.contrib import admin
from django.urls import path,include
from eBuy import views


urlpatterns = [
    path ('',views.index,name="home page"),
]