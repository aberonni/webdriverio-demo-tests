const args = require('./src/chrome.args.js');
const { config } = require('./wdio.conf');
const audioDetector = require('./src/audio-detector');

exports.config = {
    ...config,
    specs: ['src/specs/chrome-audio/**/*.js'],
    capabilities: [
        {
            maxInstances: 1,
            browserName: 'chrome',
            chromeOptions: { args },
            'goog:chromeOptions': {
                extensions: [audioDetector.extension],
            },
        },
    ],
};
