"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageIconButton = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _ui = require("@dhis2/ui");
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const MessageIconButton = _ref => {
  let {
    tooltipContent,
    disabled,
    onClick,
    selected,
    count,
    iconComponent: Icon,
    dataTest,
    viewOnly
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_ui.Tooltip, {
    closeDelay: 200,
    content: tooltipContent
  }, _ref2 => {
    let {
      ref,
      onMouseOver,
      onMouseOut
    } = _ref2;
    return /*#__PURE__*/_react.default.createElement("span", {
      ref: ref,
      onMouseOver: onMouseOver,
      onMouseOut: onMouseOut,
      className: _style.default.dynamic([["163818318", [_ui.spacers.dp4, _ui.colors.grey700, _ui.colors.teal600, _ui.colors.grey900, _ui.colors.teal800, _ui.colors.teal500, _ui.colors.teal700, _ui.theme.disabled, _ui.theme.disabled]]]) + " " + "wrapper"
    }, /*#__PURE__*/_react.default.createElement("button", {
      onClick: event => {
        event.stopPropagation();
        onClick();
      },
      disabled: disabled,
      "data-test": dataTest,
      className: _style.default.dynamic([["163818318", [_ui.spacers.dp4, _ui.colors.grey700, _ui.colors.teal600, _ui.colors.grey900, _ui.colors.teal800, _ui.colors.teal500, _ui.colors.teal700, _ui.theme.disabled, _ui.theme.disabled]]]) + " " + ((0, _classnames.default)('button', {
        selected,
        viewOnly
      }) || "")
    }, count && count, /*#__PURE__*/_react.default.createElement(Icon, null)), /*#__PURE__*/_react.default.createElement(_style.default, {
      id: "163818318",
      dynamic: [_ui.spacers.dp4, _ui.colors.grey700, _ui.colors.teal600, _ui.colors.grey900, _ui.colors.teal800, _ui.colors.teal500, _ui.colors.teal700, _ui.theme.disabled, _ui.theme.disabled]
    }, [".wrapper.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}", `.button.__jsx-style-dynamic-selector{all:unset;cursor:pointer;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;gap:${_ui.spacers.dp4};-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:12px;line-height:14px;color:${_ui.colors.grey700};}`, ".viewOnly.__jsx-style-dynamic-selector{cursor:default;}", `.button.selected.__jsx-style-dynamic-selector{color:${_ui.colors.teal600};font-weight:500;}`, `.button.__jsx-style-dynamic-selector:hover{color:${_ui.colors.grey900};}`, `.button.selected.__jsx-style-dynamic-selector:hover{color:${_ui.colors.teal800};}`, `.button.selected.__jsx-style-dynamic-selector svg{color:${_ui.colors.teal500};}`, `.button.selected.__jsx-style-dynamic-selector:hover svg{color:${_ui.colors.teal700};}`, `.button.__jsx-style-dynamic-selector:disabled{color:${_ui.theme.disabled};cursor:not-allowed;}`, `.button.__jsx-style-dynamic-selector:disabled svg{color:${_ui.theme.disabled};}`]));
  });
};
exports.MessageIconButton = MessageIconButton;
MessageIconButton.propTypes = {
  iconComponent: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.func]).isRequired,
  tooltipContent: _propTypes.default.string.isRequired,
  count: _propTypes.default.number,
  dataTest: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  selected: _propTypes.default.bool,
  viewOnly: _propTypes.default.bool,
  onClick: _propTypes.default.func
};