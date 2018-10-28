// load the axe-core script
const axeSource = require('axe-core').source;
const { assert } = require('chai');

describe('a11y - axe', function() {
    it('index should not contain any critical a11y violations', function() {
        browser.url('/');

        // inject the axe script - this will make axe availabile in the page
        browser.execute(axeSource);

        // run axe inside the browser and get results
        const { value } = browser.executeAsync(function(done) {
            // eslint-disable-next-line no-undef
            axe.run(function(err, results) {
                if (err) done(err);
                done(results);
            });
        });

        // filtering out non-critical violations
        const violations = value.violations.filter(
            v => v.impact === 'critical'
        );

        assert.lengthOf(violations, 0, 'index does not contain any violations');
    });
});
