const tcpPortUsed = require('tcp-port-used');
const { config } = require('./wdio.conf');

const { capabilities } = config;

capabilities.forEach(capability => {
    // can't test vrs on zalenium
    // because different environments yield different results
    capability.exclude.push('src/specs/advanced/vrs.js');
});

// This configuration is used to run tests with zalenium
exports.config = {
    ...config,
    capabilities,
    onPrepare() {
        // make sure port 4444 isn't already being used
        return tcpPortUsed.check(4444, '127.0.0.1').then(inUse => {
            if (!inUse) {
                console.error('Could not find Zalenium running on port 4444.');
                console.error(
                    'Run "yarn zalenium" in a separate terminal window and then try again.'
                );
                process.exit(1);
            }
        });
    },
};
