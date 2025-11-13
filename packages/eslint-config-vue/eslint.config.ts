import * as jestPlugin from "eslint-plugin-jest";
import * as reactPlugin from "eslint-plugin-react";
import * as vuePlugin from "eslint-plugin-vue";
import * as vueParser from "vue-eslint-parser";


export default [
    reactPlugin.configs.flat.recommended,
    ...vuePlugin.configs["flat/vue2-recommended"],
    jestPlugin.configs["flat/recommended"],
    {
        languageOptions: {
            parser: vueParser,
            parserOptions: {
                parser: "@typescript-eslint/parser",
                ecmaFeatures: {
                    jsx: true
                }
            }
        },
        rules: {
            "react/jsx-closing-bracket-location": [
                "error",
                "line-aligned"
            ],
            "react/jsx-first-prop-new-line": [
                "error",
                "multiline-multiprop"
            ],
            "react/jsx-max-props-per-line": "error",
            "react/jsx-sort-props": [
                "error",
                {
                    noSortAlphabetically: true,
                    multiline: "last",
                    shorthandLast: true,
                    callbacksLast: true
                }
            ],
            "react/jsx-wrap-multilines": [
                "error",
                {
                    declaration: "parens-new-line",
                    assignment: "parens-new-line",
                    return: "parens-new-line",
                    arrow: "parens-new-line",
                    condition: "parens-new-line",
                    logical: "parens-new-line",
                    prop: "parens-new-line"
                }
            ],
            "react/prop-types": "off",
            // Duplicate properties (with oxlint) to override recommended
            "react/no-string-refs": "off",
            "react/no-unknown-property": "off",
            "react/react-in-jsx-scope": "off",
            "react/self-closing-comp": "error",
            "vue/html-indent": [
                "error",
                4
            ]
        },
        settings: {
            react: {
                pragma: "h",
                version: "detect"
            }
        }
    }
];
