from csv import unix_dialect

from django.contrib.auth import password_validation
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, UserManager, User
import json

# Create your models here.

class CustomUserManager(UserManager):
    def _create_user(self, email, password, **extra_fields):
        if not email:
            raise ValueError("Email is Not Provided!")
        email=self.normalize_email(email)
        user=self.model(email=email,**extra_fields)
        user.set_password(password)
        user.save(using=self._db)

        return user


    def create_user(self, email=None, password=None, **extra_fields):
        extra_fields.setdefault('name',"" )
        extra_fields.setdefault('is_superuser', False)
        extra_fields.setdefault('is_active', True)
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_seller', False)
        return self._create_user(email,password,**extra_fields)

    def create_superuser(self, email=None, password=None, **extra_fields):
        extra_fields.setdefault('name', "")
        extra_fields.setdefault('is_superuser',True)
        extra_fields.setdefault('is_active', True)
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_seller', False)
        return self._create_user(email,password,**extra_fields)




# users table
class User(AbstractBaseUser,PermissionsMixin):
    name=models.CharField(max_length=100,blank=True)
    email=models.EmailField(max_length=254,unique=True,blank=False)

    is_seller=models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects=CustomUserManager()

    USERNAME_FIELD='email'
    EMAIL_FIELD='email'
    REQUIRED_FIELDS = []

    class Meta:
        verbose_name='User'
        verbose_name_plural='Users'

    def get_full_name(self):
        return self.name

    def get_short_name(self):
        return self.name or self.email.split('@')[0]



# sellers table
class Seller(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    phone=models.CharField(max_length=20,blank=False)
    address=models.CharField(max_length=200,blank=False)
    balance=models.DecimalField(max_digits=9,decimal_places=2,default=0)
    level=models.IntegerField(default=0)
    picture = models.CharField(max_length=50, blank=True)

class Customer(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    phone=models.CharField(max_length=20,blank=False)
    address=models.CharField(max_length=200,blank=False)
    picture=models.CharField(max_length=50,blank=True)

    @classmethod
    def from_json(cls,user_object,json_object):
        return cls.objects.create(
            user=user_object,
            phone=json_object.get('phone'),
            address=json_object.get('address'),
            picture=json_object.get('picture')
        )



