# @aquila-learning/eslint-config

ESLint configuration for Aquila Learning projects.

## Installation

```sh
$ npm install @aquila-learning/eslint-config -D
# or
$ yarn add @aquila-learning/eslint-config -D
```

## Setup

Add `eslint.config.ts` file with the following contents

```ts
import aquilaLearningConfig from "@aquila-learning/eslint-config";

export default [
    {
        ...aquilaLearningConfig
    }
]
```
