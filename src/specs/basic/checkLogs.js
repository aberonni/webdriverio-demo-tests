const { assert } = require('chai');

describe('Make sure there are no errors on the index page', function() {
    it('get console log and make sure it is empty', async function() {
        browser.url('/');
        const log = await browser.log('browser').value;
        assert.lengthOf(log, 0, 'The console log is empty');
    });
});
