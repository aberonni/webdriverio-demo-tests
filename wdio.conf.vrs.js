const path = require('path');
const VisualRegressionCompare = require('wdio-visual-regression-service/compare');
const args = require('./src/chrome.args.js');
const { config } = require('./wdio.conf');

const getScreenshotName = basePath => context => {
    const { type } = context;
    const { title } = context.test;
    const browserVersion = parseInt(context.browser.version);
    const browserName = context.browser.name;
    const browserViewport = context.meta.viewport;
    const { width, height } = browserViewport;

    return path.join(
        process.cwd(),
        basePath,
        `${title}_${type}_${browserName}_v${browserVersion}_${width}x${height}.png`
    );
};

const compareScreenshotsFunction = new VisualRegressionCompare.LocalCompare({
    referenceName: getScreenshotName('screenshots/baseline'),
    screenshotName: getScreenshotName('screenshots/latest'),
    diffName: getScreenshotName('screenshots/diff'),
    misMatchTolerance: 0.01,
});

const updateBaselineFunction = new VisualRegressionCompare.SaveScreenshot({
    screenshotName: getScreenshotName('screenshots/baseline'),
});

exports.config = {
    ...config,
    specs: ['src/specs/vrs/**/*.js'],
    capabilities: [
        {
            maxInstances: 1,
            browserName: 'chrome',
            chromeOptions: { args },
        },
    ],
    services: config.services.concat(['visual-regression']),
    visualRegression: {
        // UPDATE_BASELINE=1 is set in the npm script 'test:vrs:update'
        // This script uses the simple SaveScreenshot function that always update baseline,
        // instead of the LocalCompare function that compares agains the baseline
        compare: process.env.UPDATE_BASELINE
            ? updateBaselineFunction
            : compareScreenshotsFunction,
        viewportChangePause: 300,
        viewports: [{ width: 1024, height: 768 }, { width: 640, height: 480 }],
    },
};
