"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseValue = void 0;

var parseValue = function parseValue(valueString) {
  var parsedValue = parseFloat(valueString);

  if (isNaN(parsedValue)) {
    return valueString;
  }

  return parsedValue;
};

exports.parseValue = parseValue;