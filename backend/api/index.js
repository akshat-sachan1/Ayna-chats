const { createServer } = require('http');
const { parse } = require('url');
const strapi = require('@strapi/strapi');

strapi().start().then(() => {
  createServer((req, res) => {
    const { pathname } = parse(req.url);
    if (pathname.startsWith('/api/')) {
      strapi().httpServer(req, res);
    } else {
      res.writeHead(404).end();
    }
  }).listen(process.env.PORT || 3000);
});
