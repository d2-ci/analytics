"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _ui = require("@dhis2/ui");

const styles = {
  divContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: _ui.colors.grey050,
    padding: '8px',
    overflow: 'hidden'
  },
  textField: {
    marginBottom: '6px',
    background: _ui.colors.white,
    border: "1px solid ".concat(_ui.colors.grey400),
    borderRadius: '5px'
  }
};
exports.styles = styles;