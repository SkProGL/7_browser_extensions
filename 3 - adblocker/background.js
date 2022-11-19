chrome.webRequest.onBeforeRequest.addListener(
    function () { return { cancel: true } }, {
    urls: [
        "https://securepubads.g.doubleclick.net/gampad/ads*"
    ]
}, ["blocking"]
)