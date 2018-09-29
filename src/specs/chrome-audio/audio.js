const { assert } = require('chai');
const audioDetector = require('../../audio-detector');

describe('Chrome audio testing extension example', function() {
    it('makes sure that Michael says NOOOO!', function() {
        const { element } = audioDetector.config;

        browser
            .url('https://www.youtube.com/watch?v=31g0YE61PLQ')
            // just wait 3s for video to load and play
            .pause(3000);

        // Element injected by extension if audio has been played
        const audioIsPlayingElementSelector = `#${element.id}.${
            element.isPlayingAudioClass
        }`;

        // ...if the element doesn't exist then the test should fail
        const isPlayingAudio = browser.isExisting(
            audioIsPlayingElementSelector
        );
        assert(isPlayingAudio, 'Michael is saying NOOOO!');
    });
});
