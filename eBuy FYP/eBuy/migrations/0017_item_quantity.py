# Generated by Django 4.2 on 2023-06-19 10:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('eBuy', '0016_cart'),
    ]

    operations = [
        migrations.AddField(
            model_name='item',
            name='quantity',
            field=models.IntegerField(default=0, max_length=15),
        ),
    ]