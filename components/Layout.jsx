const React = require('react');
const Navbar = require('./Navbar');

module.exports = function Layout({ title, children }) {
  return (
    <html lang='en'>
      <head>
        <title>{title}</title>

        {/* <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css'
        ></link> */}
        <link
          href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css'
          rel='stylesheet'
          integrity='sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC'
          crossOrigin='anonymous'
        ></link>

        {/* <link rel='stylesheet' href='/stylesheets/normalize.css' /> */}
        {/* <link
          href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css'
          rel='stylesheet'
          integrity='sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD'
          crossorigin='anonymous'
        ></link> */}

        {/* your CSS styles */}
        <link rel='stylesheet' href='/stylesheets/application.css' />

        {/* your client JavaScript code */}
        <script defer src='/js/application.js' />

        <title>{title}</title>
      </head>
      <Navbar />
      <body>{children}</body>
    </html>
  );
};
