import {
  getIndex,
  getTest,
  postTest,
} from '../controllers/indexController.mjs';
import { Router } from 'express';

const app = Router();

app.get('/', getIndex);
app.get('/test', getTest);
app.post('/test', postTest);

export default app;
