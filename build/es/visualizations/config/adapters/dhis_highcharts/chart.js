import { VIS_TYPE_SINGLE_VALUE } from '../../../../modules/visTypes.js';
import { renderCustomSVG } from './customSVGOptions/index.js';
import { getSingleValueBackgroundColor } from './customSVGOptions/singleValue/index.js';
import getType from './type.js';
const DEFAULT_CHART = {
  spacingTop: 20,
  style: {
    fontFamily: 'Roboto,Helvetica Neue,Helvetica,Arial,sans-serif'
  }
};
const DASHBOARD_CHART = {
  spacingTop: 0,
  spacingRight: 5,
  spacingBottom: 2,
  spacingLeft: 5
};
const getEvents = () => ({
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
      renderCustomSVG.call(this);
    }
  }
});
export default function (layout, el, extraOptions, series) {
  return Object.assign({}, getType(layout.type), {
    renderTo: el || layout.el
  }, DEFAULT_CHART, extraOptions.dashboard ? DASHBOARD_CHART : undefined, getEvents(), layout.type === VIS_TYPE_SINGLE_VALUE ? {
    backgroundColor: getSingleValueBackgroundColor(extraOptions.legendOptions, extraOptions.legendSets, series[0])
  } : undefined);
}