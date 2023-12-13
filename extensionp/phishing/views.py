
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST
from phishing.model import test
import json
import joblib
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import CountVectorizer
from sklearn import svm
import csv
from sklearn.feature_extraction.text import TfidfVectorizer

email=[]
@csrf_exempt
@require_POST
def receive_json(request):
    if request.method == 'POST':
        # Access the data from the POST request
        email_data = request.body.decode('utf-8')  # Decode the request body as a string
        
        # Process and save the data
        # For example, you can save it to a database or perform any other desired operations
        # Here, we are just printing it for demonstration purposes
        print("Received email data:", email_data)
        email.append(email_data)

        # You can return a response to the extension if needed
        response_data = {'message': 'Data received successfully'}
        return JsonResponse(response_data)

    return JsonResponse({'error': 'Invalid request method'}, status=400)

def get_content(request):
    if request.method == 'GET':
        print(email)
        model = joblib.load('/Users/phoenix/Desktop/Phishing-extension-main/extensionp/phishing/model.pkl')
        vectorizer = joblib.load('/Users/phoenix/Desktop/Phishing-extension-main/extensionp/phishing/vectorizer.pkl')

        X_test = [email[0]]

        X_test_vec = vectorizer.transform(X_test)
        
        predictions = model.predict(X_test_vec)
        
        return JsonResponse({'content': predictions[0]})

    return JsonResponse({'error': 'Invalid request method'})
    
