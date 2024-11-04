module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:react/recommended',
    'eslint:recommended',
    "plugin:react-hooks/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "react/prop-types": "warn",
    "react/no-unescaped-entities": "warn",
    "react/jsx-key": "warn",
    "no-unused-vars": "warn",
    "react-hooks/exhaustive-deps": "warn"
  }
}
