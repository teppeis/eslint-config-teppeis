# eslint-config-teppeis

ESLint config set for me!

[![NPM version][npm-image]][npm-url]
![Node.js Version Support][node-version]
[![Build Status][ci-image]][ci-url]
[![Dependency Status][deps-image]][deps-url]
![License][license]

## Priority

1.  Avoid "Possible Errors"
2.  Keep "Best Practices" if common
3.  Use "Modern Style (ES2015+)" if available
4.  Format "Stylistic Issues" if fixable or use Prettier

This rules is based on `eslint:recommended`.
Only additional or orverwritten rules are specified.

## Usage

for npm v7

`npm i -D eslint-config-teppeis` and specify in your `.eslintrc.json`:

```json
{
  "extends": "teppeis"
}
```

Default config equals to `teppeis/es2018`.

### Choose base ECMAScript version

```json
{
  "extends": "teppeis/es2015"
}
```

- `teppeis/es5`
- `teppeis/es2015`
- `teppeis/es2016`
- `teppeis/es2017`
- `teppeis/es2018`: equals to `teppeis`
- `teppeis/es2019`
- `teppeis/es2020`
- `teppeis/es2021`

### For Closure Compiler coding style

Extends `teppeis/+closure` after base config.

```json
{
  "extends": ["teppeis/es2015", "teppeis/+closure"]
}
```

### For Node.js

They include [eslint-plugin-node](https://www.npmjs.com/package/eslint-plugin-node).

#### With specific version

Chose config for specific Node version

```json
{
  "extends": ["teppeis/node-v10"]
}
```

- `teppeis/node-v10` (v10.17+ for `fs.promises`, etc)
- `teppeis/node-v12` (v12.12+ for `module.syncBuiltinESMExports()`)
- `teppeis/node-v14` (v14.15+ LTS)

#### With Babel or other transpilers

Extends `teppeis/+node` after base config.

```json
{
  "extends": ["teppeis/es2018", "teppeis/+node"]
}
```

In `teppeis/+node`, [node/no-unsupported-features/es-syntax](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/es-syntax.md) is disabled.
Available ES features depend on the base config.

[node/no-unsupported-features/es-builtins](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/es-builtins.md) and [node/no-unsupported-features/node-builtins](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/node-builtins.md) are enabled. It is assumed that polyfill is not used.

## Customize

### Use Prettier

This plugin includes `prettier` itself in `peerDependencies`.

Override dupulicated or conflicted rules with `teppeis/+prettier`.

```json
{
  "extends": ["teppeis/es2018", "teppeis/+prettier"]
}
```

and symlink Prettier config file to your project root.

```console
$ ln -is node_modules/eslint-config-teppeis/.prettierrc.json .
```

### Use Mocha for testing

This enables mocha globals like `describe` or `it` in `**/test/*.js`.

```json
{
  "extends": ["teppeis/es2018", "teppeis/+mocha"]
}
```

### For ES Modules

This overrides `parserOptions.sourceType`.

```json
{
  "extends": ["teppeis/es2018", "teppeis/+module"]
}
```

### For browsers

This adds `browser` to `env`.

```json
{
  "extends": ["teppeis/es2018", "teppeis/+browser"]
}
```

### For TypeScript

Configs for TypeScript (applied only for `*.ts` and `*.tsx`).

- `teppeis/+typescript`: Enable rules that don't require type information
- `teppeis/+typescript-with-type`: Require type information (slow)

```json
{
  "extends": [
    "teppeis/es2019",
    "teppeis/+node",
    "teppeis/+typescript",
    "teppeis/+prettier",
    "teppeis/+mocha"
  ]
}
```

It also enables ES Modules.

## License

Licensed under the MIT license.
Copyright (c) 2021, Teppei Sato

[npm-image]: https://badgen.net/npm/v/eslint-config-teppeis?icon=npm&label=
[npm-url]: https://npmjs.org/package/eslint-config-teppeis
[npm-downloads-image]: https://img.shields.io/npm/dm/eslint-config-teppeis.svg
[ci-image]: https://github.com/teppeis/eslint-config-teppeis/workflows/ci/badge.svg
[ci-url]: https://github.com/teppeis/eslint-config-teppeis/actions?query=workflow%3A%22ci%22
[deps-image]: https://img.shields.io/david/teppeis/eslint-config-teppeis.svg
[deps-url]: https://david-dm.org/teppeis/eslint-config-teppeis
[node-version]: https://img.shields.io/badge/Node.js%20support-v10,v12,v14-brightgreen.svg
[coverage-image]: https://img.shields.io/coveralls/teppeis/eslint-config-teppeis/master.svg
[coverage-url]: https://coveralls.io/github/teppeis/eslint-config-teppeis?branch=master
[license]: https://img.shields.io/npm/l/eslint-config-teppeis.svg
