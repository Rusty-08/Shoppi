module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "indent": ["error", 2],
    "quotes": ["error", "single"],
    "no-unused-vars": "warn",
    "arrow-parens": ["error", "as-needed"],
    "consistent-return": "error",
    "object-curly-spacing": ["error", "always"],
    "one-var": ["error", "never"]
  }
}
