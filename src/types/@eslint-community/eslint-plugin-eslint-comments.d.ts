declare module "@eslint-community/eslint-plugin-eslint-comments/configs" {
  import type { Linter } from "eslint";

  interface Configs {
    recommended: {
      name: "@eslint-community/eslint-comments/recommended";
      plugins: {
        "@eslint-community/eslint-comments": Linter.Plugin;
      };
      rules: {
        "@eslint-community/eslint-comments/disable-enable-pair": "error";
        "@eslint-community/eslint-comments/no-aggregating-enable": "error";
        "@eslint-community/eslint-comments/no-duplicate-disable": "error";
        "@eslint-community/eslint-comments/no-unlimited-disable": "error";
        "@eslint-community/eslint-comments/no-unused-enable": "error";
      };
    };
  }

  const configs: Configs;
  export default configs;
}
