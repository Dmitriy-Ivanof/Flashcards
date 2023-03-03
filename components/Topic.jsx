const React = require('react');
const Layout = require('./Layout');
const Random = require('./Question');

module.exports = function Topic({ title }) {
  return (
    <Layout title={title}>
      <div className='container'>
        {/* <h1>Simplest Possible AJAX</h1> */}
        {/* <p>This contrived app will simulate a roll of a n-sided die.</p> */}

        {/* <form className="wasd" method="post" action="/"> */}
        {/* <p>
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

        <div id='die-container'></div>
      </div>
    </Layout>
  );
};
