# webdriverio-advanced-examples
[![Build Status](https://travis-ci.org/aberonni/webdriverio-advanced-examples.svg?branch=master)](https://travis-ci.org/aberonni/webdriverio-advanced-examples) [![Greenkeeper badge](https://badges.greenkeeper.io/aberonni/webdriverio-advanced-examples.svg)](https://greenkeeper.io/)

A collection of complicated tests with [webdriver.io](http://webdriver.io/).

## Prerequisites

- [node](https://nodejs.org/en/download/)
- [yarn](https://yarnpkg.com/en/)
- [appium](http://appium.io/) (only for appium tests)
- [docker](https://www.docker.com/) (only for zalenium tests)

## Install dependencies

```
yarn
```

## Running tests

### Run all tests on Chrome

```
yarn test
```

### Run all tests on Zalenium

You must have docker installed and ready to use.

```
# in one terminal
yarn zalenium
# in another terminal
yarn test:zalenium
```

### Basic tests on XCode Emulated iPhone (appium)

These tests use [appium](http://appium.io/) to leverage XCode's emulators

To make this work you will also have to install appium.

```
yarn global add appium
yarn test:appium
```

### Visual regression testing on Chrome

The tests use the WebdriverIO [visual regression service](http://webdriver.io/guide/services/visual-regression.html) that allows you to compare screenshots of a website.

If the tests fail, you can debug what is happening by looking at the `screenshots/latest` and `screenshots/diff` folders.

If you decide that the latest screenshots should become the new baseline, you can update the baseline screenshots that are used for comparison.

```
yarn consolidate
```
