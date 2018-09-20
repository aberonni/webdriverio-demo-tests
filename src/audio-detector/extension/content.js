/* global config */

// config is declared in config.js
const { element } = config;

// create element in DOM for later usage
const extensionElement = document.createElement('span');
extensionElement.setAttribute('id', element.id);
extensionElement.style = 'display: none;';
document.body.appendChild(extensionElement);

// listener is triggered from background.js
// when audible property changes on current tab
chrome.runtime.onMessage.addListener((request) => {
    if (request.audible) {
        extensionElement.className = element.isPlayingAudioClass;
    } else {
        extensionElement.className = '';
    }
});
