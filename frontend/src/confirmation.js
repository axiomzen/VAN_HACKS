import React from 'react';

const Confirmation = props => {
  const {
    match: {
      params: { id }
    }
  } = props;
  return <div>Thank you for submitting. The client's id is {id}</div>;
};

export default Confirmation;
