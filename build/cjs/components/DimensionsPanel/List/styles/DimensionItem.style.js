"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _ui = require("@dhis2/ui");

const styles = {
  labelWrapper: {
    padding: '2px 5px 2px 0'
  },
  text: {
    color: _ui.colors.grey900,
    userSelect: 'none',
    wordBreak: 'break-word',
    fontSize: '14px'
  },
  textDeactivated: {
    cursor: 'auto',
    color: _ui.colors.grey500
  },
  item: {
    display: 'flex',
    minHeight: '24px',
    marginTop: 3,
    marginBottom: 3,
    alignItems: 'center',
    borderRadius: '2px'
  },
  clickable: {
    cursor: 'pointer'
  },
  selected: {
    backgroundColor: _ui.theme.secondary100,
    fontWeight: 500
  },
  fixedDimensionIcon: {
    paddingLeft: '6px',
    paddingBottom: '2px'
  },
  dynamicDimensionIcon: {
    paddingLeft: '9px',
    paddingRight: '9px'
  },
  iconWrapper: {
    display: 'flex',
    flexDirection: 'column',
    padding: '3px 8px 0 8px'
  },
  optionsWrapper: {
    position: 'relative',
    left: '5px',
    width: '20px',
    height: '20px'
  },
  optionsButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '20px',
    width: '20px',
    padding: 0,
    border: 'none',
    background: 'none',
    outline: 'none',
    cursor: 'pointer'
  },
  label: {
    display: 'flex',
    outline: 'none'
  }
};
exports.styles = styles;