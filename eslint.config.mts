import globals from "globals";
import tseslint from "typescript-eslint";
import tsParser from "@typescript-eslint/parser";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import jsdoc from "eslint-plugin-jsdoc";

export default defineConfig([
  {
    ignores: ['./postcss.config.js', './webpack.config.js'],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: { globals: globals.browser },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  jsdoc.configs['flat/recommended'],
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      jsdoc
    },
    rules: {
      '@typescript-eslint/explicit-function-return-type': "error",
      'react/react-in-jsx-scope': 'off',

      'jsdoc/require-jsdoc': ['error', {
        publicOnly: false,
        require: {
          FunctionDeclaration: true,
          MethodDefinition: true,
          ClassDeclaration: true,
          ArrowFunctionExpression: false,
          FunctionExpression: true,
        },
      }],

      'jsdoc/returns-type': 'off',
      'jsdoc/require-returns': 'off',

      'jsdoc/require-param': 'error',
      'jsdoc/require-property': 'error',
    }
  },
]);
