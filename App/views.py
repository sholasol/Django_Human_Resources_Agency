from django.shortcuts import render

# Create your views here.

#funnction to render home page

def home(request):
    return render(request, "home.html")