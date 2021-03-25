const path = require("path"); //引入path模块
function resolve(dir) {
  return path.join(__dirname, dir); //path.join(__dirname)设置绝对路径
}

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("./src"))
      .set("components", resolve("./src/components"))
      .set("assets", resolve("./src/assets"))
      .set("store", resolve("./src/store"))
      .set("api", resolve("./src/api"))
      .set("views", resolve("./src/views"));
    //set第一个参数：设置的别名，第二个参数：设置的路径
  },
  devServer: {
    proxy: {
      "/api": {
        target:
          "https://easy-mock.bookset.io/mock/604ad02b58b07d23e9d1b89a/zc-oj-api/",
        // "http://localhost:8080/",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
