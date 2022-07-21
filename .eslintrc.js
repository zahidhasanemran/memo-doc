/* eslint-disable no-undef */

module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "no-unused-vars": "off",
    "no-undef": "off",
    "linebreak-style": "off",
    indent: ["error", 2],
    quotes: ["error", "double"],
    semi: ["error", "never"],
  },
}
