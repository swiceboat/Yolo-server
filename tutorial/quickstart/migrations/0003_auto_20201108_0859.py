# Generated by Django 2.2.11 on 2020-11-07 23:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('quickstart', '0002_imagedata'),
    ]

    operations = [
        migrations.AlterField(
            model_name='imagedata',
            name='image',
            field=models.ImageField(default=False, upload_to='situation_image'),
        ),
    ]
