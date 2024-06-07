module.exports = {
  extends: ["@commitlint/config-conventional"],
  "scope-enum": [
    2,
    "always",
    [
      // Dependency-related changes
      "deps",
      // ESLint-related changes
      "eslint",
      // Prettier-related changes
      "prettier",
      // Stylelint-related changes
      "stylelint",
      // TypeScript-related changes
      "typescript",
    ],
  ],
  "scope-empty": [1, "never"],
};
