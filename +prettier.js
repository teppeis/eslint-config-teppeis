'use strict';

module.exports = {
  extends: ['plugin:prettier/recommended', 'prettier/@typescript-eslint'],
  rules: {
    'prettier/prettier': ['error', require('./.prettierrc.json'), {usePrettierrc: false}],
  },
};
