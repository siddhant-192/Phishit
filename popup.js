document.addEventListener('DOMContentLoaded', function() {
  var checkButton = document.getElementById('check');
  checkButton.addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { method: "changePage" }, function(response) {
        if (response.method == "changePage") {
          let mailText = extractContentBetweenKeywords(response.text, "to me", "Reply");
          document.getElementById("printmail").innerHTML = mailText;
          console.log('Email data to be sent:', mailText);

          // Make an HTTP POST request to your server
          sendEmailDataToServer(mailText);
          getData();
          
        }
      });
    });
  }, false);
}, false);

function extractContentBetweenKeywords(mailContent, startKeyword, endKeyword) {
  const startIndex = mailContent.indexOf(startKeyword);
  const endIndex = mailContent.indexOf(endKeyword);

  if (startIndex !== -1 && endIndex !== -1) {
    return mailContent.substring(startIndex + startKeyword.length, endIndex).trim();
  } else {
    return "Keywords not found in the provided content.";
  }
}

function sendEmailDataToServer(emailData) {
  const apiUrl = 'http://127.0.0.1:8000/phishing/receive_json/'; // Replace with your server URL

  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain', // Change the content type to text/plain
    },
    body: emailData, // Send the email data as a string directly
  })
    .then(response => response.text()) // Parse the response as text
    .then(data => {
      console.log('Email sent to server:', data);
    })
    .catch(error => {
      console.error('Error sending email to server:', error);
    });
}
// Make a GET request to the Django server

function getData(){
  const apiUrl = 'http://127.0.0.1:8000/phishing/get_content/';

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const printmailElement = document.getElementById('printmail');
      printmailElement.textContent = data.content;
      console.log(data.content);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
