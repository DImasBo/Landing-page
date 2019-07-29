# -*- coding: utf-8 -*-
from django.shortcuts import render
from django.shortcuts import redirect
from django.urls import reverse
# git ! [rejrcted] master 
#-----------------Main Page-----------------
def index(request):
	return render(request,'index.html')

def index_redirect(request):
	return redirect(reverse('index'))