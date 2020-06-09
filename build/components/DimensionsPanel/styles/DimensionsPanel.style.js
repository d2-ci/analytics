"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _colors = require("../../../modules/colors");

var styles = {
  divContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: _colors.colors.snow,
    padding: '8px',
    overflow: 'hidden'
  },
  textField: {
    marginBottom: '6px',
    background: '#fff',
    border: "1px solid ".concat(_colors.colors.grey400),
    borderRadius: '5px'
  }
};
exports.styles = styles;