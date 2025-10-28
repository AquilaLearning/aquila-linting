// export default [
//     {
//         // extends: [
//         //     "eslint:recommended",
//         //     "plugin:@typescript-eslint/recommended",
//         //     "plugin:import/errors",
//         //     "plugin:import/warnings",
//         //     "plugin:jest/recommended"
//         // ],
//         // plugins: [
//         //     "@typescript-eslint",
//         //     "jsdoc",
//         //     "import",
//         //     "jest"
//         // ],
//         // env: {
//         //     "es6": true,
//         //     "browser": true,
//         //     "node": true,
//         //     "jest/globals": true
//         // },
//         // parserOptions: {
//         //     "parser": "@typescript-eslint/parser",
//         //     "ecmaFeatures": {
//         //         "jsx": true
//         //     }
//         // }
//     }
// ];

import { defineConfig } from "eslint/config";
import js from "@eslint/js";

export default defineConfig([
    js.configs.recommended,
    {
        rules: {
            "testing-library/no-await-sync-events": 0 // We use async fire-event methods
        }
    }
]);
