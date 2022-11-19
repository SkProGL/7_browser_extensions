
chrome.commands.onCommand.addListener((command) => {
    console.log(`keyboard command: ${command}`);
    if (command === "duplicate_tab") {
        chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
            chrome.tabs.duplicate(tabs[0].id)
        });
    }
})