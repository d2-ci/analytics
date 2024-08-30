"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Message = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _appRuntime = require("@dhis2/app-runtime");

var _d2UiRichText = require("@dhis2/d2-ui-rich-text");

var _ui = require("@dhis2/ui");

var _moment = _interopRequireDefault(require("moment"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Message = _ref => {
  let {
    children,
    text,
    created,
    username
  } = _ref;
  const {
    fromServerDate
  } = (0, _appRuntime.useTimeZoneConversion)();
  return /*#__PURE__*/_react.default.createElement("li", {
    className: _style.default.dynamic([["4031345705", [_ui.spacers.dp8, _ui.colors.grey100, _ui.spacers.dp8, _ui.colors.grey900, _ui.colors.grey600, _ui.colors.grey900, _ui.spacers.dp8]]]) + " " + "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _style.default.dynamic([["4031345705", [_ui.spacers.dp8, _ui.colors.grey100, _ui.spacers.dp8, _ui.colors.grey900, _ui.colors.grey600, _ui.colors.grey900, _ui.spacers.dp8]]]) + " " + "header"
  }, /*#__PURE__*/_react.default.createElement(_ui.UserAvatar, {
    name: username,
    extrasmall: true
  }), username, /*#__PURE__*/_react.default.createElement("time", {
    dateTime: created,
    className: _style.default.dynamic([["4031345705", [_ui.spacers.dp8, _ui.colors.grey100, _ui.spacers.dp8, _ui.colors.grey900, _ui.colors.grey600, _ui.colors.grey900, _ui.spacers.dp8]]])
  }, (0, _moment.default)(fromServerDate(created)).format('lll'))), /*#__PURE__*/_react.default.createElement("div", {
    className: _style.default.dynamic([["4031345705", [_ui.spacers.dp8, _ui.colors.grey100, _ui.spacers.dp8, _ui.colors.grey900, _ui.colors.grey600, _ui.colors.grey900, _ui.spacers.dp8]]]) + " " + "content"
  }, /*#__PURE__*/_react.default.createElement(_d2UiRichText.Parser, null, text)), /*#__PURE__*/_react.default.createElement("div", {
    className: _style.default.dynamic([["4031345705", [_ui.spacers.dp8, _ui.colors.grey100, _ui.spacers.dp8, _ui.colors.grey900, _ui.colors.grey600, _ui.colors.grey900, _ui.spacers.dp8]]]) + " " + "footer"
  }, children), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: "4031345705",
    dynamic: [_ui.spacers.dp8, _ui.colors.grey100, _ui.spacers.dp8, _ui.colors.grey900, _ui.colors.grey600, _ui.colors.grey900, _ui.spacers.dp8]
  }, [".container.__jsx-style-dynamic-selector{padding:".concat(_ui.spacers.dp8, ";background-color:").concat(_ui.colors.grey100, ";border-radius:5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:").concat(_ui.spacers.dp8, ";}"), ".header.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;gap:6px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:13px;line-height:16px;color:".concat(_ui.colors.grey900, ";}"), ".header.__jsx-style-dynamic-selector time.__jsx-style-dynamic-selector{font-size:12px;color:".concat(_ui.colors.grey600, ";}"), ".content.__jsx-style-dynamic-selector{font-size:14px;line-height:19px;color:".concat(_ui.colors.grey900, ";word-break:break-word;white-space:pre-line;}"), ".content.__jsx-style-dynamic-selector p:first-child{margin:0;}", ".footer.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;gap:".concat(_ui.spacers.dp8, ";}")]));
};

exports.Message = Message;
Message.propTypes = {
  children: _propTypes.default.node.isRequired,
  created: _propTypes.default.string.isRequired,
  text: _propTypes.default.string.isRequired,
  username: _propTypes.default.string.isRequired
};