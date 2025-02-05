/**
 * @server
 */

import Koa from 'koa';
import fs from 'node:fs';
import { server } from 'koa-files';
import compress from 'koa-compress';

const app = new Koa();

app.use(
  compress({
    br: false
  })
);

app.use(
  server('wwwroot', {
    cacheControl: 'public, max-age=31536000'
  })
);

app.use(async ctx => {
  ctx.type = 'text/html';

  ctx.set('X-Content-Type-Options', 'nosniff');

  ctx.body = fs.createWriteStream('wwwroot/app.html');
});

app.listen(8000, () => {
  const domain = 'http://127.0.0.1:8000';

  console.log(`server run at: \u001B[36m${domain}\u001B[0m`);
});
