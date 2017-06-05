if (module.hot) {
  // http://andrewhfarmer.com/webpack-hmr-tutorial/
  // https://webpack.js.org/configuration/dev-server/#devserver-hot/
  // https://webpack.js.org/concepts/hot-module-replacement/

  // Any changes to our App will cause a hotload re-render.
  module.hot.accept()
}
