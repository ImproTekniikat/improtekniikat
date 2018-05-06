import React from 'react';
import Header from './Header';

const Layout = props => {
  return (
    <div>
      <Header auth={props.auth} />
      {props.children}
    </div>
  );
};

export default Layout;
