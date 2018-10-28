const { assert } = require('chai');

describe('console logs', function() {
    it('should not contain any severe errors', async function() {
        browser.url('/');
        const logs = await browser.log('browser').value;
        const errors = logs.filter(log => log.level === 'SEVERE');
        assert.lengthOf(errors, 0, 'console does not contain errors');
    });
});
