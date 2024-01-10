from django.shortcuts import render
from django.urls import reverse_lazy
from django.views.generic import (View,TemplateView,
                                    ListView,DetailView,
                                    CreateView,UpdateView,
                                    DeleteView)
from . import models

# from django.http import HttpResponse

# Create your views here.

# Class based view!
# class CBView(View):
#     def get(self,request):
#         return HttpResponse("Class based views are cool!")

# Class based view! #2
class IndexView(TemplateView):
    template_name = 'index.html'

    def get_context_data(self,**kwargs):
        context = super().get_context_data(**kwargs)
        context['injectme'] = 'Basic injection!'
        return context

# Using the templates folder within the basic_app folder itself
class SchoolListView(ListView):
    model = models.School

    # ListView does this for you, makes context dict with name:
    # school_list

    # or can customize for your own
    context_object_name = 'schools'

class SchoolDetailView(DetailView):
    model = models.School
    template_name = 'basic_app/school_detail.html'
    context_object_name = "school_detail"

class SchoolCreateView(CreateView):
    fields = ('name','principal','location')
    model = models.School

class SchoolUpdateView(UpdateView):
    fields = ('name','principal')
    model = models.School

class SchoolDeleteView(DeleteView):
    model = models.School
    success_url = reverse_lazy("basic_app:list")
