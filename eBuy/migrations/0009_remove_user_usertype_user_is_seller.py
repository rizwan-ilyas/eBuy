# Generated by Django 4.2 on 2023-05-25 12:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('eBuy', '0008_user_is_staff'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='userType',
        ),
        migrations.AddField(
            model_name='user',
            name='is_seller',
            field=models.BooleanField(default=False),
        ),
    ]