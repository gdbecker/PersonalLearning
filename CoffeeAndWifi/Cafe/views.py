from django import template
from django.shortcuts import render
from django.contrib import messages
from django.contrib.auth import get_user_model
from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin, PermissionRequiredMixin
from django.urls import reverse, reverse_lazy
from django.views import generic, View
from django.http import Http404, HttpResponseRedirect
from braces.views import SelectRelatedMixin
from django.shortcuts import get_object_or_404, redirect

from . import models
from . import forms

User = get_user_model()
register = template.Library()

# Create your views here.
class ListCafes(LoginRequiredMixin, generic.ListView):
    model = models.Cafe
    template_name = 'Cafe/cafes.html'

    context_object_name = 'cafe_list'

    def get_queryset(self, *args, **kwargs):
        return super().get_queryset(*args, **kwargs)

class UserCafes(LoginRequiredMixin, generic.ListView):
    model = models.Cafe
    template_name = 'Cafe/user_cafes.html'
    context_object_name = 'cafe_list'

    def get_queryset(self, *args, **kwargs):
        return super().get_queryset(*args, **kwargs).filter(users = self.request.user)

class AddFavorite(LoginRequiredMixin, generic.RedirectView):
    def get_redirect_url(self, *args, **kwargs):
        return reverse('Cafe:favorites')

    def get(self, request, *args, **kwargs):
        cafe = get_object_or_404(models.Cafe, pk=self.kwargs.get('pk'))

        try:
            models.UserFavorite.objects.create(user=self.request.user, cafe=cafe)
        except:
            messages.warning(self.request, 'Warning already added!')
        else:
            messages.success(self.request, 'Cafe is now a favorite!')

        return super().get(request, *args, **kwargs)

class RemmoveFavorite(LoginRequiredMixin, generic.RedirectView):
    def get_redirect_url(self, *args, **kwargs):
        return reverse('Cafe:favorites')

    def get(self, request, *args, **kwargs):
        try:
            favorite = models.UserFavorite.objects.filter(
                user = self.request.user,
                cafe__id = self.kwargs.get('pk')).get()
        except models.UserFavorite.DoesNotExist:
            messages.warning(self.request, 'Sorry this is not in your favorites!')
        else:
            favorite.delete()
            messages.success(self.request, 'You have removed this cafe from your favorites.')

        return super().get(request, *args, **kwargs)

class CreateCafe(LoginRequiredMixin, generic.CreateView):
    model = models.Cafe
    form_class = forms.CafeForm
    template_name = 'Cafe/add_cafe.html'

    def form_valid(self, form):
        if form.is_valid():
            self.object = form.save(commit=False)
            self.object.coffee_rating = form.cleaned_data["coffee_rating"]
            self.object.wifi_rating = form.cleaned_data["wifi_rating"]
            self.object.power_rating = form.cleaned_data["power_rating"]
            self.object.save()
        return super().form_valid(form)

    def get_success_url(self):
        return reverse_lazy('Cafe:cafes')

@login_required
def DeleteCafe(request, pk):
    obj = get_object_or_404(models.Cafe, pk=pk)
    obj.delete()
    return redirect('Cafe:cafes')
