const React = require('react');

module.exports = function newQuestions({ message, question, countNum }) {
  return (
    
    <div className="newQuestion">
      <span>{question[countNum]}</span>
      <br></br>
      <span>{message ? "It's true" : "It's false"}</span>
    </div>
  );
};
