# Generated by Django 4.2 on 2023-05-21 09:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('eBuy', '0002_customuser_delete_user'),
    ]

    operations = [
        migrations.RenameField(
            model_name='customuser',
            old_name='type',
            new_name='Usertype',
        ),
    ]
