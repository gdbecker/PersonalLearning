from django import forms

from . import models
from Cafe.choices import *

class CafeForm(forms.ModelForm):
    class Meta:
        model = models.Cafe
        fields = ('name', 'map_url', 'img_url', 'location', 'open_time',
        'closing_time', 'coffee_rating', 'wifi_rating', 'power_rating',
        'seats', 'has_toilet', 'can_take_calls', 'coffee_price')

        widgets = {
            'coffee_rating': forms.Select(choices=COFFEE_RATINGS,
                attrs={'class': 'form-control'}),
            'wifi_rating': forms.Select(choices=WIFI_RATINGS,
                attrs={'class': 'form-control'}),
            'power_rating': forms.Select(choices=POWER_RATINGS,
                attrs={'class': 'form-control'}),
        }
