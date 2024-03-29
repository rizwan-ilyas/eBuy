# Generated by Django 4.2 on 2023-05-21 10:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('eBuy', '0003_rename_type_customuser_usertype'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('password', models.CharField(max_length=25)),
                ('status', models.CharField(default='customer', max_length=25)),
            ],
        ),
        migrations.DeleteModel(
            name='CustomUser',
        ),
    ]
