from django.contrib import admin
from django.urls import path,include
from eBuy import views


urlpatterns = [
    path('',views.index,name="home page"),
    path('signin',views.signIn,name="SignIn/Login page"),
    path('signup',views.signUp,name="SignUp page"),
    path('signout',views.signOut,name="Logout url"),

    path('addcustomer',views.addCustomer,name="add Customer data"),
    path('addseller',views.addSeller,name="add Seller data"),
    path('addproduct',views.addProduct,name="add product data"),
    path('getproducts',views.getItems,name="Get all product data"),


]