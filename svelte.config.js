import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: vitePreprocess(),
  settings: {
    svelte: {
      ignoreWarnings: [
        "@typescript-eslint/no-unsafe-assignment",
        "@typescript-eslint/no-unsafe-member-access",
      ],
      compileOptions: {
        postcss: {
          configFilePath: "./path/to/my/postcss.config.js",
        },
      },
      kit: {
        files: {
          routes: "src/routes",
        },
      },
    },
  },
};
