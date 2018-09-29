describe('Check jwplayer demo page', function() {
    it('should autoplay video, and allow for pausing and playing', function() {
        browser.url(
            'https://developer.jwplayer.com/jw-player/demos/basic/chromeless-player/'
        );

        browser.timeouts('script', 60000);

        const videoSelector = '.jw-video';
        const pauseButtonSelector = '#pause';
        const playButtonSelector = '#play';

        browser.waitForExist(videoSelector, 10000);
        browser.assertVideoPlaying(videoSelector);
        browser.click(pauseButtonSelector);
        browser.assertVideoPaused(videoSelector);
        browser.click(playButtonSelector);
        browser.assertVideoPlaying(videoSelector);
    });
});
