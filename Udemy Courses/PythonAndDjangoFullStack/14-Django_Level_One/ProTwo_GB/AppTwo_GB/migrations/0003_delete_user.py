# Generated by Django 3.2.5 on 2022-02-28 18:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('AppTwo_GB', '0002_user'),
    ]

    operations = [
        migrations.DeleteModel(
            name='User',
        ),
    ]