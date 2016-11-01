require('./server/babel-hook');

const koa = require('koa');
const ks = require('koa-static');
const path = require('path');

const logger = require('./server/middleware/logger');
const reactMiddleware = require('./server/middleware/react').default;

const app = koa();

app.use(logger);
app.use(ks(path.join(__dirname, 'dist')));
app.use(reactMiddleware);

const port = process.env.PORT || 3004;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Production Server running on :${port}`);
});
