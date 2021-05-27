from django.shortcuts import render
from rest_framework import routers, serializers, viewsets
from .serializers import TodoSerializer
from .models import TODO


class TodoView(viewsets.ModelViewSet):

    queryset = TODO.objects.all()
    serializer_class = TodoSerializer
