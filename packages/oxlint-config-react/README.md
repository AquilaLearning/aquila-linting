# @aquila-learning/oxlint-config-react

Oxlint configuration for Aquila Learning projects using React.  This should installed and used with `@aquila-learning/oxlint-config`.

## Installation

```sh
$ npm install @aquila-learning/oxlint-config @aquila-learning/oxlint-config-react -D
# or
$ yarn add @aquila-learning/oxlint-config @aquila-learning/oxlint-config-react -D
```

## Setup

Add `.oxlintrc.json file with the following contents

```json
{
    "extends": [
        "<relative_path_to_node_modules>/@aquila-learning/oxlint-config/.oxlintrc.json",
        "<relative_path_to_node_modules>/@aquila-learning/oxlint-config-react/.oxlintrc.json",
    ]
}
```
