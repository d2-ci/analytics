"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIdAxisMap = getIdAxisMap;
exports.getFullIdAxisMap = getFullIdAxisMap;
exports.hasOptionalAxis = hasOptionalAxis;
exports.hasOptionalAxisItems = hasOptionalAxisItems;
exports.getAxisIdsMap = getAxisIdsMap;
exports.OPTIONAL_AXES_AXIS = exports.OPTIONAL_AXES_DIMENSIONAL_ITEM = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var OPTIONAL_AXES_DIMENSIONAL_ITEM = 'dimensionalItem';
exports.OPTIONAL_AXES_DIMENSIONAL_ITEM = OPTIONAL_AXES_DIMENSIONAL_ITEM;
var OPTIONAL_AXES_AXIS = 'axis'; // returns:
// {
//     a: 1,
//     b: 1,
// }

exports.OPTIONAL_AXES_AXIS = OPTIONAL_AXES_AXIS;

function getIdAxisMap(optionalAxes) {
  return optionalAxes.reduce(function (map, item) {
    map[item[OPTIONAL_AXES_DIMENSIONAL_ITEM]] = item[OPTIONAL_AXES_AXIS];
    return map;
  }, {});
}

function getFullIdAxisMap(optionalAxes, series) {
  var idAxisMap = getIdAxisMap(optionalAxes); // adds first axis ids to seriesAxisMap

  series.forEach(function (s) {
    if (!(s.id in idAxisMap)) {
      idAxisMap[s.id] = 0;
    }
  });
  return idAxisMap;
} // returns: true or false


function hasOptionalAxis(optionalAxes) {
  return Boolean(optionalAxes.length);
} // returns: true or false


function hasOptionalAxisItems(optionalAxes, columns) {
  var axisIds = Object.keys(getIdAxisMap(optionalAxes));
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


function getAxisIdsMap(optionalAxes, series) {
  var fullIdAxisMap = getFullIdAxisMap(optionalAxes, series);
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