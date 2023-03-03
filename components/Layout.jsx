const React = require('react');

module.exports = function Layout({ title, children }) {
  return (
    <html lang="en">
      <head>
        {/* normalize.css removes cross-browser differences in defaults, e.g.,
        differences in how form elements appear between Firefox and IE
        See: http://necolas.github.com/normalize.css/ */}
        <meta charSet="utf-8" />

        <link rel="stylesheet" href="/stylesheets/normalize.css" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
          crossorigin="anonymous"
        ></link>

        {/* your CSS styles */}
        <link rel="stylesheet" href="/stylesheets/application.css" />

        {/* your client JavaScript code */}
        <script defer src="/js/application.js" />

        <title>{title}</title>
      </head>
      <body>{children}</body>
    </html>
  );
};
