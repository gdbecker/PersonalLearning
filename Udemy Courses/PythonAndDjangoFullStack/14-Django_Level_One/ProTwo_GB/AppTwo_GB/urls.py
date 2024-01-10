from django.conf.urls import url
from django.urls import path
from AppTwo_GB import views
from AppTwo_GB import forms

#Template URLs!
app_name = 'AppTwo_GB'

urlpatterns = [
    path('',views.index,name='index'),
    path('help',views.help,name='help'),
    path('persons',views.persons,name='persons'),
    path('formpage/',views.form_name_view,name='form_name'),

    path('relative/',views.relative,name='relative'),
    path('other/',views.other,name='other'),
    path('register/',views.register,name='register'),

    path('user_login/',views.user_login,name='user_login')

]
