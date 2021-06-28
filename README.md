# Markdown-It Plugin Template

[![ci-badge]][ci-link]
[![npm-badge]][npm-link]

A template for creating a [markdown-it](https://github.com/markdown-it/markdown-it) plugin.

## Features

- TypeScript
- Code Formatting ([prettier])
- Code Linting ([eslint])
- Testing and coverage ([jest])
- Continuous Integration (GitHub Actions)
- Bundled as both UMD and ESM ([rollup])
- Upload as [NPM] package and [unpkg CDN](https://unpkg.com/)

## Getting Started

1. Create a GitHub repository [from the template](https://docs.github.com/en/github-ae@latest/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-repository-from-a-template).
2. Replace package details in the following files:
   - `package.json`
   - `LICENSE`
   - `README.md`
   - `rollup.config.js`
3. Install the `node_module` dependencies: `npm install` or `npm ci` (see [Install a project with a clean slate](https://docs.npmjs.com/cli/v7/commands/npm-ci)).
4. Run code formatting; `npm run format`, and linting: `npm run lint:fix`.
5. Run the unit tests; `npm test`, or with coverage; `npm test -- --coverage`.

Now you can start to adapt the code in `src/index.ts` for your plugin, starting with the [markdown-it development recommendations](https://github.com/markdown-it/markdown-it/blob/master/docs/development.md).

Modify the test in `tests/fixtures.spec.ts`, to load your plugin, then the "fixtures" in `tests/fixtures`, to provide a set of potential Markdown inputs and expected HTML outputs.

On commits/PRs to the `master` branch, the GH actions will trigger, running the linting, unit tests, and build tests.
Additionally setup and uncomment the [codecov](https://about.codecov.io/) action in `.github/workflows/ci.yml`, to provide automated CI coverage.

Finally, you can update the version of your package: `npm version patch -m "🚀 RELEASE: v%s"`, build; `npm run build`, and publish; `npm publish`.

## Usage

As a Node module:

```javascript
import MarkdownIt from "markdown-it"
import example_plugin from "markdown-it-plugin-template"

const text = MarkdownIt().use(example_plugin).render("*a*")
```

In the browser:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Example Page</title>
        <script src="https://cdn.jsdelivr.net/npm/markdown-it@12/dist/markdown-it.min.js"></script>
        <script src="https://unpkg.com/markdown-it-plugin-template"></script>
    </head>
    <body>
        <div id="demo"></div>
        <script>
            const text = window.markdownit().use(window.markdownitExample).render("*a*");
            document.getElementById("demo").innerHTML = text
        </script>
    </body>
</html>
```

## Design choices

### Why is markdown-it only in devDependencies?

From the [markdown-it development recommendations](https://github.com/markdown-it/markdown-it/blob/master/docs/development.md):

> Plugins should not require the `markdown-it` package as a dependency in `package.json`.

Note, for typing, we import this package with `import type`, to ensure the imports are not present in the compiled JavaScript.

### Why Jest?

There are a number of JavaScript unit testing frameworks (see [this comparison](https://raygun.com/blog/javascript-unit-testing-frameworks/), but [jest] was chosen because of it is easy to setup/use, flexible, and well used in large projects.

### Why Rollup?

The three main bundlers are; Webpack, Rollup and Parcel, with the functionality gap between all of these bundlers narrowing over the years.
Essentially, Rollup provides a middle ground between features and complexity, and is good for bundling libraries (it is what `markdown-it` itself [uses](https://github.com/markdown-it/markdown-it/blob/064d602c6890715277978af810a903ab014efc73/support/rollup.config.js)).

See for example:

- <https://medium.com/@PepsRyuu/why-i-use-rollup-and-not-webpack-e3ab163f4fd3>
- <https://medium.com/js-imaginea/comparing-bundlers-webpack-rollup-parcel-f8f5dc609cfd>
- <https://betterprogramming.pub/the-battle-of-bundlers-6333a4e3eda9>

## TODO

- which javascript versions (main/module in tsconfig.json)?
- is [@rollup/plugin-babel](https://www.npmjs.com/package/@rollup/plugin-babel) necessary?
- Use [rollup-plugin-dts](https://www.npmjs.com/package/rollup-plugin-dts), to rollup all types in one file (see also: [Rollup your types](https://medium.com/@martin_hotell/typescript-library-tips-rollup-your-types-995153cc81c7))?

[ci-badge]: https://github.com/executablebooks/markdown-it-plugin-template/workflows/CI/badge.svg
[ci-link]: https://github.com/executablebooks/markdown-it--plugin-template/actions
[npm-badge]: https://img.shields.io/npm/v/markdown-it-plugin-template.svg
[npm-link]: https://www.npmjs.com/package/markdown-it-plugin-template

[prettier]: https://prettier.io/
[eslint]: https://eslint.org/
[Jest]: https://facebook.github.io/jest/
[Rollup]: https://rollupjs.org
[npm]: https://www.npmjs.com
