const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 7000, // 设置 Vue 前端端口
    proxy: {
      "/api": {
        target: "http://localhost:8080", // 后端 Spring Boot 地址
        changeOrigin: true,
        secure: false, // 如果是 https，设置为 true
        pathRewrite: { "^/api": "" }, // 去掉 /api 前缀
      },
    },
  },
});
