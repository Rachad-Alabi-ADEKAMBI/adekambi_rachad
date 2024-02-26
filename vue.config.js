// vue.config.js
const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/portfolio/",
  chainWebpack: (config) => {
    // Additional webpack configurations if needed
  },
  // Other Vue CLI options...
});
