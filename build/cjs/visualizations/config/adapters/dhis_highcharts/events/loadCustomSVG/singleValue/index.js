"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loadSingleValueSVG;
var _addIconElement = require("./addIconElement.js");
var _checkIfFitsWithinContainer = require("./checkIfFitsWithinContainer.js");
var _getAvailableSpace = require("./getAvailableSpace.js");
var _positionElements = require("./positionElements.js");
var _styles = require("./styles.js");
function loadSingleValueSVG() {
  var _this$userOptions;
  const {
    formattedValue,
    icon,
    subText,
    fontColor
  } = this.userOptions.customSVGOptions;
  const dynamicStyles = new _styles.DynamicStyles((_this$userOptions = this.userOptions) === null || _this$userOptions === void 0 ? void 0 : _this$userOptions.isPdfExport);
  const valueElement = this.renderer.text(formattedValue).attr('data-test', 'visualization-primary-value').css({
    color: fontColor,
    visibility: 'hidden'
  }).add();
  const subTextElement = subText ? this.renderer.text(subText).attr('data-test', 'visualization-subtext').css({
    color: fontColor,
    visibility: 'hidden'
  }).add() : null;
  const iconElement = icon ? _addIconElement.addIconElement.call(this, icon, fontColor) : null;
  let fitsWithinContainer = false;
  let styles = {};
  while (!fitsWithinContainer && dynamicStyles.hasNext()) {
    styles = dynamicStyles.next();
    valueElement.css(styles.value);
    subTextElement === null || subTextElement === void 0 ? void 0 : subTextElement.css(styles.subText);
    fitsWithinContainer = (0, _checkIfFitsWithinContainer.checkIfFitsWithinContainer)(_getAvailableSpace.getAvailableSpace.call(this, styles.spacing.valueTop), valueElement, subTextElement, icon, subText, styles.spacing);
  }
  _positionElements.positionElements.call(this, valueElement, subTextElement, iconElement, styles.spacing);
  valueElement.css({
    visibility: 'visible'
  });
  iconElement === null || iconElement === void 0 ? void 0 : iconElement.css({
    visibility: 'visible'
  });
  subTextElement === null || subTextElement === void 0 ? void 0 : subTextElement.css({
    visibility: 'visible'
  });
}