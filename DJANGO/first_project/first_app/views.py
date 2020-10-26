from django.shortcuts import render
from django.http import HttpResponse

# 1.Accessing HttpResponse object fron django.http module
# Each view of this app is going to be in this file as an individual function
# Each view is also going to atleast one argument, and for httprequest object by convention the arg is request/or any name we want to give it.
# Each view must return an HttpResponse object
# To see the view, we need to map this view into urls.py in the project

# Create your views here.

def index(request):
    return HttpResponse("Hello World!")
