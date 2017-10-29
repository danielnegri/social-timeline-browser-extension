'use strict';

chrome.runtime.onInstalled.addListener(details => {
  console.log('previousVersion', details.previousVersion);
});


let requestHandler = function(details) {
    if ( details.method === 'GET' && details.url === 'https://www.facebook.com/' ) {
        chrome.browserAction.setBadgeText({text: 'On'});
        return { redirectUrl: 'https://www.facebook.com/?sk=h_chr' };
    }

    // chrome.browserAction.setBadgeText({text: ''});
};

let filter = {
    urls: ['https://www.facebook.com/*']
};

chrome.webRequest.onBeforeRequest.addListener(requestHandler, filter, ['blocking']);
