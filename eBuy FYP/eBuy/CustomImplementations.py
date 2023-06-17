from django.contrib.auth import get_user_model
from django.contrib.auth.backends import ModelBackend


class EmailBackend(ModelBackend):
    def authenticate(self, request, username=None, password=None, **kwargs):
        UserModel=get_user_model()
        try:
            user=UserModel.objects.get(email=username)
        except UserModel.DoesNotExist:
            print("User Not found")
            return None
        else:
            if user.check_password(password):
                return user
            print(user.password)
            print("Password Not matches",password)
            return None

# method observes from the link
# https://djangocentral.com/authentication-using-an-email-address/#:~:text=Enable%20Login%20with%20Email%20in,instead%20of%20a%20username%20field.&text=This%20code%20creates%20a%20new,is%20set%20to%20be%20unique.

