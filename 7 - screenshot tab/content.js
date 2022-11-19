chrome.runtime.onMessage.addListener((request) => {
    if (request.target === 'content') {
        var img = document.createElement('img');
        console.log(request);
        img.src = request.img || '';
        img.style.width = '50%';
        img.style.height = '50%';
        img.style.border = '10px solid blue';
        img.style.position = 'absolute';
        img.style.zIndex = 9999;
        document.body.prepend(img);
    }
});