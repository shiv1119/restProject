"""
URL configuration for eventproject project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from eventapp.viewsets import UserViewSet
from eventapp.views import UserLoginView, UserRegisterView, user_data, AddEventView, VerifyTokenView
from django.conf import settings
from django.conf.urls.static import static

router = DefaultRouter()
router.register(r'users', UserViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('api/register/', UserRegisterView.as_view(), name='user-register'),
    path('api/login/', UserLoginView.as_view(), name='user-login'),
    path('api/user/', user_data, name='user_data'),
    path('api/addevent/', AddEventView.as_view(), name='add_event'),
    path('api/verify-token/', VerifyTokenView.as_view(), name='verify_token'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


if settings.DEBUG:
   static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
