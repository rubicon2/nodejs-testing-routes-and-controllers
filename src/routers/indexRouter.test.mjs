import indexRouter from './indexRouter.mjs';
import request from 'supertest';
import express from 'express';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use('/', indexRouter);

test('index route works', (done) => {
  request(app)
    .get('/')
    .expect('Content-Type', /json/)
    .expect({ name: 'frodo' })
    .expect(200, done);
});

test('test route works', (done) => {
  request(app)
    .post('/test')
    .type('form')
    .send({ item: 'hey' })
    .then(() => {
      request(app)
        .get('/test')
        .expect({ array: ['hey'] }, done);
    });
});
