const assert = require('assert');

describe('Make sure there are no errors on the hacker news home page', function() {
    it('get console log and make sure it is empty', async function() {
        const log = await browser.log('browser').value;
        assert.ok(log.length === 0, 'The console log is empty');
    });
});
