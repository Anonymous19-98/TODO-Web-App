from django.db import models
from rest_framework import serializers
from .models import TODO


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = TODO
        fields = ('id', 'Title', 'Description', 'Completed')
        # field = '__all__'
        # exclude = ('id')
