import _JSXStyle from "styled-jsx/style";
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { SingleSelectField, SingleSelectOption } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import i18n from '../../locales/index.js';
import FixedPeriodFilter from './FixedPeriodFilter.js';
import styles from './styles/FixedPeriodSelect.style.js';
import { parsePeriodCode, getFixedPeriodsOptionsById as getPeriodById, getYearOffsetFromNow } from './utils/fixedPeriods.js';
class FixedPeriodSelect extends Component {
  constructor() {
    super(...arguments);
    _defineProperty(this, "state", {
      periodType: '',
      year: '',
      options: null
    });
    _defineProperty(this, "onSelectPeriodType", periodType => {
      this.setState({
        periodType,
        options: this.getUpdatedOptions(periodType, this.state.year)
      });
      this.props.onChange();
    });
    _defineProperty(this, "onSelectYear", year => {
      this.setState({
        year,
        options: this.getUpdatedOptions(this.state.periodType, year)
      });
      this.props.onChange();
    });
    _defineProperty(this, "onSelectPeriod", (_ref, event) => {
      let {
        selected: periodId
      } = _ref;
      const period = this.state.options.find(_ref2 => {
        let {
          id
        } = _ref2;
        return id === periodId;
      });
      this.props.onChange(period, event);
    });
  }
  static getDerivedStateFromProps(_ref3) {
    let {
      value,
      allowedPeriodTypes
    } = _ref3;
    const period = parsePeriodCode(value, allowedPeriodTypes);
    if (!period) {
      return null;
    }
    return {
      periodType: period.id,
      year: period.year,
      options: period.options
    };
  }
  getUpdatedOptions(periodType, year) {
    const offset = getYearOffsetFromNow(year);
    return getPeriodById(periodType).getPeriods({
      offset
    });
  }
  render() {
    return /*#__PURE__*/React.createElement("div", {
      "data-test": this.props.dataTest,
      className: `jsx-${styles.__hash}` + " " + (this.props.className || "")
    }, /*#__PURE__*/React.createElement("div", {
      className: `jsx-${styles.__hash}` + " " + "row"
    }, /*#__PURE__*/React.createElement(FixedPeriodFilter, {
      allowedPeriodTypes: this.props.allowedPeriodTypes,
      currentPeriodType: this.state.periodType,
      currentYear: this.state.year,
      onSelectPeriodType: this.onSelectPeriodType,
      onSelectYear: this.onSelectYear
    })), this.state.periodType && this.state.year && /*#__PURE__*/React.createElement(SingleSelectField, {
      label: i18n.t('Period'),
      onChange: this.onSelectPeriod,
      dense: true,
      selected: this.props.value
    }, this.state.options.map(option => /*#__PURE__*/React.createElement(SingleSelectOption, {
      key: option.id,
      value: option.id,
      label: option.name
    }))), /*#__PURE__*/React.createElement(_JSXStyle, {
      id: styles.__hash
    }, styles));
  }
}
FixedPeriodSelect.defaultProps = {
  dataTest: 'dhis2-analytics-fixedperiodselect',
  value: ''
};
FixedPeriodSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
  allowedPeriodTypes: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
  dataTest: PropTypes.string,
  value: PropTypes.string
};
export default FixedPeriodSelect;