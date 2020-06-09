"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _InputLabel = _interopRequireDefault(require("@material-ui/core/InputLabel"));

var _styles = require("@material-ui/core/styles");

var styles = {
  inputLabel: {
    color: '#595959',
    whiteSpace: 'nowrap'
  }
};

var InputLabel = function InputLabel(_ref) {
  var classes = _ref.classes,
      label = _ref.label;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_InputLabel.default, {
    className: classes.inputLabel,
    htmlFor: "period-type"
  }, label));
};

InputLabel.propTypes = {
  label: _propTypes.default.string.isRequired,
  classes: _propTypes.default.object
};

var _default = (0, _styles.withStyles)(styles)(InputLabel);

exports.default = _default;