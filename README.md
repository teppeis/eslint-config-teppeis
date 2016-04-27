eslint-config-teppeis
====

ESLint config set for me!

[![NPM version][npm-image]][npm-url]
![Node.js Version Support][node-version]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][deps-image]][deps-url]
![License][license]

`npm i -D eslint-config-teppeis` and specify in your `.eslintrc.json`:

```json
{
    "extends": "teppeis"
}
```

Default config is for ES5.

## Usage

### For ES6

```json
{
    "extends": "teppeis/es6"
}
```

### For Closure Compiler coding style

```json
{
    "extends": "teppeis/closure"
}
```

### For Closure Compiler coding style with ES6

```json
{
    "extends": "teppeis/closure-es6"
}
```

### For Node.js without ES6 features

This config includes [eslint-plugin-node](https://www.npmjs.com/package/eslint-plugin-node)

```json
{
    "extends": "teppeis/node"
}
```

and specify `engines` in package.json for [node/no-unsupported-features](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features.md).

```json
{
    "engines": {
        "node": ">= 0.12"
    }
}
```

### For Node.js v4 and v6

This config includes [eslint-plugin-node](https://www.npmjs.com/package/eslint-plugin-node)

```json
{
    "extends": "teppeis/node-v4"
}
```

or

```json
{
    "extends": "teppeis/node-v6"
}
```

### For Node.js with full ES6 features

This config includes [eslint-plugin-node](https://www.npmjs.com/package/eslint-plugin-node)

```json
{
    "extends": "teppeis/node-es6"
}
```

In this config, [node/no-unsupported-features](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features.md) is disabled to use full ES6 features.

If you use ES6 Modules, override `parserOptions.sourceType`.

```json
{
    "parserOptions": {
        "sourceType": "module"
    }
}
```

## License

Licensed under the MIT license.
Copyright © 2016, Teppei Sato

[npm-image]: https://img.shields.io/npm/v/eslint-config-teppeis.svg
[npm-url]: https://npmjs.org/package/eslint-config-teppeis
[npm-downloads-image]: https://img.shields.io/npm/dm/eslint-config-teppeis.svg
[travis-image]: https://img.shields.io/travis/teppeis/eslint-config-teppeis/master.svg
[travis-url]: https://travis-ci.org/teppeis/eslint-config-teppeis
[deps-image]: https://img.shields.io/david/teppeis/eslint-config-teppeis.svg
[deps-url]: https://david-dm.org/teppeis/eslint-config-teppeis
[node-version]: https://img.shields.io/badge/Node.js%20support-v0.12–v6-brightgreen.svg
[coverage-image]: https://img.shields.io/coveralls/teppeis/eslint-config-teppeis/master.svg
[coverage-url]: https://coveralls.io/github/teppeis/eslint-config-teppeis?branch=master
[license]: https://img.shields.io/npm/l/eslint-config-teppeis.svg
