const express = require('express');
const ReactDOMServer = require('react-dom/server');
const React = require('react');

const Topics = require('../components/Topic');

const router = express.Router();
const { Topic } = require('../db/models');

/* GET home page. */
router.get('/', async (req, res) => {
  const arrTopics = await Topic.findAll();
  // res.send(arrTopics.name);
  const topic = React.createElement(Topics, {
    title: 'Beavers, women',
    arrTopics,
  });
  const html = ReactDOMServer.renderToStaticMarkup(topic);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

// TODO: изменить данный маршрутизатор с использованием AJAX
// router.post('/', async (req, res) => {
// const { num } = req.body;

// const r = await Topics.findAll();
// console.log(r);
// // const ror = students.map((el) => el.word);

// // const rora = ror.

// const topic = React.createElement(Topic, {
//   title: 'Beavers, women',
//   theme: { r },
// });
// // const random = React.createElement(Topic, {});
// const html = ReactDOMServer.renderToStaticMarkup(topic);

// res.end(html);
// });

module.exports = router;
