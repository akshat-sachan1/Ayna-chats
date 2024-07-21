
const { createProxyMiddleware } = require('http-proxy-middleware');

exports.handler = (event, context, callback) => {
  const proxy = createProxyMiddleware({
    target: 'http://localhost:1337',
    changeOrigin: true,
    pathRewrite: {
      '^/api': '', 
    },
  });

  proxy(event, context, callback);
};
