"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OptionInfo = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _appRuntime = require("@dhis2/app-runtime");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _InfoTable = require("./InfoTable.js");
var _InfoPopoverStyle = _interopRequireDefault(require("./styles/InfoPopover.style.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const optionQuery = {
  option: {
    resource: 'options',
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
        fields: (0, _InfoTable.getCommonFields)(displayNameProp)
      };
    }
  }
};
const OptionInfo = _ref3 => {
  let {
    type,
    id,
    displayNameProp
  } = _ref3;
  const {
    loading,
    error,
    data
  } = (0, _appRuntime.useDataQuery)(optionQuery, {
    variables: {
      id: id.split('.').reverse()[0],
      displayNameProp
    }
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_InfoTable.InfoTable, {
    dataType: type,
    data: data === null || data === void 0 ? void 0 : data.option,
    loading: loading,
    error: error
  }), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _InfoPopoverStyle.default.__hash
  }, _InfoPopoverStyle.default));
};
exports.OptionInfo = OptionInfo;
OptionInfo.propTypes = {
  displayNameProp: _propTypes.default.string,
  id: _propTypes.default.string,
  type: _propTypes.default.string
};