import stylistic from "@stylistic/eslint-plugin";
import globals from "globals";
import * as tseslint from "@typescript-eslint/eslint-plugin";
import * as vueParser from "vue-eslint-parser";
import * as importPlugin from "eslint-plugin-import";
import jsdocPlugin from "eslint-plugin-jsdoc";
import testingLibraryPlugin from "eslint-plugin-testing-library";
import { globalIgnores } from "eslint/config";

export default [
    testingLibraryPlugin.configs["flat/vue"],
    testingLibraryPlugin.configs["flat/dom"],
    {
        files: ["**/*.{ts,tsx,vue}"],
        plugins: {
            "@stylistic": stylistic,
            "@typescript-eslint": tseslint,
            "jsdoc": jsdocPlugin,
            "import": importPlugin,
            "testing-library": testingLibraryPlugin
        },
        languageOptions: {
            parser: vueParser,
            parserOptions: {
                parser: "@typescript-eslint/parser",
                ecmaFeatures: {
                    jsx: true
                }
            },
            globals: {
                ...globals.node,
                ...globals.jest
            },
        },
        rules: {
            "import/named": "off",
            "import/no-unresolved": "off",
            "import/order": [
                "error",
                {
                    "newlines-between": "always",
                    "pathGroups": [
                        {
                            group: "external",
                            pattern: "@common/**",
                            position: "after"
                        }
                    ],
                    "pathGroupsExcludedImportTypes": [
                        "builtin"
                    ]
                }
            ],
            "import/no-duplicates": "off",

            // JSDoc
            "jsdoc/check-alignment": "error",
            "jsdoc/check-indentation": "error",
            "jsdoc/check-param-names": "error",
            "jsdoc/check-syntax": "error",
            "jsdoc/check-types": "error",
            "jsdoc/valid-types": "error",

            // Stylistic
            "@stylistic/indent": [
                "error",
                4,
                {
                    SwitchCase: 1
                }
            ],
            "@stylistic/max-len": [
                "error",
                {
                    code: 160,
                    tabWidth: 4
                }
            ],
            "@stylistic/member-delimiter-style": [
                "error",
                {
                    multiline: {
                        delimiter: "semi",
                        requireLast: true
                    },
                    overrides: {
                        typeLiteral: {
                            multiline: {
                                delimiter: "comma",
                                requireLast: false
                            }
                        }
                    },
                    singleline: {
                        delimiter: "comma",
                        requireLast: false
                    }
                }
            ],
            "@stylistic/quote-props": [
                "error",
                "consistent-as-needed"
            ],
            "@stylistic/quotes": [
                "error",
                "double",
                {
                    avoidEscape: true
                }
            ],
            "@stylistic/semi": "error",
            "@stylistic/type-annotation-spacing": [
                "error",
                {
                    after: true,
                    before: false,
                    overrides: {
                        arrow: {
                            after: true,
                            before: true
                        }
                    }
                }
            ],

            // Testing Library
            "testing-library/no-await-sync-events": 0, // We use async fire-event methods
            // Typescript
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/consistent-type-assertions": "error",
            "@typescript-eslint/explicit-member-accessibility": [
                "error",
                {
                    accessibility: "explicit",
                    overrides: {
                        accessors: "explicit",
                        constructors: "no-public",
                        methods: "explicit",
                        parameterProperties: "off",
                        properties: "explicit"
                    }
                }
            ],
            "@typescript-eslint/member-ordering": [
                "error",
                {
                    default: [
                        "public-instance-method",
                        "public-static-field"
                    ]
                }
            ],
            "@typescript-eslint/no-shadow": [
                "error"
            ],
            "@typescript-eslint/unified-signatures": "error",

            "arrow-spacing": "error",
            "constructor-super": "error",
            "dot-notation": "error",
            "eol-last": "error",
            "key-spacing": [
                "error",
                {
                    afterColon: true,
                    beforeColon: false,
                    mode: "strict"
                }
            ],
            "keyword-spacing": [
                "error",
                {
                    before: true
                }
            ],
            "max-lines": [
                "error",
                500
            ],
            "new-parens": "error",
            "no-constant-binary-expression": "off",
            "no-case-declarations": "off",
            "no-fallthrough": "off",
            "no-multiple-empty-lines": [
                "error",
                {
                    max: 1,
                    maxBOF: 0,
                    maxEOF: 1
                }
            ],
            "no-return-await": "error",
            "no-trailing-spaces": "error",
            "no-undef-init": "error",
            "object-curly-spacing": [
                "error",
                "always"
            ],
            "object-shorthand": "error",
            "one-var": [
                "error",
                {
                    const: "never",
                    let: "never",
                    var: "never"
                }
            ],
            "operator-linebreak": [
                "error",
                "before",
                {
                    overrides: {
                        "=": "none"
                    }
                }
            ],
            "prefer-arrow-callback": [
                "error",
                {
                    allowNamedFunctions: true
                }
            ],
            "prefer-const": "error",
            "space-before-blocks": "error",
            "space-before-function-paren": [
                "error",
                {
                    anonymous: "never",
                    asyncArrow: "always",
                    named: "never"
                }
            ],
            "spaced-comment": [
                "error",
                "always"
            ]
        }
    },
    globalIgnores(["**/dtos.ts"])
];
