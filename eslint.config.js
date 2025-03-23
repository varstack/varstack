const js = require('@eslint/js')
const prettier = require('eslint-config-prettier')
const onlyWarn = require('eslint-plugin-only-warn')
const tseslint = require('typescript-eslint')

/** @type {import('eslint').Linter.Config} */
module.exports = [
  js.configs.recommended,
  prettier,
  ...tseslint.configs.recommended,
  {
    rules: {},
  },
  {
    plugins: { onlyWarn },
    rules: {
      // disable some strict typescript rules
      '@typescript-eslint/ban-ts-comment': 2,
      '@typescript-eslint/no-empty-object-type': 2,
      '@typescript-eslint/no-explicit-any': 2,
      '@typescript-eslint/no-unused-expressions': 2,
      '@typescript-eslint/no-unsafe-function-type': 2,
      // custom rules
      'prefer-arrow-callback': 1,
      'prefer-template': 1,
      'no-console': [1, { allow: ['warn', 'error'] }],
      'eqeqeq': 1,
    },
  },
  {
    ignores: ['**/*/dist/**', '**/*.js'],
  },
]
