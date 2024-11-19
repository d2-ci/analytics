"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEvents = void 0;
var _index = _interopRequireDefault(require("./loadCustomSVG/index.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const getEvents = visType => ({
  events: {
    load: function () {
      console.log('THIS HAPPENS AFTER THE CHART IS CREATED');
      console.log('on load the yAxis does have a max: ', this.yAxis[0].max);
      // Align legend icon with legend text
      this.legend.allItems.forEach(item => {
        if (item.legendSymbol) {
          item.legendSymbol.attr({
            translateY: -(item.legendItem.label.getBBox().height * 0.75 / 4) + item.legendSymbol.r / 2
          });
        }
      });
      _index.default.call(this, visType);
    },
    render: function () {
      console.log('on render the yAxis does have a max: ', this.yAxis[0].max);
    }
  }
});
exports.getEvents = getEvents;