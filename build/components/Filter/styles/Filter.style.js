"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _colors = require("../../../modules/colors");

var styles = {
  inputContainer: {
    '& input': {
      padding: '7px 0 6px'
    }
  },
  searchIcon: {
    color: _colors.colors.grey,
    padding: '3px 4px'
  },
  placeholder: {
    fontSize: '14px'
  },
  iconButton: {
    padding: '0px',
    height: '20px',
    width: '20px',
    marginRight: '3px'
  },
  closeIcon: {
    height: '16px',
    width: '16px'
  }
};
exports.styles = styles;