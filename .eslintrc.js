module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'prettier', 'sort-imports-es6-autofix'],
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js', 'lib', 'db', 'src/model/generated'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'sort-imports-es6-autofix/sort-imports-es6': ['error', {}],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: 'block',
        next: '*',
      },
      { blankLine: 'always', prev: 'block-like', next: '*' },
      {
        blankLine: 'always',
        prev: '*',
        next: 'block',
      },
      { blankLine: 'always', prev: '*', next: 'block-like' },
      {
        blankLine: 'always',
        prev: 'directive',
        next: '*',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'export',
      },
      {
        blankLine: 'always',
        prev: 'multiline-const',
        next: '*',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'multiline-const',
      },
      {
        blankLine: 'always',
        prev: 'multiline-expression',
        next: '*',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'multiline-expression',
      },
      {
        blankLine: 'always',
        prev: 'multiline-let',
        next: '*',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'multiline-let',
      },
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: '*', next: 'throw' },
      { blankLine: 'always', prev: 'throw', next: '*' },
    ],
  },
};
