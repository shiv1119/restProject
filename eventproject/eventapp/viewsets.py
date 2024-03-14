from rest_framework import viewsets, permissions
from django.contrib.auth.models import User
from eventapp.serializers import UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]
