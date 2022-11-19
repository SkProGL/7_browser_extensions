var playbackSpeed = document.querySelector('#playbackSpeed');
chrome.storage.sync.get(['key'], (result) => {
    if (result.key) {
        playbackSpeed.value = (result.key.speed) ? result.key.speed : '1';
    }
});
playbackSpeed.addEventListener('keyup', (e) => {
    if (e.key === 'Tab' || e.key === 'ArrowDown' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') { return; };
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { target: "content", action: 'speed', content: playbackSpeed.value }, function (result) {
            // error message processing code
            if (chrome.runtime.lastError) { if (result) { console.log(result); } }
        });
    });
    chrome.storage.sync.set({ key: { 'speed': playbackSpeed.value } });
});