"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _visTypes = require("../../../../modules/visTypes.js");

var _singleValue = _interopRequireDefault(require("./singleValue.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(config, parentEl, extraOptions) {
  if (config) {
    const node = typeof parentEl === 'object' ? parentEl : typeof parentEl === 'string' ? document.querySelector(parentEl) : null;

    if (node) {
      if (node.lastChild) {
        node.removeChild(node.lastChild);
      }

      let content;

      switch (config.type) {
        case _visTypes.VIS_TYPE_SINGLE_VALUE:
        default:
          content = (0, _singleValue.default)(config, node, extraOptions);
          break;
      }

      node.appendChild(content);
      return node.innerHTML;
    }
  }
}