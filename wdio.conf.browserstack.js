require('dotenv').load();

const { config } = require('./wdio.conf');

delete config.onPrepare;
delete config.onComplete;

exports.config = {
    ...config,
    capabilities: [
        {
            os: 'OS X',
            os_version: 'Mojave',
            browserName: 'Chrome',
            browser_version: '69.0',
            exclude: [
                'src/specs/advanced/vrs.js',
                'src/specs/advanced/audio.js',
            ],
        },
    ],
    services: config.services.concat(['browserstack']),
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    browserstackLocal: true,
};
