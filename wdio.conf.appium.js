const { config } = require('./wdio.conf');

exports.config = {
    ...config,
    specs: ['src/specs/basic/**/*.js'],
    port: 4723,
    capabilities: [
        {
            maxInstances: 1,
            browserName: 'safari',
            deviceName: 'iPhone 5s',
            platformVersion: '11.4',
            platformName: 'iOS',
        },
    ],
    services: ['appium'],
    appium: {
        args: {
            address: '127.0.0.1',
            commandTimeout: '22200',
            sessionOverride: true,
            debugLogSpacing: true,
        },
    },
};
