import React from 'react';
import PropTypes from 'prop-types';

const ApprovalStatus = ({ source, record = {} }) => (
  <span>{record[source]}</span>
);

ApprovalStatus.propTypes = {
  label: PropTypes.string,
  record: PropTypes.object,
  source: PropTypes.string.isRequired
};

export default ApprovalStatus;
