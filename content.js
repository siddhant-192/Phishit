chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if(request.method == "changePage"){
            let var1 = document.body.innerText;
            console.log(document.body.innerText);
            sendResponse({text: var1, method: "changePage"}); //same as innerText
        }
    }
);
