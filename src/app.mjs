import indexRouter from './routers/indexRouter.mjs';

import express from 'express';
import 'dotenv/config';

const app = express();

app.use('/', indexRouter);

app.listen(process.env.PORT, () =>
  console.log('Server listening on port', process.env.PORT),
);
