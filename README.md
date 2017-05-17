# simple-webpack2-boilerplate

## TL;DR
A simple Babel, ES7, devServer for web projects using webpack2.

- `yarn dev`
- `yarn build`


## Clone Repo

Clone repo:

```sh
git clone --depth 1 git@github.com:RoseAsbenhe/simple-webpack2-boilerplate.git my-app
cd my-app
```

Re-init git:

```sh
rm -rf .git && git init && yarn init
```

> :information_source: Yarn is a dependency manager for your node packages. (https://yarnpkg.com/en/) You can install packages with `add` and uninstall them with `remove`. There are `devDependencies` (which will only be installed in your dev enviroment, e.g. dev-servers) and `dependencies` which will also be installed for production.

Install dependencies:

```sh
yarn install
```

> Yeah! You can start programming now


## Workflow

> :information_source: Scripts are shorthands and can be found in the package.json. If you really want to use npm instead of yarn, you'll have to write `npm run dev/build`

Start the development server via the script:

```sh
yarn dev
```
> this builds your webpack app and uses your localhost as a local server

Build your project via the script:

```sh
yarn build
```

> This builds a production-ready project from your sources in the /src folder into the /build folder. Now you can deploy the contents of the `build` directory to e.g. netlify (or surge)


## Notes

HMR (hot-module-replacement) which is a super-cool feature of webpack has NOT been configurated within this boilerplate yet. Otherwise the development server would have live-reloads. (https://webpack.js.org/concepts/hot-module-replacement/)

Furthermore it would be possible to simulate a production server (CDN) if you install `serve` (https://www.npmjs.com/package/serve)
