from django.contrib import admin
from django.urls import path,include
from eBuy import views


urlpatterns = [
    path ('',views.index,name="home page"),
    path ('signin',views.signIn,name="SignIn/Login page"),
    path ('signup',views.signUp,name="SignUp page"),
    path ('signout',views.signOut,name="Logout url"),
]