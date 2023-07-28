# eslint-config-teppeis

ESLint config set for me!

[![npm version][npm-image]][npm-url]
![supported node.js version][node-version]
[![build status][ci-image]][ci-url]
![license][license]

## Priority

1.  Avoid "Possible Errors"
2.  Keep "Best Practices" if common
3.  Use "Modern Style (ES2015+)" if available
4.  Format "Stylistic Issues" if fixable or use Prettier

This rules is based on `eslint:recommended`.
Only additional or orverwritten rules are specified.

## Usage

### Install

#### for npm v6

```console
$ npm i -D eslint-config-teppeis eslint prettier
```

#### for npm v7+

```console
$ npm i -D eslint-config-teppeis
```

`eslint` and `prettier` are installed as peer dependencies.

### Configure

Specify in your `.eslintrc.json`:

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
- `teppeis/es2018`
- `teppeis/es2019`
- `teppeis/es2020`
- `teppeis/es2021`: equals to `teppeis`
- `teppeis/es2022`
- `teppeis/es2023`

### For Node.js

They include [eslint-plugin-n](https://www.npmjs.com/package/eslint-plugin-n).

#### With specific version

Chose config for specific Node version

```json
{
  "extends": ["teppeis/node-v16"]
}
```

- `teppeis/node-v16` (v16.18+ Maintenance)
- `teppeis/node-v18` (v18.12+ Active LTS)
- `teppeis/node-v20` (v20.0+ Current)

#### With Babel or other transpilers

Extends `teppeis/+node` after base config.

```json
{
  "extends": ["teppeis/es2018", "teppeis/+node"]
}
```

In `teppeis/+node`, [n/no-unsupported-features/es-syntax](https://github.com/weiran-zsd/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/es-syntax.md) is disabled.
Available ES features depend on the base config.

[n/no-unsupported-features/es-builtins](https://github.com/weiran-zsd/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/es-builtins.md) and [n/no-unsupported-features/node-builtins](https://github.com/weiran-zsd/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/node-builtins.md) are enabled. It is assumed that polyfill is not used.

## Customize

### Use Prettier

This plugin includes `prettier` itself in `peerDependencies`.

Override dupulicated or conflicted rules with `teppeis/+prettier`.

```json
{
  "extends": ["teppeis/es2018", "teppeis/+prettier"]
}
```

### For TypeScript

Configs for TypeScript (applied only for `*.ts` and `*.tsx`).

- `teppeis/+typescript`: Enable rules that don't require type information
- `teppeis/+typescript-with-type`: Require type information (slow)

```json
{
  "extends": ["teppeis/node-v16", "teppeis/+typescript", "teppeis/+prettier"]
}
```

### For ES Modules

By default, only `*.mjs` and `*.mts` are treated as ES Modules in configs for Node.js.
If you use `type:module` in package.json, use `teppeis/+module` like:

```json
{
  "extends": ["teppeis/node-v16", "teppeis/+module"]
}
```

or for TypeScript like:

```json
{
  "extends": ["teppeis/node-v16", "teppeis/+typescript", "teppeis/+module"]
}
```

### For browsers

This adds `browser` to `env`.

```json
{
  "extends": ["teppeis/es2018", "teppeis/+browser"]
}
```

### For Closure Compiler coding style

Extends `teppeis/+closure` after base config.

```json
{
  "extends": ["teppeis/es2015", "teppeis/+closure"]
}
```

### Use Mocha for testing

This enables mocha globals like `describe` or `it` in `**/test/*.js`.

```json
{
  "extends": ["teppeis/es2018", "teppeis/+mocha"]
}
```

## License

Licensed under the MIT license.
Copyright (c) 2021, Teppei Sato

[npm-image]: https://badgen.net/npm/v/eslint-config-teppeis?icon=npm&label=
[npm-url]: https://npmjs.org/package/eslint-config-teppeis
[ci-image]: https://github.com/teppeis/eslint-config-teppeis/workflows/ci/badge.svg
[ci-url]: https://github.com/teppeis/eslint-config-teppeis/actions?query=workflow%3A%22ci%22
[deps-image]: https://img.shields.io/librariesio/release/npm/eslint-config-teppeis
[deps-url]: https://libraries.io/npm/eslint-config-teppeis
[node-version]: https://badgen.net/npm/node/eslint-config-teppeis
[license]: https://badgen.net/npm/license/eslint-config-teppeis
