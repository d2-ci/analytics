"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventDataItemInfo = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _appRuntime = require("@dhis2/app-runtime");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _index = _interopRequireDefault(require("../../../locales/index.js"));
var _dataTypes = require("../../../modules/dataTypes.js");
var _valueTypes = require("../../../modules/valueTypes.js");
var _InfoTable = require("./InfoTable.js");
var _InfoPopoverStyle = _interopRequireDefault(require("./styles/InfoPopover.style.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const programDataElementQuery = {
  programDataElement: {
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
        fields: `${(0, _InfoTable.getCommonFields)(displayNameProp)},aggregationType,dimensionItemType,legendSets[id,displayName],optionsSet[displayName],valueType,zeroIsSignificant`
      };
    }
  }
};
const programAttributeQuery = {
  programAttribute: {
    resource: 'trackedEntityAttributes',
    id: _ref3 => {
      let {
        id
      } = _ref3;
      return id;
    },
    params: _ref4 => {
      let {
        displayNameProp
      } = _ref4;
      return {
        fields: `${(0, _InfoTable.getCommonFields)(displayNameProp)},aggregationType,dimensionItemType,legendSets[id,displayName],optionsSet[displayName],valueType,zeroIsSignificant`
      };
    }
  }
};
const EventDataItemInfo = _ref5 => {
  let {
    type,
    id,
    displayNameProp
  } = _ref5;
  const {
    loading,
    error,
    data
  } = (0, _appRuntime.useDataQuery)(type === _dataTypes.DIMENSION_TYPE_PROGRAM_DATA_ELEMENT ? programDataElementQuery : programAttributeQuery, {
    // strip program id (if present)
    variables: {
      id: id.split('.').reverse()[0],
      displayNameProp
    }
  });
  const renderInfoTable = data => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_InfoTable.InfoTable, {
    type: type,
    data: data,
    loading: loading,
    error: error
  }, /*#__PURE__*/_react.default.createElement("tr", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement("th", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, _index.default.t('Type')), /*#__PURE__*/_react.default.createElement("td", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, type === _dataTypes.DIMENSION_TYPE_PROGRAM_DATA_ELEMENT ? _index.default.t('Data element') : _index.default.t('Tracked entity attribute'))), /*#__PURE__*/_react.default.createElement("tr", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement("th", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, _index.default.t('Value type')), /*#__PURE__*/_react.default.createElement("td", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, _valueTypes.valueTypeDisplayNames[data === null || data === void 0 ? void 0 : data.valueType])), (data === null || data === void 0 ? void 0 : data.optionSet) && /*#__PURE__*/_react.default.createElement("tr", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement("td", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, _index.default.t('Option set')), /*#__PURE__*/_react.default.createElement("td", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, data.optionSet.displayName)), Boolean(data === null || data === void 0 ? void 0 : data.legendSets.length) && /*#__PURE__*/_react.default.createElement("tr", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement("th", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, _index.default.t('Legend set(s)')), /*#__PURE__*/_react.default.createElement("td", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, (0, _InfoTable.renderLegendSets)(data.legendSets)))), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _InfoPopoverStyle.default.__hash
  }, _InfoPopoverStyle.default));
  return type === _dataTypes.DIMENSION_TYPE_PROGRAM_DATA_ELEMENT ? renderInfoTable(data === null || data === void 0 ? void 0 : data.programDataElement) : renderInfoTable(data === null || data === void 0 ? void 0 : data.programAttribute);
};
exports.EventDataItemInfo = EventDataItemInfo;
EventDataItemInfo.propTypes = {
  displayNameProp: _propTypes.default.string,
  id: _propTypes.default.string,
  type: _propTypes.default.string
};