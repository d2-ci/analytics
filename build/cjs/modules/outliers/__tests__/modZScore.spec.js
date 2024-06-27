"use strict";

var _modZScore = require("../modZScore.js");

const a4 = [1, 2, 3, 10];
const a5 = [1, 2, 3, 10, 20];
describe('Helper functions', () => {
  test('getMean', () => {
    expect((0, _modZScore.getMean)(a4)).toBe(4);
    expect((0, _modZScore.getMean)(a5)).toBe(7.2);
  });
  test('getMedian', () => {
    expect((0, _modZScore.getMedian)(a4)).toBe(2.5);
    expect((0, _modZScore.getMedian)(a5)).toBe(3);
  });
  test('getMedianAbsoluteDeviation', () => {
    expect((0, _modZScore.getMedianAbsoluteDeviation)(a4)).toBe(1);
    expect((0, _modZScore.getMedianAbsoluteDeviation)(a5)).toBe(2);
  });
  test('getMeanAbsoluteDeviation', () => {
    expect((0, _modZScore.getMeanAbsoluteDeviation)(a4)).toBe(3);
    expect((0, _modZScore.getMeanAbsoluteDeviation)(a5)).toBe(6.24);
  });
});