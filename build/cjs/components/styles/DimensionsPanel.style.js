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
    padding: '8px 0 2px 8px'
  },
  textField: {
    paddingBottom: '12px',
    width: 'calc(100% - 8px)'
  }
};
exports.styles = styles;