/**
 * Listens for messages from the background script.
 */
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

    /**
     * Print the message to the console.
     */
    if (typeof request.printToConsole !== 'undefined') {
        console.log(request.printToConsole);
    }

});
