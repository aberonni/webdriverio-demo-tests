const args = require('./src/chrome.args.js');
const { config } = require('./wdio.conf');

// This configuration is used by vscode for debugging
exports.config = {
    ...config,
    maxInstances: 1,
    execArgv: ['--inspect-brk=127.0.0.1:5859'],
    capabilities: [
        {
            maxInstances: 1,
            browserName: 'chrome',
            chromeOptions: { args },
        },
    ],
};
