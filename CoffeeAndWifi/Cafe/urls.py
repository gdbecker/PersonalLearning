from django.urls import path
from django.contrib.auth import views as auth_views
from . import views

app_name = 'Cafe'

urlpatterns = [
    path('cafes/', views.ListCafes.as_view(), name='cafes'),
    path('favorites/', views.UserCafes.as_view(), name='favorites'),
    path('addfavorite/<int:pk>', views.AddFavorite.as_view(), name='add_favorite'),
    path('removefavorite/<int:pk>', views.RemmoveFavorite.as_view(), name='remove_favorite'),
    path('addcafe/', views.CreateCafe.as_view(), name='add_cafe'),
    path('deletecafe/<int:pk>/', views.DeleteCafe, name='delete_cafe'),
]
