const { assert } = require('chai');
const audioDetector = require('../../audio-detector');

describe('audio with custom extension', function() {
    it('audio should be playing when video is playing', function() {
        const { element } = audioDetector.config;

        browser.url('/video.html');

        const videoSelector = '#video';

        browser.waitForExist(videoSelector, 10000);
        browser.click(videoSelector);

        // wait for 5s to get to the part of the video that has audio
        browser.pause(5000);

        // This is the element injected by the extension if audio is playing
        const audioIsPlayingElementSelector = `#${element.id}.${
            element.isPlayingAudioClass
        }`;

        // ...if the element doesn't exist then the test should fail
        const isPlayingAudio = browser.isExisting(
            audioIsPlayingElementSelector
        );
        assert(isPlayingAudio, 'audio is playing');
    });
});
