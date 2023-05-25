from django.shortcuts import render,HttpResponse, redirect
from django.middleware import csrf
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate,logout,login
from  django.http import JsonResponse

import json
# Create your views here.

from .models import User

def index(request):
    print("The is Status is : ",request.user.is_authenticated)
    return render(request, 'index.html')

def signIn(request):
    if request.method == "POST":
        data=json.loads(request.body)
        email=email=data['email']
        password=data['password']
        print(email,":",password)
        try:
            user = authenticate(request,username=email,password=password)
            print(user)
            if user is not None:
                login(request,user)
                print("Logged in")
                d={'message': 'Login successful'}
                return JsonResponse(d)
            else:
                return JsonResponse({'message': 'Login unsuccessful'})
        except Exception as e:
            print(e)


    return render(request, 'index.html')


def signUp(request):
    if request.method == "POST":
        try:
            data=json.loads(request.body)
            print(data)
            user=User.objects.create_user(**data)
            user.save()
            return redirect(index)

        except Exception as e:

            print(e)
            return HttpResponse("Something went wrong while SignUp.!")

    return render(request, 'index.html')

def signOut(request):
    logout(request)
    return render(request, 'index.html')



