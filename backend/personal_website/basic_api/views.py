from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.http import JsonResponse
from .models import TimelineItem

# Create your views here.
@api_view(['GET'])
def get_user(request):
    data = {"Hello": "World"}
    return Response(data)

@api_view(["GET"])
def get_timeline_items(request):
    timeline_items = TimelineItem.objects.all()
    data = []
    for item in timeline_items:
        data.append({
            "id": item.id,
            "title": item.title,
            "description": item.description,
            "type": item.type,
            "align_description": item.align_description,
            "period": item.period
        })

    return Response(data)