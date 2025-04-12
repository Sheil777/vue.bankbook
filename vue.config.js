const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: 'BankBook',
    themeColor: '#FFFFFF',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black-translucent',
    manifestOptions: {
      version: '1.0.0',
      background_color: '#FFFFFF',
      icons: [
        {
          src: "favicon.png",
          sizes: "90x90",
          type: "image/png"
        },
        {
          src: "favicon.png",
          sizes: "192x192",
          type: "image/png"
        },
      ]
    },
  }
})
