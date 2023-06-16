from django.contrib import admin
from django.urls import path,include
from eBuy import views


urlpatterns = [
    path('',views.index,name="home page"),
    path('about',views.about,name="home page"),
    path('service',views.service,name="home page"),
    path('why-us',views.whyUs,name="home page"),
    path('contact',views.contact,name="home page"),


    path('signin',views.signIn,name="SignIn/Login page"),
    path('signup',views.signUp,name="SignUp page"),
    path('signout',views.signOut,name="Logout url"),

    path('addcustomer',views.addCustomer,name="add Customer data"),
    path('addseller',views.addSeller,name="add Seller data"),
    path('addproduct',views.addProduct,name="add product data"),
    path('getproducts',views.getItems,name="Get all product data"),
    path('products', views.products, name="Get all product data"),

    path('addcart/<str:productId>',views.addToCart,name="to add the product in cart"),
    path('order',views.placeOrder,name="to place an order"),







    path('create-checkout-session',views.)

]