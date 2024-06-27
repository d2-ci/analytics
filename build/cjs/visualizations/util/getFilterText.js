"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _getOuLevelAndGroupText = require("../../modules/getOuLevelAndGroupText.js");

var _dimensionGetItems = require("../../modules/layout/dimensionGetItems.js");

var _dimensionIs = require("../../modules/layout/dimensionIs.js");

var _index = require("../../modules/ouIdHelper/index.js");

var _predefinedDimensions = require("../../modules/predefinedDimensions.js");

function _default(filters, metaData) {
  if (!Array.isArray(filters) || !filters.length) {
    return '';
  }

  const titleFragments = [];
  let i;
  let l;
  filters.forEach(filter => {
    const items = (0, _dimensionGetItems.dimensionGetItems)(filter);

    if ((0, _dimensionIs.dimensionIs)(filter, _predefinedDimensions.DIMENSION_ID_ORGUNIT) && items.some(_ref => {
      let {
        id
      } = _ref;
      return _index.ouIdHelper.hasGroupPrefix(id) || _index.ouIdHelper.hasLevelPrefix(id);
    })) {
      titleFragments.push((0, _getOuLevelAndGroupText.getOuLevelAndGroupText)(filter, metaData));
    } else {
      const filterItems = metaData.dimensions[filter.dimension];

      if (Array.isArray(filterItems)) {
        l = filterItems.length;
        let id;
        const sectionParts = [];

        for (i = 0; i < l; i++) {
          id = filterItems[i]; // if the value is present in items take the name to show from there

          if (metaData.items[id]) {
            sectionParts.push(metaData.items[id].name);
          } // otherwise use the values directly
          // this is a temporary fix to avoid app crashing when using filters with data items in EV
          else {
            sectionParts.push(metaData.items[filter.dimension].name + ': ' + filterItems.join(', '));
            break;
          }
        }

        titleFragments.push(sectionParts.join(', '));
      }
    }
  });
  return titleFragments.join(' - ');
}