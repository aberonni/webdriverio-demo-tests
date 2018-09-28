const args = require('./src/chrome.args.js');
const { config } = require('./wdio.conf');

exports.config = {
    ...config,
    specs: ['src/specs/chrome/**/*.js'],
    capabilities: [
        {
            maxInstances: 1,
            browserName: 'chrome',
            chromeOptions: { args },
        },
    ],
};
