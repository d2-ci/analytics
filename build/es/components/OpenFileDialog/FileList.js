import { DataTableRow, DataTableCell, colors } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React from 'react';
import { VisTypeIcon } from '../VisTypeIcon.js';
import { DateField } from './DateField.js';
export const FileList = _ref => {
  let {
    data,
    onSelect,
    showVisTypeColumn
  } = _ref;
  return /*#__PURE__*/React.createElement(React.Fragment, null, data.map(visualization => /*#__PURE__*/React.createElement(DataTableRow, {
    key: visualization.id
  }, /*#__PURE__*/React.createElement(DataTableCell, {
    onClick: () => onSelect(visualization.id)
  }, visualization.displayName), showVisTypeColumn && /*#__PURE__*/React.createElement(DataTableCell, {
    align: "center"
  }, /*#__PURE__*/React.createElement(VisTypeIcon, {
    type: visualization.type,
    useSmall: true,
    color: colors.grey600
  })), /*#__PURE__*/React.createElement(DataTableCell, null, /*#__PURE__*/React.createElement(DateField, {
    date: visualization.created
  })), /*#__PURE__*/React.createElement(DataTableCell, null, /*#__PURE__*/React.createElement(DateField, {
    date: visualization.lastUpdated
  })))));
};
FileList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    created: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    lastUpdated: PropTypes.string.isRequired,
    type: PropTypes.string
  })).isRequired,
  onSelect: PropTypes.func.isRequired,
  showVisTypeColumn: PropTypes.bool
};
export default FileList;