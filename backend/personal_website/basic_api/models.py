from django.db import models

# Create your models here.
class Profile(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)

class User(models.Model):
    profile_bouldering = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='profile_bouldering')
    profile_books = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='profile_books')


class TimelineItem(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    type = models.CharField(max_length=10, choices=[('job', 'job'), ('school', 'school')])
    align_description = models.CharField(max_length=5, choices=[('left', 'left'), ('right', 'right')])
    period = models.CharField(max_length=200)

