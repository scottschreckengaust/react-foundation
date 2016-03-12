# React + Foundation

[![Build Status](https://travis-ci.org/nordsoftware/react-foundation.svg?branch=develop)](https://travis-ci.org/nordsoftware/react-foundation)
[![Code Climate](https://codeclimate.com/github/nordsoftware/react-foundation/badges/gpa.svg)](https://codeclimate.com/github/nordsoftware/react-foundation)

[Foundation](http://foundation.zurb.com/sites/docs/) as [React](https://facebook.github.io/react/) components.

## Motivation

[Foundation](http://foundation.zurb.com) is both feature-rich and easy to customize. 
[React](https://facebook.github.io/react/) on the other hand is awesome because of it's simplicity.
It's even more awesome when combined with
[Redux](http://redux.js.org/) and [Immutable](https://facebook.github.io/immutable-js/).

After building quite a few applications with React and Foundation we noticed that we were writing the
same components over and over again. We knew that something had to be done.
We tried to find library that would do the job, but there was none to be found.
So we collected out notes and started coding and here's the result. 

We hope you enjoy it as much as we do!

## What's in the box?

The goal is to wrap every part of Foundation into re-usable React components crafted following framework
best practices. This project's main focus is ease-of-use and extensibility. We use pure render components, 
also know as stateless components, where ever possible to keep the memory usage to a minimum. Stateful
components are only used for larger components, such as `ResponsiveNavigation`, where state is necessary.
All components are heavily unit-tested to ensure their quality.

Here is a list of the available components:

- [Badge](src/components/badge.js)
- [Button](src/components/button.js)
- [ButtonGroup](src/components/button-group.js)
- [Callout](src/components/callout.js)
- [CloseButton](src/components/close-button.js)
- [FlexVideo](src/components/flex-video.js)
- [Grid](src/components/grid.js)
- [Icon](src/components/icon.js)
- [Label](src/components/label.js)
- [Menu](src/components/menu.js)
- [Progress](src/components/progress-bar.js)
- [ResponsiveNavigation](src/components/responsive.js)
- [Switch](src/components/switch.js)
- [TopBar](src/components/top-bar.js)

More components coming soon!

## Install

Install dependencies:

```bash
npm install
```

## Compile

Compile library:

```bash
npm run compile
```

## Test

Run test suite:

```bash
npm test
```

## Credits

- Thanks to [@jmreidy](https://github.com/jmreidy) for releasing the `react-foundation` package name to us on [NPM](https://www.npmjs.com/).

## License

See [LICENSE](LICENSE).
