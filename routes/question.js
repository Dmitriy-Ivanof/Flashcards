const express = require('express');
const ReactDOMServer = require('react-dom/server');
const React = require('react');


const Questions = require('../components/Question');

const router = express.Router();
const { Question } = require('../db/models');
const newQuestions = require('../components/newQestion');

// GET /question
router.get('/', async (req, res) => {
  const getQuestion = await Question.findAll(); // where: { topicId: Number(questionId) }
  // router.get('/:questionId', async (req, res) => {
  const answers = getQuestion.map((el) => el.answer);
  const question = getQuestion.map((el) => el.question);
  const firstQ = question[0];
  const questionId = 1;
  const arrOfAnswers = getQuestion.filter((question) => question.topicId === questionId);
  res.renderComponent(Questions, { title: 'Question', firstQ });
});

// POST /question
router.post('/', async (req, res) => {
  const { name, countNum } = req.body;
  const getQuestion = await Question.findAll();
  const answers = getQuestion.map((el) => el.answer);
  const question = getQuestion.map((el) => el.question);
  const message = answers.includes(name);
  const random = React.createElement(newQuestions, { question, message, countNum });
  const html = ReactDOMServer.renderToStaticMarkup(random);
  res.json(html);
});


module.exports = router;
