"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEvents = void 0;
var _index = _interopRequireDefault(require("./loadCustomSVG/index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const getEvents = visType => ({
  events: {
    load: function () {
      // Align legend icon with legend text
      this.legend.allItems.forEach(item => {
        if (item.legendSymbol) {
          item.legendSymbol.attr({
            translateY: -(item.legendItem.label.getBBox().height * 0.75 / 4) + item.legendSymbol.r / 2
          });
        }
      });
      _index.default.call(this, visType);
    }
  }
});
exports.getEvents = getEvents;