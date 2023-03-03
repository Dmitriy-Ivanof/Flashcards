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


module.exports = router;
