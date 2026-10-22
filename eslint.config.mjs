import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  {
    // 构建产物与预览产物，不参与 lint
    ignores: [
      'dist/**',
      'output/**',
      'test/browser/output/**',
      'test/node/output/**',
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
    },
    rules: {
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
      'indent': ['error', 2, { 'SwitchCase': 1 }],
      'no-tabs': ['error'],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': ['warn', { 
        'argsIgnorePattern': '^_',
        'varsIgnorePattern': '^_' 
      }],
      'no-constant-condition': 'warn',
      'eol-last': ['error', 'always']
    },
  },
];
