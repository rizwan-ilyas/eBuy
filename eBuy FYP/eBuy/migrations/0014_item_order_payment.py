# Generated by Django 4.2 on 2023-05-31 08:22

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('eBuy', '0013_customer_picture_seller_picture'),
    ]

    operations = [
        migrations.CreateModel(
            name='Item',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=250)),
                ('description', models.CharField(max_length=1000)),
                ('price', models.DecimalField(decimal_places=2, max_digits=8, max_length=8)),
                ('images', models.CharField(max_length=200)),
                ('category', models.CharField(default='', max_length=250)),
                ('seller', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='eBuy.seller')),
            ],
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.IntegerField(default=1)),
                ('note', models.CharField(blank=True, max_length=300)),
                ('item', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='eBuy.item')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Payment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('total', models.DecimalField(decimal_places=2, max_digits=10, max_length=10)),
                ('payment_status', models.BooleanField()),
                ('order', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='eBuy.order')),
            ],
        ),
    ]