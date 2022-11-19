
chrome.tabs.query({ currentWindow: true }, function (tabs) {
    console.log(tabs);
    tabs.forEach((el, index) => {
        console.log(index);
        const link = document.createElement('a');
        link.style.display = 'block';
        link.style.width = 'fit-content';
        link.href = el.url;
        link.innerText = (index + 1) + ' ' + el.title;
        document.querySelector('#tab-column').appendChild(link);
    });
});