from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from AppTwo_GB.models import *
from AppTwo_GB.forms import *
from . import forms
from django.urls import reverse
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required

# Create your views here.

def index(request):
    webpages_list = AccessRecord.objects.order_by('date')
    date_dict = {'access_records':webpages_list}

    myDict = {"somethingHere":"I am from views.py!"}
    return render(request,"AppTwo_GB/index.html",context=date_dict)

def help(request):
    myDict = {"helpHere":"Help on the way from views.py!"}
    return render(request,"AppTwo_GB/help.html",context=myDict)

def persons(request):
    persons_list = Person.objects.order_by('first_name')
    persons_dict = {'persons':persons_list}

    form = NewUserForm()

    if request.method == "POST":
        form = NewUserForm(request.POST)

        if form.is_valid():
            form.save(commit=True)
            return index(request)
        else:
            print("Error: Form invalid!")

    return render(request,"AppTwo_GB/persons.html",context={'form':form})

def form_name_view(request):
    form = forms.FormName()

    if request.method == 'POST':
        form = forms.FormName(request.POST)

        if form.is_valid():
            # Do something
            print("Validation Success!")
            print("Name: " + form.cleaned_data['name'])
            print("Email: " + form.cleaned_data['email'])
            print("Text: " + form.cleaned_data['text'])

    return render(request,'AppTwo_GB/form.html',{'form':form})

def other(request):
    context_dict = {'text':'hello world','number':100}
    return render(request,'AppTwo_GB/other.html',context=context_dict)

def relative(request):
    return render(request,'AppTwo_GB/relative_url_Templates.html')

def register(request):

    registered = False

    if request.method == 'POST':
        user_form = UserForm(data=request.POST)
        profile_form = UserProfileInfoForm(data=request.POST)

        if user_form.is_valid() and profile_form.is_valid():

            user = user_form.save()
            user.set_password(user.password)
            user.save()

            profile = profile_form.save(commit=False)
            profile.user = user

            if 'profile_pic' in request.FILES:
                profile.profile_pic = request.FILES['profile_pic']

            profile.save()

            registered = True

        else:
            print(user_form.errors,profile_form.errors)

    else:
        user_form = UserForm()
        profile_form = UserProfileInfoForm()

    return render(request,'AppTwo_GB/registration.html',
                            {'user_form':user_form, 'profile_form':profile_form, 'registered':registered})

@login_required
def special(request):
    return HttpResponse("You are logged in, nice!!")

@login_required
def user_logout(request):
    logout(request)
    return HttpResponseRedirect(reverse('AppTwo_GB:other'))

def user_login(request):

    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        user = authenticate(username=username,password=password)

        if user:
            if user.is_active:
                login(request,user)
                return HttpResponseRedirect(reverse('AppTwo_GB:other'))

            else:
                return HttpResponse("Account not Active")
        else:
            print("Someone tried to login and failed!")
            print("Username: {} and password {}".format(username,password))
            return HttpResponse("Invalid login details supplied!")

    else:
        return render(request,'AppTwo_GB/login.html')
