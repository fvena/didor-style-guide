module.exports = {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-recommended-scss',
    'stylelint-config-recommended-vue/scss',
    'stylelint-config-recess-order'
  ],
  rules: {
    'no-descending-specificity': [true, { severity: 'warning' }],
    'no-empty-source': [true, { severity: 'warning' }],
    'selector-pseudo-class-no-unknown': [
      true,
      { ignorePseudoClasses: ['deep', 'global', 'slotted'] }
    ],
    'scss/comment-no-empty': [true, { severity: 'warning' }]
  }
}
