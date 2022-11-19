
chrome.commands.onCommand.addListener((command) => {
    console.log(`keyboard command: ${command}`);
    if (command === "screenshot") {
        chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
            // make screenshot
            chrome.tabs.captureVisibleTab(null, {}, function (dataUrl) {
                chrome.tabs.sendMessage(tabs[0].id, { target: "content", img: dataUrl }, function (result) {
                    // error message processing code
                    if (chrome.runtime.lastError && result) { console.log(result); }
                });
            });

        });
    }
});