"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(require("../../../../locales/index.js"));
var _visTypes = require("../../../../modules/visTypes.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const MAX_LABELS = 10;
var _default = _ref => {
  let {
    visType,
    xAxisName,
    yAxisName,
    showLabels,
    tooltipData,
    onClick
  } = _ref;
  const series = {
    dataLabels: {
      enabled: showLabels,
      format: '{point.name}'
    }
  };
  const getLabels = (x, y) => tooltipData.filter(item => item.x === x && item.y === y).map(item => item.name);
  const getTooltip = (x, y) => {
    let labels = getLabels(x, y);
    const length = labels.length;
    if (length > MAX_LABELS) {
      labels = labels.slice(0, MAX_LABELS);
      labels.push(_index.default.t('and {{amount}} more...', {
        amount: length - MAX_LABELS
      }));
    }
    return `${labels.map(label => `<b>${label}</b><br>`).join('')}${yAxisName}: ${y}<br>${xAxisName}: ${x}`;
  };
  switch (visType) {
    case _visTypes.VIS_TYPE_SCATTER:
      return {
        series,
        scatter: {
          tooltip: {
            useHTML: true,
            headerFormat: '',
            pointFormatter: function () {
              return getTooltip(this.x, this.y);
            }
          },
          boostThreshold: 1
        }
      };
    case _visTypes.VIS_TYPE_COLUMN:
    case _visTypes.VIS_TYPE_STACKED_COLUMN:
    case _visTypes.VIS_TYPE_BAR:
    case _visTypes.VIS_TYPE_STACKED_BAR:
      return onClick ? {
        series: {
          cursor: 'pointer',
          point: {
            events: {
              click: function () {
                var _this$graphic;
                onClick((_this$graphic = this.graphic) === null || _this$graphic === void 0 ? void 0 : _this$graphic.element, {
                  category: this.category,
                  series: this.series.name
                });
              }
            }
          }
        }
      } : {};
    default:
      return {};
  }
};
exports.default = _default;