// vue.config.js
module.exports = {
  // options...
  devServer: {
      disableHostCheck: true
  },

  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  },

  transpileDependencies: [
    'quasar'
  ]
}
