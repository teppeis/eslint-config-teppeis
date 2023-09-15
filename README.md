# eslint-config-teppeis

ESLint config set for me!

[![npm version][npm-image]][npm-url]
![supported node.js version][node-version]
[![build status][ci-image]][ci-url]
![license][license]

## Priority

1.  Avoid "Possible Errors"
2.  Keep "Best Practices" if fixable
3.  Use Prettier for stylistic formatting

## Usage

### Install

```console
$ npm i -D eslint-config-teppeis eslint prettier
```

### Configure

Load and export in `eslint.config.js`:

```js
import { node18 } from "eslint-config-teppeis";

export default [node18];
```

### For pure ECMAScript

Chose config for specific ECMAScript version

```js
import { es2021 } from "eslint-config-teppeis";

export default [es2021];
```

- `es2021`
- `es2022`
- `es2023`

### For Node.js

They include [eslint-plugin-n](https://www.npmjs.com/package/eslint-plugin-n).

#### With specific version

Chose config for specific Node version

```js
import { node18 } from "eslint-config-teppeis";

export default [node18];
```

- `node` (non version specific)
- `node18` (v18.17+ Active LTS)
- `node20` (v20.5+ Current)

#### With Babel or other transpilers

Merge `es2023` and `node`

```js
import { es2023, node } from "eslint-config-teppeis";

export default [es2023, node];
```

## Customize

### Use Prettier

Override dupulicated or conflicted rules with `prettier`.

```js
import { node, prettier } from "eslint-config-teppeis";

export default [node, prettier];
```

### For TypeScript

Configs for TypeScript (applied only for `.ts`, `.cts`, `.mts` and `.tsx`).

- `typescript`: Enable rules that don't require type information
- `typescriptWithType`: Require type information (slow)

```js
import { node, typescript, prettier } from "eslint-config-teppeis";

export default [node, typescript, prettier];
```

### For ES Modules

By default, only `*.mjs` and `*.mts` are treated as ES Modules in configs for Node.js.
If you use `type:module` in package.json, use `esm` like:

```js
import { node, esm } from "eslint-config-teppeis";

export default [node, esm];
```

For TypeScript:

```js
import { node, typescript, esm } from "eslint-config-teppeis";

export default [node, typescript, esm];
```

### For browsers

This adds `browser` to `env` and enable some rules for browsers.

```js
import { es2023, browser } from "eslint-config-teppeis";

export default [es2023, browser];
```

### Use Mocha for testing

This enables mocha globals like `describe` or `it` only in `**/test/*.js`.

```js
import { es2023, mocha } from "eslint-config-teppeis";

export default [es2023, mocha];
```

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
