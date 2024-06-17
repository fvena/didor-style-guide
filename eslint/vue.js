module.exports = {
  env: {
    'vue/setup-compiler-macros': true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:vue-pug/vue3-recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier',
    'plugin:prettier/recommended'
  ],
  overrides: [
    {
      files: ['src/**/*.vue'],
      rules: {
        'import/no-default-export': ['off']
      }
    }
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  rules: {
    'vue/block-lang': [
      'error',
      {
        script: {
          lang: 'ts'
        },
        style: {
          lang: 'scss'
        },
        template: {
          lang: 'pug'
        }
      }
    ],
    'vue/block-order': [
      'error',
      {
        order: ['template', 'script', 'style']
      }
    ],
    'vue/component-api-style': ['error', 'script-setup'],
    'vue/define-emits-declaration': ['error', 'type-based'],
    'vue/define-props-declaration': ['error', 'type-based'],
    'vue/no-duplicate-attr-inheritance': ['error'],
    'vue/no-empty-component-block': ['error'],
    'vue/no-ref-object-reactivity-loss': ['warn'],
    'vue/no-setup-props-reactivity-loss': ['warn'],
    'vue/no-template-target-blank': ['error'],
    'vue/script-indent': ['error', 2, { baseIndent: 1 }]
  }
}
