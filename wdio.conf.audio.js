const { config } = require('./wdio.conf');
const audioDetector = require('./src/audio-detector');

exports.config = {
    ...config,
    specs: ['src/specs/chrome-audio/**/*.js'],
    capabilities: [
        {
            maxInstances: 1,
            browserName: 'chrome',
            'goog:chromeOptions': {
                extensions: [audioDetector.extension],
            },
        },
    ],
};
