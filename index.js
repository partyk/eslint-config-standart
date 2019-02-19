module.exports = {
  'extends': ['plugin:vue/recommended', 'standard', 'standard-jsx'],
  'plugins': [
    'vue'
  ],
  'env': {
    'browser': true,
    'jquery': true,
    'es6': true
  },
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaVersion': 0,
    'sourceType': 'module',
    'allowImportExportEverywhere': true,
    'ecmaFeatures': {
      'spread': true
    }
  },
  'rules': {
    'indent': [2, 4, {'SwitchCase': 1}],
    'semi': [2, 'always', {'omitLastInOneLineBlock': true}],
    'quotes': [2, 'single', {'allowTemplateLiterals': true}],
    'object-curly-spacing': [2, 'never', {'objectsInObjects': true}],
    'eol-last': 0,
    'spaced-comment': 1,
    'no-new': 0,
    'space-before-function-paren': [2, {
      'anonymous': 'always',
      'named': 'never',
      'asyncArrow': 'always'
    }],
    'vue/html-indent': [2, 4, {
      'attribute': 1,
      'baseIndent': 1,
      'closeBracket': 0,
      'alignAttributesVertically': true,
      'ignores': []
    }]
  }
}