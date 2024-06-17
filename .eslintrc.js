module.exports = {
  extends: ['./eslint/node'],
  overrides: [
    {
      files: ['eslint/rules/**'],
      rules: {
        'sort-keys': 'error'
      }
    }
  ],
  rules: {
    'unicorn/prefer-module': 'off'
  }
}
