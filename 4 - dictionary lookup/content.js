const XHR_DICTIONARY = new XMLHttpRequest();

window.addEventListener('mouseup', function () {
    let selection = window.getSelection().toString();
    if (selection.length < 1 || selection === '\n' || selection === '\r' || selection === ' ') { return; }
    else { dictionaryAPI(selection); }
})

function dictionaryAPI(word='') {
    if (word) {
        XHR_DICTIONARY.open("GET", "https://api.dictionaryapi.dev/api/v2/entries/en/" + word);
        XHR_DICTIONARY.send();
    }
}
XHR_DICTIONARY.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE && this.responseText && JSON.parse(this.responseText)[0].meanings) {
        let response = JSON.parse(this.responseText)[0],
            buffer = [];
        console.log(response);
        response.meanings.forEach(a => { a.definitions.forEach(b => { buffer.push(b.definition) }); });
        alert(buffer.join('\n\n'));
    }
});
