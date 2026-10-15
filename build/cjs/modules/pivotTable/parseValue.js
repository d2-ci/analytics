"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseValue = void 0;
const parseValue = valueString => {
  const parsedValue = parseFloat(valueString);
  if (isNaN(parsedValue)) {
    return valueString;
  }
  return parsedValue;
};
exports.parseValue = parseValue;