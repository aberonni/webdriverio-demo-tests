const assert = require('assert');

describe('Basic example on hacker news page', function() {
    it('should have the right title', function() {
        browser.url('/');
        const title = browser.getTitle();
        assert.equal(title, 'Hacker News');
    });
});
