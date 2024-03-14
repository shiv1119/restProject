from rest_framework import serializers
from eventapp.models import User, AddEvent

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']
        
        
        
class UserLoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()
    

class AddEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = AddEvent
        fields = '__all__'
        
    