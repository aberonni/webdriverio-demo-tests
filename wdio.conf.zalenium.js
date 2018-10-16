const { config } = require('./wdio.conf');

exports.config = {
    ...config,
    // the only difference in configuration when running tests for zalenium,
    // is that we don't need any services to manage selenium because zalenium does that for us
    services: [],
};
