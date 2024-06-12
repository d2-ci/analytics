"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
exports.formatDataLabel = void 0;
var _renderValue = require("../../../../../modules/renderValue.js");
const formatDataLabel = function () {
  let name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  let y = arguments.length > 1 ? arguments[1] : undefined;
  let percentage = arguments.length > 2 ? arguments[2] : undefined;
  const value = (0, _renderValue.separateDigitGroups)(y.toString()).join(' ');
  return '<span style="font-weight:normal">' + name + '</span><br/>' + value + '<span style="font-weight:normal"> (' + parseFloat(percentage.toFixed(1)) + ' %)</span>';
};
exports.formatDataLabel = formatDataLabel;
function _default(series, colors) {
  return [{
    colorByPoint: true,
    allowPointSelect: true,
    cursor: 'pointer',
    data: series,
    colors: colors,
    dataLabels: {
      enabled: true,
      formatter: function () {
        return formatDataLabel(this.point.name, this.y, this.percentage);
      }
    },
    tooltip: {
      headerFormat: '',
      pointFormat: '<span style="color:{point.color}">\u25CF</span> {point.name}: <b>{point.y}</b><br/>'
    }
  }];
}