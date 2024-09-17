"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderSingleValueSVG = renderSingleValueSVG;
var _addIconElement = require("./addIconElement.js");
var _checkIfFitsWithinContainer = require("./checkIfFitsWithinContainer.js");
var _getAvailableSpace = require("./getAvailableSpace.js");
var _positionElements = require("./positionElements.js");
var _styles = require("./styles.js");
function renderSingleValueSVG() {
  const color = this.title.styles.color;
  const {
    dashboard,
    formattedValue,
    icon,
    subText
  } = this.userOptions.customSVGOptions;
  const dynamicStyles = new _styles.DynamicStyles();
  const valueElement = this.renderer.text(formattedValue).css({
    color,
    visibility: 'visible'
  }).add();
  const subTextElement = subText ? this.renderer.text(subText).css({
    color,
    visibility: 'visible'
  }).add() : null;
  const iconElement = icon ? _addIconElement.addIconElement.call(this, icon) : null;
  let fitsWithinContainer = false;
  let styles = {};
  while (!fitsWithinContainer && dynamicStyles.hasNext()) {
    styles = dynamicStyles.next();
    valueElement.css(styles.value);
    subTextElement === null || subTextElement === void 0 ? void 0 : subTextElement.css(styles.subText);
    fitsWithinContainer = (0, _checkIfFitsWithinContainer.checkIfFitsWithinContainer)(_getAvailableSpace.getAvailableSpace.call(this, styles.spacing.valueTop), valueElement, subTextElement, icon, subText, styles.spacing);
  }
  _positionElements.positionElements.call(this, valueElement, subTextElement, iconElement, styles.spacing);
  console.log('+++++Render the SVG++++++', '\ncolor: ', color, '\ndashboard: ', dashboard, '\nformattedValue: ', formattedValue, '\nicon: ', icon, '\nsubText: ', subText, '\n=============');
  console.log('CHART', this);
}