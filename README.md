# eslint-config-teppeis

[ESLint](https://github.com/eslint/eslint) shareable configs for me!

[![npm version][npm-image]][npm-url]
![supported node.js version][node-version]
[![build status][ci-image]][ci-url]
![license][license]

> [!IMPORTANT]
> This config uses [new flat config style](https://eslint.org/docs/latest/use/configure/configuration-files-new) since v19.

## Priority

1.  Avoid ["Possible Problems"](https://eslint.org/docs/latest/rules/#possible-problems)
2.  Enable ["Suggestions"](https://eslint.org/docs/latest/rules/#suggestions) if reasonable or fixable
3.  Use Prettier for stylistic formatting issues

## Install

```console
$ npm i -D eslint eslint-config-teppeis
```

and run `npx eslint-config-teppeis --init` to generate initial config files.

## Usage

Load `eslint-config-teppeis` and export default `build()` in your `eslint.config.js`:

```js
import { build } from "eslint-config-teppeis";
import { mocha } from "eslint-config-teppeis/configs/mocha";

export default await build(
  { base: "node18", typescript: true, esm: true },
  mocha,
  {
    ignores: ["dist", "test/fixtures"],
  },
);
```

### Options

- `base` (enum, required): `es2021`, `es2022`, `es2023`, `node18` or `node20`
- `typescript` (boolean, default false): use TypeScript
- `project` (boolean|string|srting[], default false): the property of `parserOptions` to enable linting with type information
- `esm` (boolean, default false): treat `.js` and `.ts` as ESM for a project that configures `type:module` in `package.json`

## Configs for customization

### Pure ECMAScript

Configs for ECMAScript versions

```js
import { es2021 } from "eslint-config-teppeis/configs/es2021";

export default [es2021];
```

- `es2021`
- `es2022`
- `es2023`

### Node.js

Configs for [Node versions](https://github.com/nodejs/Release)

- `node18` (v18.18+ Maintenance)
- `node20` (v20.9+ Active LTS)

```js
import { node18 } from "eslint-config-teppeis/configs/node18";

export default [node18];
```

### TypeScript

Configs for TypeScript

- `typescript`: Enable rules that don't require type information
- `typescriptTypeChecked`: Require type information

```js
import { node18, typescript } from "eslint-config-teppeis/configs";

export default [node18, typescript];
```

### ES Modules

By default, only `*.mjs` and `*.mts` are treated as ES Modules in configs for Node.js.
If you use `type:module` in package.json, use `esm: true` like:

```js
import { build } from "eslint-config-teppeis";

export default build({ base: "node18", esm: true });
```

### Browsers

This enables globals for browsers.

```js
import { es2023, browser } from "eslint-config-teppeis/configs";

export default [es2023, browser];
```

### Mocha

This enables globals for Mocha like `describe` or `it` only in `**/test/*.js`.

```js
import { es2023, mocha } from "eslint-config-teppeis";

export default [es2023, mocha];
```

## Note: Prettier

Just intall `prettier` and use it with `eslint-config-teppeis`.
These configs don't include rule settings that conflict with Pretteir.

## License

Licensed under the MIT license.
Copyright (c) 2023, Teppei Sato

[npm-image]: https://badgen.net/npm/v/eslint-config-teppeis?icon=npm&label=
[npm-url]: https://npmjs.org/package/eslint-config-teppeis
[ci-image]: https://github.com/teppeis/eslint-config-teppeis/workflows/ci/badge.svg
[ci-url]: https://github.com/teppeis/eslint-config-teppeis/actions?query=workflow%3A%22ci%22
[deps-image]: https://img.shields.io/librariesio/release/npm/eslint-config-teppeis
[deps-url]: https://libraries.io/npm/eslint-config-teppeis
[node-version]: https://badgen.net/npm/node/eslint-config-teppeis
[license]: https://badgen.net/npm/license/eslint-config-teppeis
