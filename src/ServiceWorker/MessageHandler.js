chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log("++++ message ", request);
  console.log(
    sender.tab
      ? "from a content script:" + sender.tab.url
      : "from the extension"
  );
  if (request.greetings === "hello") sendResponse({ farewell: "goodbye" });
});

// "content_scripts": [
//   {
//     "matches": ["<all_urls>"],
//     "js": ["src/ContentScript/ImageDetector.js"]
//   }
// ],

// "background": {
//   "service_worker": "src/ServiceWorker/MessageHandler.js"
// }
