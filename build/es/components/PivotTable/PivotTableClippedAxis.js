import PropTypes from 'prop-types';
import React from 'react';
export const PivotTableClippedAxis = _ref => {
  let {
    axisClippingResult,
    EmptyComponent,
    ItemComponent
  } = _ref;
  return [axisClippingResult.pre ? /*#__PURE__*/React.createElement(EmptyComponent, {
    key: "pre",
    size: axisClippingResult.pre
  }) : null, axisClippingResult.indices.map(index => /*#__PURE__*/React.createElement(ItemComponent, {
    key: index,
    index: index
  })), axisClippingResult.post ? /*#__PURE__*/React.createElement(EmptyComponent, {
    key: "post",
    size: axisClippingResult.post
  }) : null];
};
PivotTableClippedAxis.propTypes = {
  axisClippingResult: PropTypes.object.isRequired,
  EmptyComponent: PropTypes.func,
  ItemComponent: PropTypes.func
};