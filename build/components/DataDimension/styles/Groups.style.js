"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _colors = require("../../../modules/colors");

var styles = {
  container: {
    border: "1px solid ".concat(_colors.colors.greyLight),
    display: 'flex',
    minHeight: '53px',
    borderRight: '0px',
    borderLeft: '0px',
    paddingTop: '5px',
    paddingLeft: '5px'
  },
  groupContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: 'inherit',
    minWidth: '316px',
    flexGrow: 1,
    paddingRight: '5px'
  },
  titleText: {
    color: _colors.colors.greyDark,
    fontSize: '13px',
    fontWeight: '300',
    paddingBottom: '10px'
  },
  dropDown: {
    padding: '0px'
  },
  placeholder: {
    padding: '0px',
    fontWeight: '300'
  }
};
exports.styles = styles;