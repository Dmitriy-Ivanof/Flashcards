const React = require("react");
const Layout = require("./Layout");

module.exports = function Topics({ title, arrTopics }) {
  return (
    <Layout title={title}>
      <br />
      <br />
      <h1>Выбор темы</h1>

      <div className="container">
        <div className="topicsDiv">
          {arrTopics.map((topic) => (
            <a href={`/topic/question/${topic.id}`} className="button">
              <div>
                {/* {topic.name} */}

                {/* <h5 className="card-title">{topic.name}</h5> */}
                {/* <a href={`/${topic.name}`} className="button"> */}
                {topic.name}
              </div>
            </a>
          ))}

          {/* <i className="bi bi-trash icons" data-id={topic.id} /> */}
        </div>
        {/* <form className="wasd" method="post" action="/">
          <p>

            <label htmlFor="sides">
              How many sides?
              <input
                id="sides"
                name="sides"
                type="number"
                placeholder="optional - default=6"
              />
            </label>
          </p>
          <p>
            <input type="submit" value="Roll the Die" />
          </p>
        </form> */}

        <div id="die-container"></div>
      </div>
    </Layout>
  );
};
