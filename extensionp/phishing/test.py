import joblib

model = joblib.load('/Users/veer/College/projects/phishing/Phishing-extension/extensionp/phishing/model.pkl')
email_data = 'HEllo world'
predictions = model.predict(email_data)

print(predictions)