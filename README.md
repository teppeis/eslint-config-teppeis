eslint-config-teppeis
====

ESLint config set for me!

[![NPM version][npm-image]][npm-url]
![Node.js Version Support][node-version]
[![Build Status][circleci-image]][circleci-url]
[![Dependency Status][deps-image]][deps-url]
![License][license]

## Priority

1. Avoid "Possible Errors"
2. Keep "Best Practices" if common
3. Use "Modern Style (ES2015+)" if available
4. Format "Stylistic Issues" if fixable or use Prettier

This rules is based on `eslint:recommended`.
Only additional or orverwritten rules are specified. 

## Usage

`npm i -D eslint-config-teppeis` and specify in your `.eslintrc.json`:

```json
{
    "extends": "teppeis"
}
```

and run `eslint --report-unused-disable-directives`.

Default config is for ES5.

### For pure ECMAScript

```json
{
    "extends": "teppeis/es2015"
}
```

- `teppeis/es5`: equals to `teppeis`
- `teppeis/es2015`
- `teppeis/es2016`
- `teppeis/es2017`
- `teppeis/es2018`

### For Closure Compiler coding style

Extends `teppeis/closure` after base config.

```json
{
    "extends": [
        "teppeis/es2015",
        "teppeis/closure"
    ]
}
```

### For Node.js

They include [eslint-plugin-node](https://www.npmjs.com/package/eslint-plugin-node).

#### Detect Node.js version from `engines` field in `package.json`

- `teppeis/node`

Node.js version is not specified in this config, so you need to specify it in `engines` in `package.json` for
[node/no-unsupported-features](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features.md)
like:

```json
{
    "engines": {
        "node": ">= 6"
    }
}
```

#### Specific version

- `teppeis/node-v6`
- `teppeis/node-v8` (v8.3+ for rest/spread object properties)
- `teppeis/node-v10`

#### With Babel

- `teppeis/node-es2017`
- `teppeis/node-es2018`

They disable [node/no-unsupported-features](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features.md).

## Customize

### Use Prettier

Install `prettier` with `--save-exact` ([recommended](https://prettier.io/docs/en/install.html)).

```console
$ npm i -D -E prettier
# or
$ yarn add -D -E prettier
```

Override dupulicated or conflicted rules with `teppeis/prettier`.

```json
{
    "extends": [
        "teppeis/es2018",
        "teppeis/prettier"
    ]
}
```

### For ES Modules

Override `parserOptions.sourceType`.

```json
{
    "parserOptions": {
        "sourceType": "module"
    }
}
```

### For browsers

Add `browser` to `env`.

```json
{
    "env": {
        "browser": true
    }
}
```

## License

Licensed under the MIT license.
Copyright (c) 2018, Teppei Sato

[npm-image]: https://img.shields.io/npm/v/eslint-config-teppeis.svg
[npm-url]: https://npmjs.org/package/eslint-config-teppeis
[npm-downloads-image]: https://img.shields.io/npm/dm/eslint-config-teppeis.svg
[travis-image]: https://img.shields.io/travis/teppeis/eslint-config-teppeis/master.svg
[travis-url]: https://travis-ci.org/teppeis/eslint-config-teppeis
[circleci-image]: https://circleci.com/gh/teppeis/eslint-config-teppeis.svg?style=shield
[circleci-url]: https://circleci.com/gh/teppeis/eslint-config-teppeis
[deps-image]: https://img.shields.io/david/teppeis/eslint-config-teppeis.svg
[deps-url]: https://david-dm.org/teppeis/eslint-config-teppeis
[node-version]: https://img.shields.io/badge/Node.js%20support-v6,v8,v10-brightgreen.svg
[coverage-image]: https://img.shields.io/coveralls/teppeis/eslint-config-teppeis/master.svg
[coverage-url]: https://coveralls.io/github/teppeis/eslint-config-teppeis?branch=master
[license]: https://img.shields.io/npm/l/eslint-config-teppeis.svg
