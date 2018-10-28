describe('video', function() {
    it('should respond to click and pause/play', function() {
        browser.url('/video.html');

        const videoSelector = '#video';

        browser.waitForExist(videoSelector, 10000);
        browser.assertVideoPaused(videoSelector);
        browser.click(videoSelector);
        browser.assertVideoPlaying(videoSelector);
        browser.click(videoSelector);
        browser.assertVideoPaused(videoSelector);
    });
});
