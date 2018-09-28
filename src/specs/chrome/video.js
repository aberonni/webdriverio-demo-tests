describe('Check video on a website', function() {
    it('should have paused video on landing, and start playing when clicking on it', function() {
        browser.url(
            'http://techslides.com/sample-webm-ogg-and-mp4-video-files-for-html5'
        );

        const videoSelector = 'video';
        browser.waitForExist(videoSelector, 10000);
        browser.assertVideoPaused(videoSelector);
        browser.click(videoSelector);
        browser.assertVideoPlaying(videoSelector);
    });
});
