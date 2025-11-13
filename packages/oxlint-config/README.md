# @aquila-learning/oxlint-config

Oxlint configuration for Aquila Learning projects.

## Installation

```sh
$ npm install @aquila-learning/oxlint-config -D
# or
$ yarn add @aquila-learning/oxlint-config -D
```

## Setup

Add .oxlintrc.json file with the following contents

```json
{
    "extends": [
        "<relative_path_to_node_modules>/@aquila-learning/eslint-config/.oxlintrc.json",
    ]
}
```
