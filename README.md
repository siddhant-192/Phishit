# PhishIt - Phishing Attack Detection Browser Extension

## Overview

PhishIt is a browser extension designed to detect and mitigate phishing attacks within email communications. In an era where cybersecurity is of paramount importance, PhishIt aims to empower users by providing an additional layer of protection against deceptive techniques used by malicious actors.

## Features

- **Seamless Integration:** PhishIt seamlessly integrates with your Chrome browser, offering a user-friendly popup interface for easy interaction.

- **Real-time Scanning:** The extension allows users to proactively scan and assess the legitimacy of incoming emails in real-time.

- **Machine Learning Powered:** PhishIt employs a Logistic Regression model trained on labeled text datasets to predict the likelihood of an email being a phishing attempt.

- **Server Infrastructure:** The Django server acts as the core component, facilitating communication between the Chrome extension and the machine learning model.

## Technical Architecture

The PhishIt project consists of the following components:

1. **Chrome Extension:**
   - Popup Interface for user interaction.
   - Content Extraction for analyzing email content.

2. **Communication Layer:**
   - RESTful APIs for communication between the extension and the server.

3. **Server (Django):**
   - API Endpoint for receiving and processing email content.
   - Data Preprocessing for text cleaning, tokenization, and feature extraction.
   - Phishing Prediction using the Logistic Regression model.
   - Result Transmission back to the Chrome extension.

4. **Machine Learning Model (Logistic Regression):**
   - Trained on a labeled text dataset.
   - Predicts the likelihood of an email being a phishing attempt.

5. **User Interface (Chrome Extension):**
   - Displays prediction results to the user.

6. **Data Storage (Optional):**
   - Logging and tracking phishing attempts, user feedback, and model performance metrics.

7. **Potential Enhancements:**
   - Real-time Scanning: Automatically scan incoming emails for immediate protection.
   - User Feedback Mechanism: Improve model accuracy with user-reported feedback.
   - Continuous Model Updates: Periodic retraining with new data for evolving phishing techniques.
   - Multilingual Support: Detect phishing attempts in multiple languages.

## Dataset

The project utilizes a labeled text dataset for training the Logistic Regression model.

## Model Selection

After analyzing various machine learning models, Logistic Regression was chosen as the most suitable for developing the phishing prediction model.

## Getting Started

To use PhishIt, follow these steps:

1. Clone the repository.
2. Load the extension in Chrome.
3. Open your email client and start scanning for phishing attempts.

## Contributing

Contributions are welcome! If you have ideas for improvements or new features, feel free to open an issue or submit a pull request.

## Acknowledgments

- Thanks to Siddhant Mantri and Veer Mehta for their contributions to the PhishIt project.
- Special thanks to the open-source community for providing valuable resources and inspiration.

Stay secure with PhishIt! Report any issues or share your feedback.
