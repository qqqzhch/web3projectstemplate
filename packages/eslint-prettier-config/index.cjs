module.exports={
    "extends": [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
      "plugin:react/jsx-runtime",
      "prettier"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
      "sourceType": "module",
      "ecmaVersion": 2021
    },
    "plugins": ["@typescript-eslint"],
    "env": {
      "browser": true,
      "webextensions": true,
      "jest": true
    },
    "rules": {
      "@typescript-eslint/no-unused-vars": ["warn", { "args": "none" }], 
      "no-console": ["error", { "allow": ["info", "warn", "error"] }],
      "no-constant-binary-expression": "error",
      "react/prop-types": "off"
    },
    "settings": {
      "react": {
        "version": "detect"
      }
    },
    "globals": {
      "Buffer": true,
      "expect": true,
      "process": true,
      "test": true
    }
  }