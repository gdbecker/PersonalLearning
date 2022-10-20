from django.db import models
from django.contrib.auth import get_user_model
from django import template
from django.urls import reverse

# Create your models here.
# Cafe

User = get_user_model()

class Cafe(models.Model):
    name = models.CharField(max_length=250, unique=True)
    map_url = models.CharField(max_length=500)
    img_url = models.CharField(max_length=500)
    location = models.CharField(max_length=250)
    open_time = models.CharField(max_length=250)
    closing_time = models.CharField(max_length=250)
    coffee_rating = models.CharField(max_length=250)
    wifi_rating = models.CharField(max_length=250)
    power_rating = models.CharField(max_length=250)
    seats = models.CharField(max_length=10)
    has_toilet = models.BooleanField()
    can_take_calls = models.BooleanField()
    coffee_price = models.FloatField()
    users = models.ManyToManyField(User, through='UserFavorite')

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['name']

class UserFavorite(models.Model):
    cafe = models.ForeignKey(Cafe, related_name='favorites', on_delete=models.CASCADE)
    user = models.ForeignKey(User, related_name='user_cafes', on_delete=models.CASCADE)

    def __str__(self):
        return self.user.username

    class Meta:
        unique_together = ('cafe', 'user')
