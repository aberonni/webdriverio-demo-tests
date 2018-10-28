const { assert } = require('chai');

describe('visual regression', function() {
    it('footer should not change', function() {
        const elementToCheck = '#footer';

        browser.url('/');
        browser.waitForVisible(elementToCheck);

        const results = browser.checkElement(elementToCheck);
        const isExactSameImage = results.every(
            result => result.isExactSameImage
        );
        assert.ok(isExactSameImage, 'footer has not changed');
    });
});
