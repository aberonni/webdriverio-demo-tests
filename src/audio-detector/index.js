const { join } = require('path');
const zipper = require('zip-local');

const extension = zipper.sync
    .zip(join(__dirname, 'extension'))
    .memory()
    .toString('base64');

const config = require('./extension/config');

module.exports = {
    /**
     * Retrieve the audio-detector extension, as a base64 strings
     * @return {string} base64 string - extension
     */
    extension,
    /**
     * Retrieve the audio-detector configuration
     * @return {object} configuration
     */
    config,
};
