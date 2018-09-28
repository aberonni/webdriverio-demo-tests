const { config } = require('./wdio.conf');

exports.config = {
    ...config,
    specs: ['src/specs/chrome-logs/**/*.js'],
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
    ],
};
