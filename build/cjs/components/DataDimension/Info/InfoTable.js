"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCommonFields = exports.capitalizeWord = exports.InfoTable = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _appRuntime = require("@dhis2/app-runtime");
var _ui = require("@dhis2/ui");
var _moment = _interopRequireDefault(require("moment"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _index = _interopRequireDefault(require("../../../locales/index.js"));
var _InfoPopoverStyle = _interopRequireDefault(require("./styles/InfoPopover.style.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const getCommonFields = displayNameProp => `attributeValues[id,displayName],code,created,createdBy,${displayNameProp}~rename(displayName),displayDescription,href,id,lastUpdated`;
exports.getCommonFields = getCommonFields;
const capitalizeWord = word => word && word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
exports.capitalizeWord = capitalizeWord;
const InfoTable = _ref => {
  let {
    data,
    error,
    loading,
    children
  } = _ref;
  const {
    fromServerDate
  } = (0, _appRuntime.useTimeZoneConversion)();
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, loading && /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}` + " " + "loader"
  }, /*#__PURE__*/_react.default.createElement(_ui.Center, null, /*#__PURE__*/_react.default.createElement(_ui.CircularLoader, {
    small: true
  }))), error && 'some error occured', data && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("table", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}` + " " + "data-table"
  }, /*#__PURE__*/_react.default.createElement("tbody", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement("tr", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement("th", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, _index.default.t('Name')), /*#__PURE__*/_react.default.createElement("td", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, data.displayName)), children, /*#__PURE__*/_react.default.createElement("tr", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement("th", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, _index.default.t('Description')), /*#__PURE__*/_react.default.createElement("td", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, data.displayDescription ? /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}` + " " + "content-wrap"
  }, data.displayDescription) : /*#__PURE__*/_react.default.createElement("span", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}` + " " + "none"
  }, _index.default.t('None')))), /*#__PURE__*/_react.default.createElement("tr", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement("th", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, _index.default.t('Code')), /*#__PURE__*/_react.default.createElement("td", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, data.code ? data.code : /*#__PURE__*/_react.default.createElement("span", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}` + " " + "none"
  }, _index.default.t('None')))), /*#__PURE__*/_react.default.createElement("tr", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement("th", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, _index.default.t('ID')), /*#__PURE__*/_react.default.createElement("td", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}` + " " + "code"
  }, data.id))), /*#__PURE__*/_react.default.createElement("tr", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement("th", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, _index.default.t('Last updated date')), /*#__PURE__*/_react.default.createElement("td", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, `${(0, _moment.default)(fromServerDate(data.lastUpdated)).fromNow()} (${(0, _moment.default)(fromServerDate(data.lastUpdated)).format('YYYY-MM-DD')})`)), /*#__PURE__*/_react.default.createElement("tr", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement("th", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, _index.default.t('Created date')), /*#__PURE__*/_react.default.createElement("td", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, `${(0, _moment.default)(fromServerDate(data.created)).fromNow()} (${(0, _moment.default)(fromServerDate(data.created)).format('YYYY-MM-DD')})`)), /*#__PURE__*/_react.default.createElement("tr", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement("th", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, _index.default.t('Created by')), /*#__PURE__*/_react.default.createElement("td", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, `${data.createdBy.displayName}, ${data.createdBy.username}`)), /*#__PURE__*/_react.default.createElement("tr", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement("th", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, _index.default.t('API link')), /*#__PURE__*/_react.default.createElement("td", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: data.href,
    target: "_blank",
    rel: "noreferrer",
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, _index.default.t('Open in API')))), Boolean(data.attributeValues.length) && /*#__PURE__*/_react.default.createElement("tr", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement("th", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, _index.default.t('Custom attributes')), /*#__PURE__*/_react.default.createElement("td", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: `jsx-${_InfoPopoverStyle.default.__hash}`
  }, data.attributeValues.map(_ref2 => {
    let {
      id,
      displayName
    } = _ref2;
    return /*#__PURE__*/_react.default.createElement("li", {
      key: id,
      className: `jsx-${_InfoPopoverStyle.default.__hash}`
    }, displayName);
  }))))))), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _InfoPopoverStyle.default.__hash
  }, _InfoPopoverStyle.default));
};
exports.InfoTable = InfoTable;
InfoTable.propTypes = {
  children: _propTypes.default.node,
  data: _propTypes.default.object,
  error: _propTypes.default.string,
  loading: _propTypes.default.bool
};