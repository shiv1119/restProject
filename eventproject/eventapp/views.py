
from eventapp.models import User,AddEvent
from eventapp.serializers import UserSerializer, UserLoginSerializer, AddEventSerializer
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.views import APIView
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated



class UserRegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserLoginView(generics.CreateAPIView):
    serializer_class = UserLoginSerializer  # Specify the serializer class

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        email = serializer.validated_data.get('email')
        password = serializer.validated_data.get('password')
        user = User.objects.filter(email=email).first()
        if user is None or not user.check_password(password):
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_400_BAD_REQUEST)
        
        refresh = RefreshToken.for_user(user)
        return Response({
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        })



@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_data(request):
    user = request.user
    data = {
        'username': user.username,
        'email': user.email,
    }
    return Response(data)


class AddEventView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        serializer = AddEventSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
class VerifyTokenView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        return Response({'message': 'Token is valid'}, status=200)