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
      background_color: '#FFFFFF',
      icons: [
        {
          src: "favicon.png",
          sizes: "90x90",
          type: "image/png"
        },
      ]
    },
  }
})
