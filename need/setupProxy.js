const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/kunden/5004333890", {
      target:
        "https://mitarbeiterwebservice.maklerinfo.biz/service/ari/employee/1.0/rest/Alpha0_BQ5G3X",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/kunden/5004333890/adressen", {
      target:
        "https://mitarbeiterwebservice.maklerinfo.biz/service/ari/employee/1.0/res/Alpha0_BQ5G3X",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/kunden/5004333890/kontaktdaten", {
      target:
        "https://mitarbeiterwebservice.maklerinfo.biz/service/ari/employee/1.0/rest/Alpha0_BQ5G3X",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/kunden/5004333890/vertraege", {
      target:
        "https://mitarbeiterwebservice.maklerinfo.biz/service/ari/employee/1.0/rest/Alpha0_BQ5G3X",
      changeOrigin: true,
    })
  );
};
