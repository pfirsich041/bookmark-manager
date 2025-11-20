import vuetify from 'eslint-config-vuetify'

export default vuetify()
.overrideRules({
  'vue/html-indent': ['error', 2, {
    'attribute': 1,
    'baseIndent': 1,
    'closeBracket': 0,
    'alignAttributesVertically': true,
    'ignores': []
  }],
  'indent': ['error', 2]
})
