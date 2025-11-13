import * as vuePlugin from "eslint-plugin-vue";
import * as vueParser from "vue-eslint-parser";

export default [
    ...vuePlugin.configs["flat/recommended"],
    {
        languageOptions: {
            parser: vueParser,
            parserOptions: {
                parser: "@typescript-eslint/parser"
            },
        },
        plugins: {
            vue: vuePlugin
        },
        rules: {
            "vue/html-indent": [
                "error",
                4
            ],
            "vue/enforce-style-attribute": [
                "error",
                {
                    allow: [
                        "module"
                    ]
                }
            ],
            "vue/max-lines-per-block": [
                "error",
                {
                    script: 120,
                    template: 100,
                    style: 100,
                    skipBlankLines: true
                }
            ],
            "vue/no-multiple-template-root": "off",
            "vue/no-v-model-argument": "off",
        },
        ignores: [
            "dist/**"
        ]
    }
];
