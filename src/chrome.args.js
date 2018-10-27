const args = ['no-sandbox', 'disable-dev-shm-usage', 'disable-gpu'];
if (process.env.CI || process.env.TRAVIS) {
    args.push('headless');
}
module.exports = args;
