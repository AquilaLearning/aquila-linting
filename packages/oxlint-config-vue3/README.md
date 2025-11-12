# @aquila-learning/oxlint-config-vue3

OxLint configuration for Aquila Learning projects using Vue 3.  This should installed and used with `@aquila-learning/oxlint-config`.

## Installation

```sh
$ npm install @aquila-learning/oxlint-config @aquila-learning/oxlint-config-vue3 -D
# or
$ yarn add @aquila-learning/oxlint-config @aquila-learning/oxlint-config-vue3 -D
```

## Setup

Add `.eslintrc.json file with the following contents

```json
{
    "extends": [
        "<relative_path_to_node_modules>/@aquila-learning/oxlint-config/.oxlintrc.json",
        "<relative_path_to_node_modules>/@aquila-learning/oxlint-config-vue3/.oxlintrc.json",
    ]
}
```
