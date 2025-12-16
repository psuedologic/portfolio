// vue.config.js
module.exports = {
  // options...
  devServer: {
    allowedHosts: "all"
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
