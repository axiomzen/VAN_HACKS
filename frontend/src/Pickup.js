import React, { Component } from 'react';
import Logo from './image/glassbox_logo.svg';

class Pickup extends Component {
  render() {
    return (
      <div className="confirmation">
        <img src={Logo} width="240" />
        <h2>Your Wish list has been approved and is ready for pickup!</h2>
        <div>Please visit us to receive your item(s)</div>
      </div>
    );
  }
}

export default Pickup;
