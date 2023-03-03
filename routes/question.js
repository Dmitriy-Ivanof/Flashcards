const express = require("express");
const ReactDOMServer = require("react-dom/server");
const React = require("react");

const Questions = require("../components/Question");

const router = express.Router();
const { Question } = require("../db/models");
const newQuestions = require("../components/newQestion");

// GET /question
router.get("/:questionId", async (req, res) => {
  const { questionId } = req.params;
  // console.log(questionId);
  const getQuestion = await Question.findAll(); // where: { topicId: Number(questionId) }
  // const questionId = 1;
  // console.log(getQuestion);
  const arrOfAnswers = getQuestion.filter(
    (quest) => quest.topicId === Number(questionId)
  );
  // console.log(arrOfAnswers);
  // const answers = getQuestion.map((el) => el.answer);
  const question = arrOfAnswers.map((el) => el.question);
  // console.log(question);

  const firstQ = question[0];

  res.renderComponent(Questions, { title: "Question", firstQ, questionId });
});

// POST /question
router.post("/:questionId/", async (req, res) => {
  const { name, countNum } = req.body;
  const { questionId } = req.params;
  const getQuestion = await Question.findAll();
  const arrOfAnswers = getQuestion.filter(
    (quest) => quest.topicId === Number(questionId)
  );

  const answers = arrOfAnswers.map((el) => el.answer);
  const question = arrOfAnswers.map((el) => el.question);
  const message = name === answers[countNum - 1];
  console.log(answers);
  const random = React.createElement(newQuestions, {
    question,
    message,
    countNum,
  });
  const html = ReactDOMServer.renderToStaticMarkup(random);
  res.json(html);
});

module.exports = router;
