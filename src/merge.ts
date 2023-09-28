import type { ArrayMergeOptions } from "deepmerge";
import deepmerge from "deepmerge";
import type { Linter } from "eslint";

type FlatConfig = Linter.FlatConfig;

export function merge(
  first: FlatConfig,
  second: FlatConfig,
  ...rest: FlatConfig[]
): FlatConfig {
  const merged = {
    ...first,
    ...second,
    settings: deepObjectMerge(first.settings ?? {}, second.settings ?? {}),
    linterOptions: {
      ...first?.linterOptions,
      ...second?.linterOptions,
    },
    languageOptions: {
      ...first?.languageOptions,
      ...second?.languageOptions,
      globals: {
        ...first?.languageOptions?.globals,
        ...second?.languageOptions?.globals,
      },
      parserOptions: deepObjectMerge(
        first?.languageOptions?.parserOptions ?? {},
        second?.languageOptions?.parserOptions ?? {},
      ),
    },
    plugins: {
      ...first?.plugins,
      ...second?.plugins,
    },
    rules: deepObjectMerge(first.rules ?? {}, second.rules ?? {}),
  } as const;

  // TODO: eslint-plugin-import requires `parserOptions.ecmaVersion` yet
  if (merged.languageOptions.ecmaVersion) {
    merged.languageOptions.parserOptions.ecmaVersion =
      merged.languageOptions.ecmaVersion;
  }

  if (rest.length > 0) {
    return merge(merged, rest[0], ...rest.slice(1));
  } else {
    return merged;
  }
}

const overwriteMerge = (dest: any[], src: any[], options?: ArrayMergeOptions) =>
  src;
function deepObjectMerge<T>(first: Partial<T>, second: Partial<T>): T {
  return deepmerge(first, second, {
    arrayMerge: overwriteMerge,
  });
}
