
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.get(['key'], (result) => {
        if (!result.key) { chrome.storage.sync.set({ key: { 'speed': '1' } }); }
    });
});