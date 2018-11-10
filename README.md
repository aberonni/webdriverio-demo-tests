# WebdriverIO Demo Tests
[![Build Status](https://travis-ci.org/aberonni/webdriverio-demo-tests.svg?branch=master)](https://travis-ci.org/aberonni/webdriverio-demo-tests)

This repository showcases different ways to run tests and various techniques for testing trickier aspects of a website. These examples use [WebdriverIO](http://webdriver.io/), but many of these strategies can be applied with other testing frameworks too.

The different ways in which you can run tests are listed below. To explore what the tests are doing, take a look at the [src/specs](src/specs) folder.

> If this repository is a bit too advanced for your level of knowledge of WebdriverIO and end-to-end testing, I recommend you first check out my [simple chromedriver setup](https://github.com/aberonni/webdriverio-simple-chromedriver-setup) repository.

## Prerequisites

- [node](https://nodejs.org/en/download/)
- [yarn](https://yarnpkg.com/en/)
- [appium](http://appium.io/) (only for appium tests)
- [docker](https://www.docker.com/) (only for zalenium tests)

#### Install dependencies

```bash
$ yarn
```

## Running tests

The following is a list of different ways you can run tests.

> By default you will run all tests, you can run a specific test by adding the `--spec` option. For example: `yarn test --spec src/specs/basic/contactForm.js`

### Local Chrome browser

[More info about chromedriver](https://sites.google.com/a/chromium.org/chromedriver/)

This will use chromedriver to take advantage of your local chrome installation so you can see what the browser is doing while the test runs.

```bash
$ yarn test
```

### Zalenium

[More info about zalenium](https://github.com/zalando/zalenium)

You must have docker installed and ready to use in order to run zalenium. Verify your docker installation with the `docker info` command.

Once docker is ready, run the following commands in two separate terminals.

```bash
$ yarn zalenium
$ yarn test:zalenium
```

### Browserstack

[More info about browserstack](https://automate.browserstack.com)

You must register for an account on browserstack, and then login to [your dashboard](https://automate.browserstack.com/dashboard) to retrieve username and access key. Add a `.env` file in the root of the project that looks like this:

```
BROWSERSTACK_USERNAME=your_username
BROWSERSTACK_ACCESS_KEY=your_access_key
```

Afterwards you can run tests on Browserstack

```bash
$ yarn test:browserstack
```

### Appium - XCode Emulated iPhone

[More info about appium](http://appium.io/)

These tests use appium to leverage XCode's simulators. To make this work you will also have to install appium.

```bash
$ yarn global add appium
$ yarn test:appium
```

### Debugging tests

You may want to debug tests so you can stop execution and inspect the state of the website.

#### Option 1 - VSCode

If you use VSCode you can debug a test by simply opening a test spec file and pressing `F5`.

#### Option 2 - Chrome debugger

Run

```bash
$ yarn test:debug
```

And then navigate to [chrome://inspect](chrome://inspect) to connect to the debugger.

### REPL interface

[More info about REPL](http://webdriver.io/guide/usage/repl.html)

The REPL interface allows you to test wdio commands on a real browser. The following script will take care of automatically starting chromedriver and running the right REPL command for you.

```bash
$ yarn repl
```

## :tada: Contributions

Contributions are very welcome! If you have an issue, feedback, enhancement, improvement or anything else, please do open an issue or a PR.
