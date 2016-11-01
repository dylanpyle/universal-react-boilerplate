# universal-react-boilerplate

[![CircleCI](https://circleci.com/gh/dylanpyle/universal-react-boilerplate.svg?style=svg)](https://circleci.com/gh/dylanpyle/universal-react-boilerplate)

A personal starting point for new "universal" react projects.

Features surprisingly little magic. This was inspired by the idea of creating an
"ejected" version of [zeit/next](https://zeit.co/blog/next).

Includes:

- react
- koa
- postcss
- webpack
- babel
- tape
- eslint

Intentionally does not include:

- redux
- hot reloading
- css modules
- helmet
- many other things

## Prerequisites

- node.js (v6+)

## Usage

### Local development server

```bash
$ make serve-dev
```

### Production server

```bash
$ make serve-prod
```

### Testing / Linting

```bash
$ make test
$ make lint
```

### Run a single test file

```bash
$ bin/tt src/components/loader/spec.jsx
```

## License

MIT
