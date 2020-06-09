"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _ouIdHelper = require("../../modules/ouIdHelper");

var _dimensionIs = require("../../modules/layout/dimensionIs");

var _predefinedDimensions = require("../../modules/predefinedDimensions");

var _dimensionGetItems = require("../../modules/layout/dimensionGetItems");

var _getOuLevelAndGroupText = require("../../modules/getOuLevelAndGroupText");

function _default(filters, metaData) {
  if (!Array.isArray(filters) || !filters.length) {
    return '';
  }

  var titleFragments = [];
  var i;
  var l;
  filters.forEach(function (filter) {
    var items = (0, _dimensionGetItems.dimensionGetItems)(filter);

    if ((0, _dimensionIs.dimensionIs)(filter, _predefinedDimensions.DIMENSION_ID_ORGUNIT) && items.some(function (_ref) {
      var id = _ref.id;
      return _ouIdHelper.ouIdHelper.hasGroupPrefix(id) || _ouIdHelper.ouIdHelper.hasLevelPrefix(id);
    })) {
      titleFragments.push((0, _getOuLevelAndGroupText.getOuLevelAndGroupText)(filter, metaData));
    } else {
      var filterItems = [];

      if ((0, _dimensionIs.dimensionIs)(filter, _predefinedDimensions.DIMENSION_ID_PERIOD)) {
        filterItems = items.map(function (_ref2) {
          var id = _ref2.id;
          return id;
        });
      } else {
        filterItems = metaData.dimensions[filter.dimension];
      }

      if (Array.isArray(filterItems)) {
        l = filterItems.length;
        var id;
        var sectionParts = [];

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