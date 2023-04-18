const proxy = require("http-proxy-middleware")

module.exports = function (app) {
  app.use(
    proxy.createProxyMiddleware("/api1", {
      target: "http://127.0.0.1:9007",
      changeOrigin: true,
      pathRewrite: { "^/api1": "" },
    })
  )
}
