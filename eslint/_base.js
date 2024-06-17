// See: https://github.com/eslint/eslint/issues/3458
require('@rushstack/eslint-patch/modern-module-resolution')

/**
 * This is the base for both our browser and Node ESLint config files.
 */
module.exports = {
  env: {
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:perfectionist/recommended-natural',
    'plugin:unicorn/recommended',
    'plugin:sonarjs/recommended-legacy',
    'prettier',
    require.resolve('./rules/best-practice'),
    require.resolve('./rules/comments'),
    require.resolve('./rules/es6'),
    require.resolve('./rules/import'),
    require.resolve('./rules/possible-errors'),
    require.resolve('./rules/stylistic'),
    require.resolve('./rules/unicorn'),
    require.resolve('./rules/variables')
  ],
  // Tell ESLint not to ignore dot-files, which are ignored by default.
  ignorePatterns: ['!.*.js'],
  overrides: [
    {
      files: ['*.js?(x)', '*.mjs'],
      parser: '@babel/eslint-parser',
      parserOptions: {
        requireConfigFile: false
      }
    }
  ],
  // Global parser options.
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module'
  },
  // Report unused `eslint-disable` comments.
  reportUnusedDisableDirectives: true,
  rules: {
    '@typescript-eslint/adjacent-overload-signatures': 'off',
    '@typescript-eslint/sort-type-constituents': 'off',
    // Disable rules to avoid conflicts with perfectionist plugin.
    'sort-imports': 'off',
    'sort-keys': 'off'
  },
  // Global settings used by all overrides.
  settings: {
    // Use the Node resolver by default.
    'import/resolver': { node: {} }
  }
}
