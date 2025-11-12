# @aquila-learning/eslint-config-vue3

ESLint configuration for Aquila Learning projects using Vue3.  This should installed and used with `@aquila-learning/eslint-config`.

## Installation

```sh
$ npm install @aquila-learning/eslint-config @aquila-learning/eslint-config-vue3 -D
# or
$ yarn add @aquila-learning/eslint-config @aquila-learning/eslint-config-vue3 -D
```

## Setup

Add `eslint.config.ts` file with the following contents

```ts
import aquilaLearningConfig from "@aquila-learning/eslint-config";
import aquilaLearningVue3Config from "@aquila-learning/eslint-config-vue3";

export default [
    {
        ...aquilaLearningConfig,
        ...aquilaLearningVue3Config
    }
]
```
