const React = require('react');

const Navbar = ({}) => {
  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary bg-dark '>
      <div className='container-fluid'>
        <div className='collapse navbar-collapse' id='navbarSupportedContent '>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <img
              className='img'
              src='https://i.pinimg.com/564x/9a/21/72/9a21726e0338ae6097d27a603357c580.jpg'
              alt=''
            />
            <li className='nav-item'>
              <a
                className='nav-link active text-light text-uppercase '
                aria-current='page'
                href='/'
              >
                Topics
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link text-light text-uppercase'
                href='/questions'
              >
                Questions
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link text-light text-right text-uppercase'
                href='/login'
              >
                LogIn
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link text-light text-uppercase'
                href='/registration'
              >
                Registration
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

module.exports = Navbar;
