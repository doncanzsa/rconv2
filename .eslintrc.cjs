require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-standard",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  plugins: ["@cspell"],
  rules: {
    quotes: [
      "error",
      "double",
      { avoidEscape: true, allowTemplateLiterals: true },
    ],
    semi: ["error", "always"],
    "no-multiple-empty-lines": ["error", { max: 2, maxBOF: 1 }],
    "import/first": "off",
    "no-console": "off",
    "no-debugger": "off",
    "comma-dangle": ["error", "only-multiline"],
    "@cspell/spellchecker": [
      "warn",
      {
        autoFix: false,
        checkComments: true,
        checkStrings: true,
        checkStringTemplates: true,
        checkIdentifiers: true,
      },
    ],
  },
};
