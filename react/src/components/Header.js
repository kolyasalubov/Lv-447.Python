import React from 'react';

const Header = (props) => {
  return(
      <div>
          <header>
              <h1>{props.data}</h1>
          </header>
      </div>
  );
};

export default Header;