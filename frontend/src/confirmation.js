import React from 'react';
import CheckIcon from './image/check_icon.svg';
import Button from 'react-admin';

const Confirmation = props => (
  <div className="confirmation">
    <img src={CheckIcon} width="100" />
    <h1>Thank you for your submision!</h1>
    <div>Our staff will send you with an update as soon as we have the items in need!</div>
  </div>
);

export default Confirmation;
