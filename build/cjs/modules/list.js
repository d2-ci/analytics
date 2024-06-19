"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatList = void 0;

var _index = _interopRequireDefault(require("../locales/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const formatList = items => {
  // Wrap Intl.ListFormat in try/catch as DHIS2 locales are not always ISO 639 compliant
  try {
    const formatter = new Intl.ListFormat(_index.default.language, {
      style: 'long',
      type: 'conjunction'
    });
    return formatter.format(items);
  } catch (error) {
    return items.join(', ');
  }
};

exports.formatList = formatList;