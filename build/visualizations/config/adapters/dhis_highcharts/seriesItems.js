"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIdAxisMap = getIdAxisMap;
exports.getFullIdAxisMap = getFullIdAxisMap;
exports.hasExtraAxis = hasExtraAxis;
exports.hasExtraAxisItems = hasExtraAxisItems;
exports.getAxisIdsMap = getAxisIdsMap;
exports.SERIES_ITEM_AXIS = exports.SERIES_ITEM_SERIES = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var SERIES_ITEM_SERIES = 'series';
exports.SERIES_ITEM_SERIES = SERIES_ITEM_SERIES;
var SERIES_ITEM_AXIS = 'axis'; // returns:
// {
//     a: 1,
//     b: 1,
// }

exports.SERIES_ITEM_AXIS = SERIES_ITEM_AXIS;

function getIdAxisMap(seriesItems) {
  return seriesItems.reduce(function (map, item) {
    map[item[SERIES_ITEM_SERIES]] = item[SERIES_ITEM_AXIS];
    return map;
  }, {});
}

function getFullIdAxisMap(seriesItems, series) {
  var idAxisMap = getIdAxisMap(seriesItems); // adds first axis ids to seriesAxisMap

  series.forEach(function (s) {
    if (!(s.id in idAxisMap)) {
      idAxisMap[s.id] = 0;
    }
  });
  return idAxisMap;
} // returns: true or false


function hasExtraAxis(seriesItems) {
  return Boolean(Object.keys(getIdAxisMap(seriesItems)).length);
} // returns: true or false


function hasExtraAxisItems(seriesItems, columns) {
  var axisIds = Object.keys(getIdAxisMap(seriesItems));
  var seriesIds = columns.reduce(function (all, dim) {
    all.push.apply(all, (0, _toConsumableArray2.default)(dim.items.map(function (item) {
      return item.id;
    })));
    return all;
  }, []);
  return axisIds.find(function (id) {
    return seriesIds.includes(id);
  });
} // returns:
// {
//     0: ['a', 'b'],
//     1: ['c'],
// }


function getAxisIdsMap(seriesItems, series) {
  var fullIdAxisMap = getFullIdAxisMap(seriesItems, series);
  return Object.entries(fullIdAxisMap).reduce(function (map, _ref) {
    var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
        id = _ref2[0],
        axis = _ref2[1];

    if (!(axis in map)) {
      map[axis] = [];
    }

    map[axis].push(id);
    return map;
  }, {});
}