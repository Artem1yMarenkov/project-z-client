module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:svelte/recommended",
    "plugin:svelte/prettier",
    "eslint-config-prettier",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  overrides: [
    {
      files: ["*.svelte"],
      parser: "svelte-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    extraFileExtensions: [".svelte"],
  },
  plugins: ["@typescript-eslint", "eslint-plugin-prettier"],
  ignorePatterns: [
    "svelte.config.js",
    "tailwind.config.js",
    "index.html",
    "assets",
    "postcss.config.cjs",
  ],
  rules: {
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    "no-console": "error",
    "@typescript-eslint/no-unused-vars": ["error"],
    "no-var": "error",
  },
};
