const { spawn } = require('child_process');
const chromedriver = require('chromedriver');

chromedriver.start(['--silent'], true).then(() => {
    spawn('npx', ['wdio', 'repl', 'chrome', '--port', '9515', '--path', '/'], {
        stdio: 'inherit',
    }).on('exit', () => {
        chromedriver.stop();
    });
});
