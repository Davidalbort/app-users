const RULES = {
 ERROR: "error",
 OFF: "off",
 WARN: "warn",
}
module.exports = {
 env: {
  browser: true,
  es2021: true,
  node: true,
 },
 extends: [
  "eslint:recommended",
  "plugin:react/recommended",
  "plugin:@typescript-eslint/recommended",
  "prettier",
 ],
 overrides: [],
 parser: "@typescript-eslint/parser",
 parserOptions: {
  ecmaVersion: "latest",
  sourceType: "module",
 },
 plugins: ["react", "@typescript-eslint"],
 rules: {
  indent: RULES.OFF,
  quotes: [RULES.ERROR, "double"],
  semi: [RULES.ERROR, "never"],
  "react/react-in-jsx-scope": RULES.OFF,
 },
}
