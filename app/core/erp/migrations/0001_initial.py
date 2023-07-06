# Generated by Django 4.2.2 on 2023-07-03 10:52

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Padron',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('dni', models.CharField(blank=True, max_length=255, null=True)),
                ('apellido', models.CharField(blank=True, max_length=255, null=True)),
                ('nombre', models.TextField(blank=True, null=True)),
                ('sexo', models.CharField(blank=True, max_length=255, null=True)),
                ('domicilio', models.TextField(blank=True, null=True)),
                ('tipo_dni', models.CharField(blank=True, max_length=255, null=True)),
                ('n', models.SmallIntegerField(blank=True, null=True)),
                ('departamento', models.CharField(blank=True, max_length=255, null=True)),
                ('circuito', models.CharField(blank=True, max_length=255, null=True)),
                ('nombre_circuito', models.CharField(blank=True, max_length=255, null=True)),
                ('voto', models.SmallIntegerField(blank=True, null=True)),
            ],
            options={
                'db_table': 'padron',
                'managed': False,
            },
        ),
    ]
