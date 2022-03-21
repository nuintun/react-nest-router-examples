/**
 * @server
 */

const fs = require('fs');
const Koa = require('koa');
const zlib = require('zlib');
const files = require('koa-files');
const compress = require('koa-compress');

const app = new Koa();

app.use(compress({ br: false }));

app.use(files('wwwroot'));

app.use(async ctx => {
  ctx.type = 'text/html';
  ctx.body = fs.createReadStream('wwwroot/app.html');
});

app.listen(8000, () => {
  const domain = 'http://127.0.0.1:8000';

  console.log(`server run at: \u001B[36m${domain}\u001B[0m`);
});
