const { assert } = require('chai');

describe('simple vrs test on google', function() {
    it('test that the logo has not changed', function() {
        browser.url('https://www.google.com/');
        browser.pause(2000);

        // testing an image to avoid cross-platform issues with fonts on travis
        const results = browser.checkElement('#hplogo');
        results.forEach(result => assert.ok(result.isExactSameImage));
    });
});
