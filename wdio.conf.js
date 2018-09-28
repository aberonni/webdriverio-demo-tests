/* global browser */
const commandsHelper = require('./src/commands');

exports.config = {
    specs: ['src/specs/basic/**/*.js', 'src/specs/a11y/**/*.js'],
    capabilities: [
        {
            maxInstances: 1,
            browserName: 'chrome',
        },
        {
            maxInstances: 1,
            browserName: 'chrome',
            chromeOptions: {
                mobileEmulation: {
                    deviceName: 'Nexus 5',
                },
            },
        },
        {
            maxInstances: 1,
            browserName: 'firefox',
        },
    ],
    reporters: ['spec'],
    services: ['selenium-standalone', 'chromedriver'],
    /**
     * Gets executed before test execution begins. At this point you can access to all global
     * variables like `browser`. It is the perfect place to define custom commands.
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
    before() {
        commandsHelper(browser);
    },
    // Set a base URL in order to shorten url command calls.
    // If your `url` parameter starts with `/`, the base url gets prepended,
    // not including the path portion of your baseUrl.
    // If your `url` parameter starts without a scheme or `/`
    // (like `some/path`), the base url gets prepended directly.
    baseUrl: 'https://news.ycombinator.com/',
    // Saves a screenshot to a given path if a command fails.
    screenshotPath: './errorShots/',
    // Make sure you have the wdio adapter package for the specific
    // framework installed before running any tests.
    framework: 'mocha',
    // Options to be passed to Mocha.
    // See the full list at http://mochajs.org/
    mochaOpts: {
        ui: 'bdd',
    },
};
