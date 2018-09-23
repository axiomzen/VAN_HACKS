import React from 'react';
import queryString from 'query-string';

const NavHeaderController = () => {
  const user = queryString.parseUrl(window.location.href).query.user;
  if (user === 'org' || user === 'client') {
    document.body.classList.add('NavHeaderHidden');
  }
  return null;
};

NavHeaderController.propTypes = {};

export default NavHeaderController;
