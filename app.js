require('@babel/register');
const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const morgan = require('morgan');
const React = require('react');

const topicRouter = require('./routes/topic');
const questionRouter = require('./routes/topic');

app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', topicRouter);
app.use('/questions', questionRouter);

app.listen(PORT, () => {
  console.log('Server started');
});
