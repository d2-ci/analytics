import i18n from '../../../../locales/index.js';
import { VIS_TYPE_COLUMN, VIS_TYPE_SCATTER, VIS_TYPE_STACKED_COLUMN, VIS_TYPE_BAR, VIS_TYPE_STACKED_BAR } from '../../../../modules/visTypes.js';
const MAX_LABELS = 10;
export default (_ref => {
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
      labels.push(i18n.t('and {{amount}} more...', {
        amount: length - MAX_LABELS
      }));
    }

    return "".concat(labels.map(label => "<b>".concat(label, "</b><br>")).join('')).concat(yAxisName, ": ").concat(y, "<br>").concat(xAxisName, ": ").concat(x);
  };

  switch (visType) {
    case VIS_TYPE_SCATTER:
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

    case VIS_TYPE_COLUMN:
    case VIS_TYPE_STACKED_COLUMN:
    case VIS_TYPE_BAR:
    case VIS_TYPE_STACKED_BAR:
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
});