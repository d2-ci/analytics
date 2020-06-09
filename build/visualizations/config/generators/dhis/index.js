"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _type = require("../../adapters/dhis_dhis/type");

var _singleValue = _interopRequireDefault(require("./singleValue"));

function _default(config, parentEl, extraOptions) {
  if (config) {
    var node = (0, _typeof2.default)(parentEl) === 'object' ? parentEl : typeof parentEl === 'string' ? document.querySelector(parentEl) : null;

    if (node) {
      if (node.lastChild) {
        node.removeChild(node.lastChild);
      }

      var content;

      switch (config.type) {
        case _type.VISUALIZATION_TYPE_SINGLE_VALUE:
          content = (0, _singleValue.default)(config, node, extraOptions);
          break;

        default:
          content = (0, _singleValue.default)(config, node, extraOptions);
      }

      node.appendChild(content);
      return node.innerHTML;
    }
  }
}