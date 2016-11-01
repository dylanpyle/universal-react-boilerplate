require('./server/babel-hook');

const webpack = require('webpack');
const koa = require('koa');
const webpackDevMiddleware = require('koa-webpack-dev-middleware');

const config = require('./webpack.config');
const logger = require('./server/middleware/logger');
const reactMiddleware = require('./server/middleware/react').default;

const app = koa();
const port = process.env.PORT || 3003;

const compiler = webpack(config);

app.use(logger);
app.use(webpackDevMiddleware(compiler));
app.use(reactMiddleware);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Development server running on :${port}`);
});
