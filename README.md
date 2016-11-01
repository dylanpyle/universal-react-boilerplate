# universal-react-boilerplate

A personal starting point for new "universal" react projects. As little magic as
possible.

Stack:

- react
- koa
- postcss
- webpack
- babel
- tape
- eslint

Intentionally lacking:

- redux
- hot reloading
- css modules
- helmet

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
