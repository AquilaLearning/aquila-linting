import reactPlugin from "eslint-plugin-react";
import stylistic from "@stylistic/eslint-plugin";

export default [
    reactPlugin.configs.flat.recommended,
    {
        plugins: {
            react: reactPlugin,
            "@stylistic": stylistic,
        },
        rules: {
            // React
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
                    "reservedFirst": true,
                    "multiline": "last",
                    "shorthandLast": true,
                    "callbacksLast": true
                }
            ],
            "react/jsx-wrap-multilines": [
                "error",
                {
                    "declaration": "parens-new-line",
                    "assignment": "parens-new-line",
                    "return": "parens-new-line",
                    "arrow": "parens-new-line",
                    "condition": "parens-new-line",
                    "logical": "parens-new-line",
                    "prop": "parens-new-line"
                }
            ],
            "react/prop-types": 0,

            // Stylistic
            "@stylistic/lines-between-class-members": [
                "error",
                "always"
            ],
            "@stylistic/padding-line-between-statements": [
                "error",
                {
                    "blankLine": "always",
                    "prev": [
                        "const",
                        "let",
                        "var"
                    ],
                    "next": "*"
                },
                {
                    "blankLine": "always",
                    "prev": [
                        "const",
                        "let",
                        "var"
                    ],
                    "next": [
                        "const",
                        "let",
                        "var"
                    ]
                },
                {
                    "blankLine": "always",
                    "prev": "directive",
                    "next": "*"
                },
                {
                    "blankLine": "any",
                    "prev": "directive",
                    "next": "directive"
                }
            ],

            // Duplicate properties (with oxlint) to override ESLint's recommended rules
            "react/react-in-jsx-scope": "off"
        },
        "settings": {
            "react": {
                "pragma": "h",
                "version": "detect"
            }
        }
    }
]