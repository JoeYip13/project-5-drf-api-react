# Generated by Django 3.2.22 on 2023-11-17 10:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0003_alter_event_event_date'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='event_time',
            field=models.TextField(blank=True),
        ),
    ]
