const React = require('react');
const Layout = require('./Layout');

module.exports = function Question({ roll }) {
  return (
    <Layout>
      <div className='die'>
        <span className='roll'>{roll}</span>
      </div>
    </Layout>
  );
};
