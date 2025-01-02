from django.urls import path
from .views import get_resume_pdf

urlpatterns = [
    path('', get_resume_pdf, name='resume_pdf')
]