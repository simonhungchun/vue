const path = require("path");
const AutoImportUiComponents = require("unplugin-vue-components/webpack");
const AutoImportVueModules = require("unplugin-auto-import/webpack");
const { AntDesignVueResolver } = require("unplugin-vue-components/resolvers");
const modifyVars = require("./theme.config");
const resolve = (dir) => path.join(__dirname, ".", dir);

module.exports = {
  css: {
    requireModuleExtension: true,
    loaderOptions: {
      less: {
        // 需要替换的主题变量
        modifyVars,
        javascriptEnabled: true,
      },
    },
  },
  configureWebpack: {
    plugins: [
      // 自动引入vue、vue-router模块
      AutoImportVueModules({
        imports: [
          "vue",
          {
            axios: [["default", "axios"]],
          },
        ],
      }),
      // 自动导入antd vue组件及图标组件
      AutoImportUiComponents({
        resolvers: [
          AntDesignVueResolver({
            importStyle: "less", // 配置自动引入less样式
            importLess: true, // 配置自动引入less样式
            resolveIcons: true, // 引入antd-vue图标
          }),
        ],
      }),
    ],
  },
  chainWebpack: (config) => {
    // 默认的svg-loader不要处理src/svg中的svg文件
    config.module.rule("svg").exclude.add(resolve("src/svg")).end();
    // 配置svg-sprite-loader来处理src/svg的svg文件
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/svg"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "[name]",
      });
    // 配置title
    config.plugin("html").tap((args) => {
      args[0].title = process.env.VUE_APP_TITLE_PREFIX;
      return args;
    });
  },
};
