# Generated by Django 4.2 on 2023-05-26 06:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('eBuy', '0011_rename_cutomer_customer'),
    ]

    operations = [
        migrations.AlterField(
            model_name='seller',
            name='level',
            field=models.IntegerField(default=0),
        ),
    ]
