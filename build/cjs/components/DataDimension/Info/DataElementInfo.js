"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataElementInfo = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _appRuntime = require("@dhis2/app-runtime");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _index = _interopRequireDefault(require("../../../locales/index.js"));
var _InfoTable = require("./InfoTable.js");
var _InfoPopoverStyle = _interopRequireDefault(require("./styles/InfoPopover.style.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const dataElementQuery = {
  dataElement: {
    resource: 'dataElements',
    id: _ref => {
      let {
        id
      } = _ref;
      return id;
    },
    params: _ref2 => {
      let {
        displayNameProp
      } = _ref2;
      return {
        fields: `${(0, _InfoTable.getCommonFields)(displayNameProp)},aggregationType,categoryCombo[displayName,categories[id,displayName]],dataElementGroups[id,displayName],dataSetElements[id,displayName],legendSets[id,displayName],optionSet[displayName],valueType,zeroIsSignificant`
      };
    }
  }
};
const DataElementInfo = _ref3 => {
  let {
    id,
    displayNameProp
  } = _ref3;
  const {
    loading,
    error,
    data
  } = (0, _appRuntime.useDataQuery)(dataElementQuery, {
    variables: {
      id,
      displayNameProp
    }
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_InfoTable.InfoTable, {
    data: data === null || data === void 0 ? void 0 : data.dataElement,
    loading: loading,
    error: error
  }, /*#__PURE__*/_react.default.createElement("tr", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement("th", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, _index.default.t('Data set(s)')), /*#__PURE__*/_react.default.createElement("td", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, data.dataElement.dataSetElements.length === 1 ? data.dataElement.dataSetElements[0].displayName : /*#__PURE__*/_react.default.createElement("ul", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, data.dataElement.dataSetElements.map(_ref4 => {
    let {
      id,
      displayName
    } = _ref4;
    return /*#__PURE__*/_react.default.createElement("li", {
      key: id,
      className: `jsx-${_InfoPopoverStyle.default.__hash}`
    }, displayName);
  })))), /*#__PURE__*/_react.default.createElement("tr", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement("th", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, _index.default.t('Zero is significant')), /*#__PURE__*/_react.default.createElement("td", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, data !== null && data !== void 0 && data.dataElement.zeroIsSignificant ? _index.default.t('True') : _index.default.t('False'))), /*#__PURE__*/_react.default.createElement("tr", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement("th", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, _index.default.t('Value type')), /*#__PURE__*/_react.default.createElement("td", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, data === null || data === void 0 ? void 0 : data.dataElement.valueType)), /*#__PURE__*/_react.default.createElement("tr", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement("th", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, _index.default.t('Aggregation type')), /*#__PURE__*/_react.default.createElement("td", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, data === null || data === void 0 ? void 0 : data.dataElement.aggregationType)), /*#__PURE__*/_react.default.createElement("tr", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement("th", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, _index.default.t('Category combo')), /*#__PURE__*/_react.default.createElement("td", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement("details", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement("summary", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, data === null || data === void 0 ? void 0 : data.dataElement.categoryCombo.displayName), /*#__PURE__*/_react.default.createElement("ul", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, data === null || data === void 0 ? void 0 : data.dataElement.categoryCombo.categories.map(_ref5 => {
    let {
      id,
      displayName
    } = _ref5;
    return /*#__PURE__*/_react.default.createElement("li", {
      key: id,
      className: `jsx-${_InfoPopoverStyle.default.__hash}`
    }, displayName);
  }))))), (data === null || data === void 0 ? void 0 : data.dataElement.optionSet) && /*#__PURE__*/_react.default.createElement("tr", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement("td", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, _index.default.t('Option set')), /*#__PURE__*/_react.default.createElement("td", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, data.dataElement.optionSet.displayName)), /*#__PURE__*/_react.default.createElement("tr", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement("th", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, _index.default.t('Group membership')), /*#__PURE__*/_react.default.createElement("td", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, (data === null || data === void 0 ? void 0 : data.dataElement.dataElementGroups.length) === 1 ? data.dataElement.dataElementGroups[0].displayName : /*#__PURE__*/_react.default.createElement("ul", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, data === null || data === void 0 ? void 0 : data.dataElement.dataElementGroups.map(_ref6 => {
    let {
      id,
      displayName
    } = _ref6;
    return /*#__PURE__*/_react.default.createElement("li", {
      key: id,
      className: `jsx-${_InfoPopoverStyle.default.__hash}`
    }, displayName);
  })))), Boolean(data === null || data === void 0 ? void 0 : data.dataElement.legendSets.length) && /*#__PURE__*/_react.default.createElement("tr", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement("th", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, _index.default.t('Legend set(s)')), /*#__PURE__*/_react.default.createElement("td", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, data.dataElement.legendSets.length === 1 ? data.dataElement.legendSets[0].displayName : /*#__PURE__*/_react.default.createElement("ul", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, data.dataElement.legendSets.map(_ref7 => {
    let {
      id,
      displayName
    } = _ref7;
    return /*#__PURE__*/_react.default.createElement("li", {
      key: id,
      className: `jsx-${_InfoPopoverStyle.default.__hash}`
    }, displayName);
  }))))), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _InfoPopoverStyle.default.__hash
  }, _InfoPopoverStyle.default));
};
exports.DataElementInfo = DataElementInfo;
DataElementInfo.propTypes = {
  displayNameProp: _propTypes.default.string,
  id: _propTypes.default.string
};