import vuePlugin from 'eslint-plugin-vue';
import testingLibraryPlugin from 'eslint-plugin-testing-library';
import * as vueParser from "vue-eslint-parser";

export default [
    ...vuePlugin.configs["flat/recommended"],
    ...testingLibraryPlugin.configs["flat/dom"],
    ...testingLibraryPlugin.configs["flat/vue"],
    {
        languageOptions: {
            parser: vueParser
        },
        "rules": {
            "vue/html-indent": ["error", 4],
            "vue/enforce-style-attribute": [
                "error",
                {
                    "allow": [
                        "module"
                    ]
                }
            ],
            "vue/max-lines-per-block": [
                "error",
                {
                    "script": 120,
                    "template": 100,
                    "style": 100,
                    "skipBlankLines": true
                }
            ],
            "vue/no-multiple-template-root": "off",
            "vue/no-v-model-argument": "off"
        }
    }
];
