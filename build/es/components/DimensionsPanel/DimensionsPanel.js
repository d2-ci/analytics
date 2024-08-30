function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import i18n from '../../locales/index.js';
import Filter from '../Filter/Filter.js';
import DimensionList from './List/DimensionList.js';
import { styles } from './styles/DimensionsPanel.style.js';

class DimensionsPanel extends Component {
  constructor() {
    super(...arguments);

    _defineProperty(this, "state", {
      filterText: ''
    });

    _defineProperty(this, "onClearFilter", () => {
      this.setState({
        filterText: ''
      });
    });

    _defineProperty(this, "onFilterTextChange", filterText => {
      this.setState({
        filterText
      });
    });
  }

  render() {
    const {
      dimensions,
      selectedIds,
      disabledDimension,
      lockedDimension,
      recommendedDimension,
      onDimensionClick,
      onDimensionOptionsClick,
      onDimensionDragStart,
      style
    } = this.props;
    return /*#__PURE__*/React.createElement("div", {
      style: { ...styles.divContainer,
        ...style
      }
    }, /*#__PURE__*/React.createElement(Filter, {
      placeholder: i18n.t('Filter dimensions'),
      text: this.state.filterText,
      onChange: this.onFilterTextChange,
      onClear: this.onClearFilter,
      type: "search"
    }), /*#__PURE__*/React.createElement(DimensionList, {
      dimensions: dimensions,
      selectedIds: selectedIds,
      filterText: this.state.filterText,
      disabledDimension: disabledDimension,
      lockedDimension: lockedDimension,
      recommendedDimension: recommendedDimension,
      onDimensionOptionsClick: onDimensionOptionsClick,
      onDimensionClick: onDimensionClick,
      onDimensionDragStart: onDimensionDragStart
    }));
  }

}

DimensionsPanel.propTypes = {
  dimensions: PropTypes.array.isRequired,
  disabledDimension: PropTypes.func,
  lockedDimension: PropTypes.func,
  recommendedDimension: PropTypes.func,
  selectedIds: PropTypes.array,
  style: PropTypes.object,
  onDimensionClick: PropTypes.func,
  onDimensionDragStart: PropTypes.func,
  onDimensionOptionsClick: PropTypes.func
};
DimensionsPanel.defaultProps = {
  selectedIds: [],
  style: {},
  onDimensionClick: Function.prototype
};
export default DimensionsPanel;