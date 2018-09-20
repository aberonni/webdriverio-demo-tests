// this tells the extension how to create the element
// and tells the tests how to look for it
const config = {
    element: {
        id: 'audibleTabExtensionElement',
        isPlayingAudioClass: 'isPlayingAudio',
    },
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    // this only happens when the test includes this file
    // because chrome extension files are simply concatenated
    // and the config property is available globally
    module.exports = config;
}
