"""drf_api_ultimate_m_car URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
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
from django.views.generic import TemplateView
from .views import logout_route
# from .views import root_route

urlpatterns = [
    path('', TemplateView.as_view(template_name='index.html')),
    path('admin/', admin.site.urls),
    path('api/api-auth/', include('rest_framework.urls')),
    # our logout route has to be above the default one to be matched first
    path('api/dj-rest-auth/logout/', logout_route),
    path('api/dj-rest-auth/', include('dj_rest_auth.urls')),
    path('api/dj-rest-auth/', include('dj_rest_auth.urls')),
    path('api/dj-rest-auth/registration/', include(
        'dj_rest_auth.registration.urls')),
    path('api/', include('profiles.urls')),
    path('api/', include('posts.urls')),
    path('api/', include('events.urls')),
    path('api/', include('comments.urls')),
    path('api/', include('reviews.urls')),
    path('api/', include('likes.urls')),
    path('api/', include('followers.urls')),
    path('api/', include('bookmarks.urls')),
]

handler404 = TemplateView.as_view(template_name='index.html')

# UnComment out this urlatterns for viewing the API backend.
# urlpatterns = [
#     path('', root_route),
#     path('admin/', admin.site.urls),
#     path('api-auth/', include('rest_framework.urls')),
#     # our logout route has to be above the default one to be matched first
#     path('dj-rest-auth/logout/', logout_route),
#     path('dj-rest-auth/', include('dj_rest_auth.urls')),
#     path('dj-rest-auth/', include('dj_rest_auth.urls')),
#     path('dj-rest-auth/registration/', include(
#         'dj_rest_auth.registration.urls')),
#     path('', include('profiles.urls')),
#     path('', include('posts.urls')),
#     path('', include('events.urls')),
#     path('', include('comments.urls')),
#     path('', include('reviews.urls')),
#     path('', include('likes.urls')),
#     path('', include('followers.urls')),
#     path('', include('bookmarks.urls')),
# ]
