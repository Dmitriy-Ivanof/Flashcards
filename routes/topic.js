const express = require('express');
const ReactDOMServer = require('react-dom/server');
const React = require('react');

// const Topic = require("../components/Topic");

const router = express.Router();

router.post('/', (req, res) => {
  res.send('Dima, privet');
});
// const { Topics } = require("../db/models/topic");

// /* GET home page. */
// router.get("/", (req, res) => {
//   const topic = React.createElement(Topic, { title: "Beavers, women" });
//   const html = ReactDOMServer.renderToStaticMarkup(topic);
//   res.write("<!DOCTYPE html>");
//   res.end(html);
// });

// // TODO: изменить данный маршрутизатор с использованием AJAX
// router.post("/", (req, res) => {
//   const { num } = req.body;

//   const random = React.createElement(Topic, {});
//   const html = ReactDOMServer.renderToStaticMarkup(random);

//   res.end(html);
// });

module.exports = router;
