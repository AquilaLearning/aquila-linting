# @aquila-learning/eslint-config-react

ESLint configuration for Aquila Learning projects using React.  This should installed and used with `@aquila-learning/eslint-config`.

## Installation

```sh
$ npm install @aquila-learning/eslint-config @aquila-learning/eslint-config-react -D
# or
$ yarn add @aquila-learning/eslint-config @aquila-learning/eslint-config-react -D
```

## Setup

Add `eslint.config.ts` file with the following contents

```ts
import aquilaLearningConfig from "@aquila-learning/eslint-config";
import aquilaLearningReactConfig from "@aquila-learning/eslint-config-react";

export default [
    {
        ...aquilaLearningConfig,
        ...aquilaLearningReactConfig
    }
]
```
