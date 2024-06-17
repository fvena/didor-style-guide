module.exports = {
  env: {
    'vitest-globals/env': true
  },
  extends: ['plugin:vitest-globals/recommended'],
  rules: {
    /**
     * Disallow Enforce unbound methods are called with their expected scope.
     *
     * 🚫 unbound-method - https://typescript-eslint.io/rules/unbound-method/
     */
    '@typescript-eslint/unbound-method': 'off',
    /**
     * Disallow duplicate setup and teardown hooks.
     *
     * 🚫 Not fixable - https://github.com/veritem/eslint-plugin-vitest/blob/HEAD/docs/rules/no-duplicate-hooks.md
     */
    'vitest/no-duplicate-hooks': 'error',
    /**
     * Require lowercase test names.
     *
     * 🔧 Fixable - https://github.com/veritem/eslint-plugin-vitest/blob/HEAD/docs/rules/prefer-lowercase-title.md
     */
    'vitest/prefer-lowercase-title': 'warn'
  }
}
