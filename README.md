# webdriverio-advanced-examples

A collection of complicated tests with [webdriver.io](http://webdriver.io/).

## Prerequisites

- [node](https://nodejs.org/en/download/)
- [node-gyp](https://github.com/nodejs/node-gyp#installation)
- [java](https://java.com/en/download)
- [appium](http://appium.io/) (only for appium tests)

## Install dependencies

```
yarn
```

## Running tests

### Basic and a11y tests on Chrome, Nexus 5 (emulated with Chrome) and Firefox

Runs following tests:
- check the title of hacker news website
- load a website and check for accessibility errors with [axe](https://github.com/dequelabs/axe-core)

```
yarn test
```

### Test audio on Chrome

This will open a youtube video and make sure that audio is playing. This is possible thanks to a custom chrome extension that is built on the fly.

```
yarn test:audio
```

### Basic tests on XCode Emulated iPhone (appium)

These tests use [appium](http://appium.io/) to leverage XCode's emulators

To make this work you will also have to install appium.

```
yarn global add appium
yarn test:appium
```

### Visual regression testing on Chrome

This test uses the WebdriverIO [visual regression service](http://webdriver.io/guide/services/visual-regression.html) that allows you to compare screenshots of a website.

```
yarn test:vrs
```

If the test fails, you can debug what is happening by looking at the `screenshots/latest` and `screenshots/diff` folders.

If you decide that the latest screenshtos should become the baseling, you can update the baseline screenshots that are used for comparison.

```
yarn test:vrs:update
```

### Checking console logs and video on Chrome

Make sure that the console log is empty using the [`browser.log()`](http://webdriver.io/api/protocol/log.html) function.

Make sure that a video is playing by checking the video's `paused` state.

```
yarn test:chrome
```

If the test fails, you can debug what is happening by looking at the `screenshots/latest` and `screenshots/diff` folders.

If you decide that the latest screenshtos should become the baseling, you can update the baseline screenshots that are used for comparison.

```
yarn test:vrs:update
```
