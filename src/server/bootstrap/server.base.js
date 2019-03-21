import express from 'express';
import appRootPath from 'app-root-path';

const app = express();

// switch (process.env.NODE_ENV) {
//   case 'production':
//     const prodWrapper = require('server/bootstrap/server.prod.js').default;
//     prodWrapper(app);
//     break;
//   case 'development':
//     const devWrapper = require('server/bootstrap/server.dev.js').default;
//     devWrapper(app);
//     break;
// }

app.use(express.static('public'));
app.set('views', appRootPath.resolve('server/view'));
app.set('view engine', 'pug');
app.all('/*', (_req, res) => {
  res.render('index');
  // res.render('index', settings);
});
app.listen(3000, (err) => {
  if (err) throw err;
  console.log('>>> Ready on http://localhost:3000');
});