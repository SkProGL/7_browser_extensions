// speed change using popup menu(real-time change)
chrome.runtime.onMessage.addListener((request) => {
    if (request.target === 'content' && request.action == 'speed' && request.content) {
        document.querySelector('video').playbackRate = request.content;
    }
});
// speed change using storage(when script is first loaded and hasn't received any message from popup)
chrome.storage.sync.get(['key'], (result) => {
    if (result.key) {
        console.log((result.key.speed) ? result.key.speed : '1');
        document.querySelector('video').playbackRate = (result.key.speed) ? result.key.speed : '1';
    }
});