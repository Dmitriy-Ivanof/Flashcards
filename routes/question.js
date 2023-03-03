const express = require('express');
const ReactDOMServer = require('react-dom/server');
const React = require('react');

const Question = require('../components/Question');
const router = express.Router();
const { Question } = require('../db/models/question');

/* GET home page. */
router.get('/', (req, res) => {
  // const question = React.createElement(Question, req.app.locals);
  // const html = ReactDOMServer.renderToStaticMarkup(question);
  // res.write("<!DOCTYPE html>");
  // res.end(html);
  res.send('text');
});

// // TODO: изменить данный маршрутизатор с использованием AJAX
// router.post("/question", (req, res) => {
//   const { num } = req.body;

//   const random = React.createElement(Question, { roll: "Вопросы" });
//   const html = ReactDOMServer.renderToStaticMarkup(random);

//   res.end(html);
// });

module.exports = router;
