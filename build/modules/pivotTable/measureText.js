"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.measureText = void 0;
var canvas;

var getContext = function getContext(fontSize) {
  if (!canvas) {
    canvas = document.createElement('canvas');
  }

  var ctx = canvas.getContext('2d');
  ctx.font = "".concat(fontSize, "px Roboto, Arial, sans-serif");
  return ctx;
};

var measureText = function measureText(text) {
  var fontSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 11;
  var ctx = getContext(fontSize);
  var textMetrics = ctx.measureText(text);
  return textMetrics.width;
};

exports.measureText = measureText;