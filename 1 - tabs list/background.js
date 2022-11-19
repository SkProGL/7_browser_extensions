chrome.commands.onCommand.addListener((command) => {
    console.log(`keyboard command: ${command}`);
    if (command === "open_menu") {
        chrome.tabs.create({ url: chrome.runtime.getURL("main.html") });
    }
});

chrome.runtime.onInstalled.addListener(() => {
    chrome.tabs.create({ url: chrome.runtime.getURL("main.html") });
});