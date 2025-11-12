# @aquila-learning/eslint-config-vue

ESLint configuration for Aquila Learning projects using Vue.  This should installed and used with `@aquila-learning/eslint-config`.

## Installation

```sh
$ npm install @aquila-learning/eslint-config @aquila-learning/eslint-config-vue -D
# or
$ yarn add @aquila-learning/eslint-config @aquila-learning/eslint-config-vue -D
```

## Setup

Add `eslint.config.ts` file with the following contents

```ts
import aquilaLearningConfig from "@aquila-learning/eslint-config";
import aquilaLearningVueConfig from "@aquila-learning/eslint-config-vue";

export default [
    {
        ...aquilaLearningConfig,
        ...aquilaLearningVueConfig
    }
]
```
