// all available languages
const voiceList = [{ name: 'Microsoft George - English (United Kingdom)', lang: 'en-GB' }, { name: 'Microsoft Hazel - English (United Kingdom)', lang: 'en-GB' }, { name: 'Microsoft Susan - English (United Kingdom)', lang: 'en-GB' }, { name: 'Microsoft Irina - Russian (Russia)', lang: 'ru-RU' }, { name: 'Microsoft Pavel - Russian (Russia)', lang: 'ru-RU' }, { name: 'Google Deutsch', lang: 'de-DE' }, { name: 'Google US English', lang: 'en-US' }, { name: 'Google UK English Female', lang: 'en-GB' }, { name: 'Google UK English Male', lang: 'en-GB' }, { name: 'Google español', lang: 'es-ES' }, { name: 'Google español de Estados Unidos', lang: 'es-US' }, { name: 'Google français', lang: 'fr-FR' }, { name: 'Google हिन्दी', lang: 'hi-IN' }, { name: 'Google Bahasa Indonesia', lang: 'id-ID' }, { name: 'Google italiano', lang: 'it-IT' }, { name: 'Google 日本語', lang: 'ja-JP' }, { name: 'Google 한국의', lang: 'ko-KR' }, { name: 'Google Nederlands', lang: 'nl-NL' }, { name: 'Google polski', lang: 'pl-PL' }, { name: 'Google português do Brasil', lang: 'pt-BR' }, { name: 'Google русский', lang: 'ru-RU' }, { name: 'Google 普通话（中国大陆）', lang: 'zh-CN' }, { name: 'Google 粤語（香港）', lang: 'zh-HK' }, { name: 'Google 國語（臺灣）', lang: 'zh-TW' }];

window.addEventListener('mouseup', function () {
    let selection = window.getSelection().toString();
    if (selection.length < 1 || selection === '\n' || selection === '\r' || selection === ' ') { return; }
    else {
        const utterance = new SpeechSynthesisUtterance(selection);
        utterance.lang = 'en-US';
        window.speechSynthesis.speak(utterance);
    }
});