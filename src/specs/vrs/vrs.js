const { assert } = require('chai');

describe('simple vrs test on hacker news', function() {
    it('test visual aspect of search form in footer', function() {
        browser.url('/');
        browser.pause(2000);

        const results = browser.checkElement('form');
        results.forEach(result => assert.ok(result.isExactSameImage));
    });
});
