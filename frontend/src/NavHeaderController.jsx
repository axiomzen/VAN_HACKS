import React from 'react';
import queryString from 'query-string';

const paths = ['confirmation', 'shopping-list', 'clients/create'];

const NavHeaderController = () => {
  // const user = queryString.parseUrl(window.location.href).query.user;
  const { hash } = window.location;
  const hide = paths.some(path => hash.includes(path));
  if (hide) {
    document.body.classList.add('NavHeaderHidden');
  }
  return null;
};

NavHeaderController.propTypes = {};

export default NavHeaderController;
