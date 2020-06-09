"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Filter = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _InputAdornment = _interopRequireDefault(require("@material-ui/core/InputAdornment"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Search = _interopRequireDefault(require("@material-ui/icons/Search"));

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

var _styles = require("@material-ui/core/styles");

var _Filter = require("./styles/Filter.style");

var ref = null;

var onChangeWrapper = function onChangeWrapper(onChange, onClear, event) {
  event.target.value.length ? onChange(event.target.value) : onClear();
};

var onKeyDownWrapper = function onKeyDownWrapper(onClear, event, text) {
  if (event.key === 'Escape') {
    event.preventDefault();
    !text.length && ref ? ref.blur() : onClear();
  }
};

var Filter = function Filter(props) {
  return /*#__PURE__*/_react.default.createElement(_TextField.default, {
    autoFocus: props.autoFocus,
    style: props.style,
    className: props.classes.inputContainer,
    placeholder: props.placeholder,
    value: props.text,
    onChange: function onChange(e) {
      return onChangeWrapper(props.onChange, props.onClear, e);
    },
    onKeyDown: function onKeyDown(e) {
      return onKeyDownWrapper(props.onClear, e, props.text);
    },
    inputRef: function inputRef(node) {
      return ref = node;
    },
    InputProps: {
      disableUnderline: props.disableUnderline,
      style: _Filter.styles.placeholder,
      startAdornment: /*#__PURE__*/_react.default.createElement(_InputAdornment.default, null, /*#__PURE__*/_react.default.createElement(_Search.default, {
        style: _Filter.styles.searchIcon
      })),
      endAdornment: props.text.length ? /*#__PURE__*/_react.default.createElement(_InputAdornment.default, null, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
        style: _Filter.styles.iconButton,
        onClick: props.onClear,
        disableRipple: true
      }, /*#__PURE__*/_react.default.createElement(_Close.default, {
        style: _Filter.styles.closeIcon
      }))) : null
    }
  });
};

exports.Filter = Filter;
Filter.defaultProps = {
  style: {},
  autoFocus: false,
  disableUnderline: false
};
Filter.propTypes = {
  placeholder: _propTypes.default.string.isRequired,
  text: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func.isRequired,
  onClear: _propTypes.default.func.isRequired,
  autoFocus: _propTypes.default.bool,
  classes: _propTypes.default.object,
  disableUnderline: _propTypes.default.bool,
  style: _propTypes.default.object
};

var _default = (0, _styles.withStyles)(_Filter.styles)(Filter);

exports.default = _default;