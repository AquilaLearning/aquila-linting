# aquila-stylelint

Aquila Learning Stylelint

## Usage

### Installation

`npm install @aquila-learning/aquila-stylelint --save-dev`

### Setup

- Install peer dependencies
 `npm install stylelint stylelint-scss stylelint-order stylelint-no-unsupported-browser-features @stylistic/stylelint-config --save-dev`
- Add `.stylelintrc.json` file with the following contents:

 ```json
{
    "extends": "@aquila-learning/aquila-stylelint"
}
 ```

- Add an npm script to run linter

 ```json
     "lint:sass": "stylelint \"**/*.scss\""
 ```

### Integrate with webpack

`npm install stylelint-webpack-plugin --save-dev`

```js
const StyleLintPlugin = require('stylelint-webpack-plugin');

const config = { /* webpack config */ };

let styleLintOptions = {
    files: "**/*.scss"
};

if (process.env.NODE_ENV === "production") {
    styleLintOptions.failOnError = true;
}

config.plugins.push(new StyleLintPlugin(styleLintOptions));

```
