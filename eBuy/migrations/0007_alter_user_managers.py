# Generated by Django 4.2 on 2023-05-22 15:05

from django.db import migrations
import eBuy.models


class Migration(migrations.Migration):

    dependencies = [
        ('eBuy', '0006_alter_user_id_alter_user_name_alter_user_password'),
    ]

    operations = [
        migrations.AlterModelManagers(
            name='user',
            managers=[
                ('objects', eBuy.models.CustomUserManager()),
            ],
        ),
    ]