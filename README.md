# webdriverio-exanples

A collection of complicated tests with [webdriver.io](http://webdriver.io/).

## Prerequisites

- [node](https://nodejs.org/en/download/)
- [node-gyp](https://github.com/nodejs/node-gyp#installation)
- [java](https://java.com/en/download)

## Install dependencies

```
yarn
```

## Running tests

1. Generic tests on Chrome and Firefox

    Runs following tests:
    - check the title of hacker news website
    - load a website and check for accessibility errors with [axe](https://github.com/dequelabs/axe-core)

    ```
    yarn test
    ```

2. Test audio on Chrome

    This will open a youtube video and make sure that audio is playing. This is possible thanks to a custom chrome extension that is built on the fly.

    ```
    yarn test:audio
    ```

3. Basic tests on XCode Emulated iPhone

    These tests use [appium](http://appium.io/) to leverage XCode's emulators

    To make this work you will have to also install appium.

    ```
    yarn test:appium
    yarn test:appium
    ```
