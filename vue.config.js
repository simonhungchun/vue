const Components = require("unplugin-vue-components/webpack");
const { AntDesignVueResolver } = require("unplugin-vue-components/resolvers");
const { defineConfig } = require("@vue/cli-service");
// 组件按需加载只在模板语法中生效 jsx中无效
module.exports = defineConfig({
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnable: true,
        },
      },
    },
  },
  transpileDependencies: true,
  devServer: {
    proxy: "http://192.168.145.28:8001",
  },
  configureWebpack: {
    plugins: [
      Components({
        resolvers: [
          AntDesignVueResolver({
            importStyle: "less", // 配置自动引入less样式
            importLess: true, // 配置自动引入less样式
            // resolveIcons: true, // 引入antd-vue图标
          }),
        ],
      }),
    ],
  },
});
