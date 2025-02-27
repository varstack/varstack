import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import onlyWarn from 'eslint-plugin-only-warn';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config} */
const config = [
  js.configs.recommended,
  prettier,
  ...tseslint.configs.recommended,
  {
    rules: {
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-unsafe-function-type': 'off',
    },
  },
  {
    plugins: { onlyWarn },
    rules: {
      semi: 'warn',
      'prefer-arrow-callback': 'warn',
      'prefer-template': 'warn',
      eqeqeq: 'warn',
    },
  },
  {
    ignores: ['**/*/dist/**'],
  },
];

export default config;
