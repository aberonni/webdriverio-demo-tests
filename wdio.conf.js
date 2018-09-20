exports.config = {
    specs: ['src/specs/all/**/*.js'],
    capabilities: [
        {
            maxInstances: 1,
            browserName: 'chrome',
        },
        {
            maxInstances: 1,
            browserName: 'firefox',
        },
    ],
    reporters: ['spec'],
    services: ['selenium-standalone', 'chromedriver'],
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
