const React = require('react');
const Layout = require('./Layout');

module.exports = function Question({ title, firstQ }) {
  return (

    <Layout title={title}>
      <div>
        <div className="question">
          <div className="newText">
            <span>{firstQ}</span>
          </div>
          <form method="post" action="/question" className="answerForm">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Ваш ответ:
            </label>
            <input name="text" type="text" className="form-control" id="answer" />
            <button type="submit" className="btn_btn-primary">
              Дать ответ!
            </button>
          </form>
        </div>

      </div>
    </Layout>
  );
};
