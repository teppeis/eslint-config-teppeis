'use strict';

module.exports = {
  extends: ['./es2019.js', './+prettier.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  // Don't add these rules to avoid conflicting with prettier
  // https://github.com/prettier/eslint-config-prettier/blob/master/%40typescript-eslint.js
  rules: {
    // ES2019 available in TypeScript
    'node/no-unsupported-features/es-syntax': 0,
    // node plugin doesn't support *.ts
    // TODO: use eslint-plugin-import
    'node/no-missing-import': 0,

    // allow overload
    'no-dupe-class-members': 0,

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': [2, {args: 'none'}],

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-array-constructor.md
    'no-array-constructor': 0,
    '@typescript-eslint/no-array-constructor': 2,

    '@typescript-eslint/adjacent-overload-signatures': 2,
    '@typescript-eslint/no-namespace': [2, {allowDeclarations: true}],
    '@typescript-eslint/prefer-namespace-keyword': 2,
    // allow require for power-assert
    // '@typescript-eslint/no-require-imports': 2,
    '@typescript-eslint/no-var-requires': 2,
    '@typescript-eslint/no-object-literal-type-assertion': 2,
    '@typescript-eslint/no-unnecessary-type-assertion': 2,
    // opinionated
    // '@typescript-eslint/promise-function-async': 2,
    '@typescript-eslint/restrict-plus-operands': 2,
  },
};
