require('@babel/register');
const express = require('express');




const app = express();
const PORT = 3000;
const path = require('path');
const morgan = require('morgan');
const React = require('react');

const testDbConnection = require('./db/testDbConnection');


const topicRouter = require('./routes/topic');
const questionRouter = require('./routes/topic');

app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/topic', topicRouter);
app.use('/question', questionRouter);


app
  .listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`PORT: ${PORT}`);
    testDbConnection();
  })
  .on('error', (error) => {
    /* eslint-disable no-console */
    console.log('Ошибка веб-сервера');
    console.log(error.message);
    /* eslint-enable no-console */
  });

