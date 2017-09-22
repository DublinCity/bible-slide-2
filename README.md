# NOTE: Fork info

This is a fork of the original `electron-webpack-quick-start`.

- Patches `electron-webpack` itself on postinstall via `scripts/patches.js` 
- Might become obsolete if https://github.com/electron-userland/electron-webpack/pull/28 gets merged
- Adds supports for any babel preset or plugin found in devDependencies. 
- Adds support for HMR on stylesheets via `css-hot-loader`
- Includes `react` and `react-dom`
- Includes `babel-preset-stage-0` and `babel-plugin-transform-decorators-legacy`
- Includes `eslint` and `prettier` setup (make sure you set up your IDE to format using `prettier`, see `.eslintrc.js` for prettier config, e.g. for Sublime use https://packagecontrol.io/packages/JsPrettier)
- Includes `node-sass` and `sass-loader`

# electron-webpack-quick-start
> A bare minimum project structure to get started developing with [`electron-webpack`](https://github.com/electron-userland/electron-webpack).

Thanks to the power of `electron-webpack` this template comes packed with...

* Use of [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) for development
* HMR for both `renderer` and `main` processes
* Use of [`babel-preset-env`](https://github.com/babel/babel-preset-env) that is automatically configured based on your `electron` version
* Use of [`electron-builder`](https://github.com/electron-userland/electron-builder) to package and build a distributable electron application

Make sure to check out [`electron-webpack`'s documentation](https://webpack.electron.build/) for more details.

## Getting Started
Simply clone down this reposity, install dependencies, and get started on your application.

The use of the [yarn](https://yarnpkg.com/) package manager is **strongly** recommended, as opposed to using `npm`.

```bash
# copy template using curl
curl -fsSL https://github.com/electron-userland/electron-webpack-quick-start/archive/master.tar.gz | tar -xz --strip-components 1

# or copy template using git clone
git clone https://github.com/electron-userland/electron-webpack-quick-start.git
cd electron-webpack-quick-start
rm -rf .git

# install dependencies
yarn
```

### Development Scripts

```bash
# run application in development mode
yarn dev

# compile source code and create webpack output
yarn compile

# `yarn compile` & create build with electron-builder
yarn dist

# `yarn compile` & create unpacked build with electron-builder
yarn dist:dir
```
