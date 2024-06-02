chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "predictImage",
    title: "Predict Image",
    contexts: ["image"],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "predictImage") {
    const imageUrl = info.srcUrl;
    chrome.tabs.sendMessage(tab.id, {
      action: "predictImage",
      imageUrl: imageUrl,
    });
  }
});
