import deepmerge from "deepmerge";

/**
 * @param {Partial<import("eslint").Linter.FlatConfig>} first
 * @param {Partial<import("eslint").Linter.FlatConfig>} second
 * @param {Partial<import("eslint").Linter.FlatConfig>[]} rest
 * @return {import("eslint").Linter.FlatConfig}
 */
export function merge(first, second, ...rest) {
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
  };

  if (rest.length > 0) {
    return merge(merged, ...rest);
  } else {
    return merged;
  }
}

const overwriteMerge = (destinationArray, sourceArray, options) => sourceArray;

/**
 * @param {*} first
 * @param {*} second
 */
function deepObjectMerge(first, second) {
  return deepmerge(first, second, {
    arrayMerge: overwriteMerge,
  });
}
