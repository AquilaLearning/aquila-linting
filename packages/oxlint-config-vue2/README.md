# @aquila-learning/oxlint-config-vue2

Oxlint configuration for Aquila Learning projects using Vue 2. This should installed and used with `@aquila-learning/oxlint-config`.

## Installation

```sh
$ npm install @aquila-learning/oxlint-config @aquila-learning/oxlint-config-vue2 -D
# or
$ yarn add @aquila-learning/oxlint-config @aquila-learning/oxlint-config-vue2 -D
```

## Setup

Add `.oxlintrc.json file with the following contents

```json
{
    "extends": [
        "<relative_path_to_node_modules>/@aquila-learning/oxlint-config/.oxlintrc.json",
        "<relative_path_to_node_modules>/@aquila-learning/oxlint-config-vue2/.oxlintrc.json",
    ]
}
```
