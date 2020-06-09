"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
var svgNS = 'http://www.w3.org/2000/svg';

var generateValueSVG = function generateValueSVG(value, y) {
  var textSize = 300;
  var svgValue = document.createElementNS(svgNS, 'svg');
  svgValue.setAttribute('xmlns', svgNS);
  svgValue.setAttribute('viewBox', "0 -".concat(textSize + 50, " ").concat(textSize * 0.75 * value.length, " ").concat(textSize + 200));

  if (y) {
    svgValue.setAttribute('y', y);
  }

  var text = document.createElementNS(svgNS, 'text');
  text.setAttribute('text-anchor', 'middle');
  text.setAttribute('font-size', textSize);
  text.setAttribute('font-weight', '300');
  text.setAttribute('letter-spacing', '-5');
  text.setAttribute('x', '50%');
  text.appendChild(document.createTextNode(value));
  svgValue.appendChild(text);
  return svgValue;
};

var generateDashboardItem = function generateDashboardItem(config) {
  var container = document.createElement('div');
  container.setAttribute('style', 'display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; height: 100%');
  var titleStyle = 'font-size: 12px; color: #666;';
  var title = document.createElement('span');
  title.setAttribute('style', titleStyle);

  if (config.title) {
    title.appendChild(document.createTextNode(config.title));
    container.appendChild(title);
  }

  var subtitle = document.createElement('span');
  subtitle.setAttribute('style', titleStyle + ' margin-top: 4px');

  if (config.subtitle) {
    subtitle.appendChild(document.createTextNode(config.subtitle));
    container.appendChild(subtitle);
  }

  container.appendChild(generateValueSVG(config.value));
  return container;
};

var generateDVItem = function generateDVItem(config, parentEl) {
  var parentElBBox = parentEl.getBoundingClientRect();
  var width = parentElBBox.width;
  var height = parentElBBox.height;
  var svgNS = 'http://www.w3.org/2000/svg';
  var svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('xmlns', svgNS);
  svg.setAttribute('viewBox', "0 0 ".concat(width, " ").concat(height));
  svg.setAttribute('width', '100%');
  svg.setAttribute('height', '100%');
  var title = document.createElementNS(svgNS, 'text');
  title.setAttribute('x', '50%');
  title.setAttribute('y', 28);
  title.setAttribute('text-anchor', 'middle');
  title.setAttribute('font-size', '18px');
  title.setAttribute('fill', '#111');

  if (config.title) {
    title.appendChild(document.createTextNode(config.title));
    svg.appendChild(title);
  }

  var subtitle = document.createElementNS(svgNS, 'text');
  subtitle.setAttribute('x', '50%');
  subtitle.setAttribute('y', 28);
  subtitle.setAttribute('dy', 22);
  subtitle.setAttribute('text-anchor', 'middle');
  subtitle.setAttribute('font-size', '14px');
  subtitle.setAttribute('fill', '#111');

  if (config.subtitle) {
    subtitle.appendChild(document.createTextNode(config.subtitle));
    svg.appendChild(subtitle);
  }

  svg.appendChild(generateValueSVG(config.value, 20));
  return svg;
};

function _default(config, parentEl, _ref) {
  var dashboard = _ref.dashboard;
  parentEl.style.overflow = 'hidden';
  parentEl.style.display = 'flex';
  parentEl.style.justifyContent = 'center';
  return dashboard ? generateDashboardItem(config) : generateDVItem(config, parentEl);
}