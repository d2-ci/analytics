"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SourceEmptyPlaceholder = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _dataTypes = require("../../modules/dataTypes.js");
var _EmptyPlaceholderStyle = _interopRequireDefault(require("./styles/EmptyPlaceholder.style.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const SourceEmptyPlaceholder = _ref => {
  let {
    loading,
    searchTerm,
    options,
    allItemsSelectedMessage,
    noItemsMessage,
    dataType,
    dataTest
  } = _ref;
  let message = '';
  if (!loading && options.length && !searchTerm) {
    message = allItemsSelectedMessage || _d2I18n.default.t('All available items are already selected');
  } else if (!loading && !options.length && !searchTerm) {
    if (noItemsMessage) {
      message = noItemsMessage;
    } else {
      switch (dataType) {
        case _dataTypes.DIMENSION_TYPE_INDICATOR:
          message = _d2I18n.default.t('No indicators found');
          break;
        case _dataTypes.DIMENSION_TYPE_DATA_ELEMENT:
          message = _d2I18n.default.t('No data elements found');
          break;
        case _dataTypes.DIMENSION_TYPE_DATA_SET:
          message = _d2I18n.default.t('No data sets found');
          break;
        case _dataTypes.DIMENSION_TYPE_EVENT_DATA_ITEM:
          message = _d2I18n.default.t('No event data items found');
          break;
        case _dataTypes.DIMENSION_TYPE_PROGRAM_INDICATOR:
          message = _d2I18n.default.t('No program indicators found');
          break;
        case _dataTypes.DIMENSION_TYPE_EXPRESSION_DIMENSION_ITEM:
          message = _d2I18n.default.t('No calculations found');
          break;
        default:
          message = _d2I18n.default.t('No data');
          break;
      }
    }
  } else if (!loading && !options.length && searchTerm) {
    switch (dataType) {
      case _dataTypes.DIMENSION_TYPE_INDICATOR:
        message = _d2I18n.default.t('No indicators found for "{{- searchTerm}}"', {
          searchTerm
        });
        break;
      case _dataTypes.DIMENSION_TYPE_DATA_ELEMENT:
        message = _d2I18n.default.t('No data elements found for "{{- searchTerm}}"', {
          searchTerm
        });
        break;
      case _dataTypes.DIMENSION_TYPE_DATA_SET:
        message = _d2I18n.default.t('No data sets found for "{{- searchTerm}}"', {
          searchTerm
        });
        break;
      case _dataTypes.DIMENSION_TYPE_EVENT_DATA_ITEM:
        message = _d2I18n.default.t('No event data items found for "{{- searchTerm}}"', {
          searchTerm
        });
        break;
      case _dataTypes.DIMENSION_TYPE_PROGRAM_INDICATOR:
        message = _d2I18n.default.t('No program indicators found for "{{- searchTerm}}"', {
          searchTerm
        });
        break;
      case _dataTypes.DIMENSION_TYPE_EXPRESSION_DIMENSION_ITEM:
        message = _d2I18n.default.t('No calculations found for "{{- searchTerm}}"', {
          searchTerm
        });
        break;
      default:
        message = _d2I18n.default.t('Nothing found for "{{- searchTerm}}"', {
          searchTerm
        });
        break;
    }
  }
  return message && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("p", {
    "data-test": dataTest,
    className: `jsx-${_EmptyPlaceholderStyle.default.__hash}` + " " + "empty-list"
  }, message), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _EmptyPlaceholderStyle.default.__hash
  }, _EmptyPlaceholderStyle.default));
};
exports.SourceEmptyPlaceholder = SourceEmptyPlaceholder;
SourceEmptyPlaceholder.propTypes = {
  allItemsSelectedMessage: _propTypes.default.string,
  dataTest: _propTypes.default.string,
  dataType: _propTypes.default.string,
  loading: _propTypes.default.bool,
  noItemsMessage: _propTypes.default.string,
  options: _propTypes.default.array,
  searchTerm: _propTypes.default.string
};