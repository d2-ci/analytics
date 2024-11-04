import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
export const DateField = _ref => {
  let {
    date
  } = _ref;
  const d = new Date(date);
  return /*#__PURE__*/React.createElement("time", {
    dateTime: d.toISOString()
  }, moment(date).format('L'));
};
DateField.propTypes = {
  date: PropTypes.string.isRequired
};
export default DateField;