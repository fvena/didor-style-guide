# Didor Development Style Guide

This package provides a unified configuration for ESLint, Prettier, Stylelint, and TypeScript, ensuring consistency and quality across all your projects at Didor.

> **Note**: This style guide is based on the [Vercel Development Style Guide](https://github.com/vercel/style-guide)

## Installation

To install the package, run:

```bash
npm install --save-dev @didor/style-guide
```

## ESLint

The configuration is composable. First, you need to extend one or both of the following configurations:

- `@didor/style-guide/eslint/browser` for browser projects.
- `@didor/style-guide/eslint/node` for Node projects.

Then, you can extend with the following configurations if needed:

- `@didor/style-guide/eslint/vue` for Vue projects.
- `@didor/style-guide/eslint/nuxt` for Nuxt projects.
- `@didor/style-guide/eslint/vitest` for Vite tests.
- `@didor/style-guide/eslint/typescript` for TypeScript projects (requires `typescript` to be installed and [additional configuration](#configuring-eslint-for-typescript)).

Create or update `.eslintrc.js` in your project root and extend the configurations you need:

> **Note**: ESLint is a peer dependency, so you need to install at the root of your project, [ESLint Installation](https://eslint.org/docs/v8.x/use/).

> **Note**: You'll need to use `require.resolve` to provide ESLint with absolute paths, due to an issue around ESLint config resolution (see [eslint/eslint#9188](https://github.com/eslint/eslint/issues/9188)).

> **Note**: The latest version of ESLint, version 9, is not yet supported in this style guide because it is very recent and other necessary libraries have not yet been updated, causing errors. Therefore, it is recommended to use the latest previous version, which is v8.57.0.

```js
module.exports = {
  extends: [
    require.resolve('@didor/style-guide/eslint/browser'),
    require.resolve('@didor/style-guide/eslint/vue'),
    require.resolve('@didor/style-guide/eslint/typescript')
  ]
}
```

### Configuring ESLint for TypeScript

Some of the rules enabled in the TypeScript config require additional type information, you'll need to provide the path to your tsconfig.json.

For more information, see: [https://typescript-eslint.io/docs/linting/type-linting](https://typescript-eslint.io/docs/linting/type-linting)

```js
const { resolve } = require('node:path')

const project = resolve(__dirname, 'tsconfig.json')

module.exports = {
  root: true,
  extends: [
    require.resolve('@vercel/style-guide/eslint/node'),
    require.resolve('@vercel/style-guide/eslint/typescript')
  ],
  parserOptions: {
    project
  },
  settings: {
    'import/resolver': {
      typescript: {
        project
      }
    }
  }
}
```

## Prettier

To use the shared Prettier config, set the following in `package.json`.

> **Note**: Prettier is a peer dependency, so you need to install at the root of your project, [Prettier Installation](https://prettier.io/docs/en/install.html).

```json
{
  "prettier": "@didor/style-guide/prettier"
}
```

## Stylelint

Create or update `.stylelintrc.js` in your project root:

> **Note**: Stylelint is a peer dependency, so you need to install at the root of your project, [Stylelint Installation](https://stylelint.io/user-guide/get-started).

```js
module.exports = {
  extends: ['@didor/style-guide/stylelint']
}
```

## TypeScript

This style guide provides multiple TypeScript configs. These configs correlate to the LTS Node.js versions, providing the appropriate lib, module, target, and moduleResolution settings for each version. The following configs are available:

- `@didor/style-guide/typescript/node18` for Node.js 18.
- `@didor/style-guide/typescript/node20` for Node.js 20.

Ensure you have a `tsconfig.json` in your project root. You can extend the provided configuration if necessary:

```json
{
  "extends": "@didor/style-guide/typescript"
}
```

## Scripts

Add the following scripts to your `package.json` to lint and format your code:

```json
{
  "scripts": {
    "lint:js": "eslint 'src/**/*.{js,ts,vue}'",
    "lint:css": "stylelint 'src/**/*.{scss,css}'",
    "format": "prettier --write 'src/**/*.{js,ts,vue,scss,css}'"
  }
}
```

## Updating

To check for outdated dependencies, run:

```bash
npx npm-check-updates
```

This lists all outdated dependencies. It's important to read the release notes for each dependency to understand the changes.

Update dependencies running the interactive mode. It's recommended to update them one by one to avoid breaking changes.:

```bash
npx npm-check-updates --interactive
```

## Contributing

We welcome contributions to improve and expand this style guide. Please follow these steps to contribute:

1. Fork the repository.
1. Create a new branch (`git checkout -b feature-branch`).
1. Make your changes.
1. Commit your changes, this repository follows the [Conventional Commits](https://www.conventionalcommits.org/) format, so make sure to follow it when committing your changes. The scope should be included most of the time, and all allowed scopes are listed in the `commitlint.config.js` file. (`git commit -m 'type(scope?): message'`).
1. Push to the branch (`git push origin feature-branch`).
1. Create a new Pull Request.
