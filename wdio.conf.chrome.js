const chromedriver = require('chromedriver');

const args = require('./src/chrome.args.js');
const { config } = require('./wdio.conf');

exports.config = {
    ...config,
    specs: ['src/specs/chrome/**/*.js'],
    services: [],
    capabilities: [
        {
            maxInstances: 1,
            browserName: 'chrome',
            chromeOptions: { args },
        },
    ],
    onPrepare() {
        chromedriver.start(['--port=4444', '--url-base=/wd/hub']);
    },
    onComplete() {
        chromedriver.stop();
    },
};
