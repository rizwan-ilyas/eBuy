from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .models import User,Customer,Seller,Order,Payment,Item

# Register your models here.


admin.site.register(User)
admin.site.register(Customer)
admin.site.register(Seller)
admin.site.register(Order)
admin.site.register(Payment)
admin.site.register(Item)

