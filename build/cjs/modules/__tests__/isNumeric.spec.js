"use strict";

var _utils = require("../utils.js");
describe('isNumeric', () => {
  it('should return true for a number string', () => {
    expect((0, _utils.isNumeric)('01')).toBe(true);
  });
  it('should return true for a regular number', () => {
    expect((0, _utils.isNumeric)(10)).toBe(true);
  });
  it('should not regard infinity as a numeric', () => {
    expect((0, _utils.isNumeric)(Infinity)).toBe(false);
    expect((0, _utils.isNumeric)(-Infinity)).toBe(false);
  });
  it('should return false for NaN', () => {
    expect((0, _utils.isNumeric)(NaN)).toBe(false);
  });
  it('should return false for things other than numbers', () => {
    expect((0, _utils.isNumeric)(null)).toBe(false);
    expect((0, _utils.isNumeric)([1, 2, 3])).toBe(false);
    expect((0, _utils.isNumeric)(true)).toBe(false);
    expect((0, _utils.isNumeric)(new Date())).toBe(false);
    expect((0, _utils.isNumeric)(new Error())).toBe(false);
    expect((0, _utils.isNumeric)(undefined)).toBe(false);
    expect((0, _utils.isNumeric)(() => {})).toBe(false);
    expect((0, _utils.isNumeric)({
      a: 1
    })).toBe(false);
    expect((0, _utils.isNumeric)(/x/)).toBe(false);
    expect((0, _utils.isNumeric)('a')).toBe(false);
    expect((0, _utils.isNumeric)(Symbol())).toBe(false);
  });
});