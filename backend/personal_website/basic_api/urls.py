from django.urls import path
from .views import get_user, get_timeline_items

urlpatterns = [
    path('users', get_user, name='get_user'),
    path('timeline_items', get_timeline_items, name='get_timeline_items'),
]