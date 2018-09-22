import React from 'react';
import PropTypes from 'prop-types';

const ApprovalStatus = ({ source, record = {} }) => {
  const status = record[source].toUpperCase();
  let className = '';
  switch (status) {
    case 'PENDING':
      className = 'pending';
      break;
    case 'APPROVED':
      className = 'approved';
      break;
    case 'REJECTED':
      className = 'rejected';
      break;
  }
  return <span className={className}>{status}</span>;
};

ApprovalStatus.propTypes = {
  label: PropTypes.string,
  record: PropTypes.object,
  source: PropTypes.string.isRequired
};

export default ApprovalStatus;
