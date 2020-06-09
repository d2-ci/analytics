"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dimensionCreate = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _dimension = require("./dimension");

var dimensionCreate = function dimensionCreate(dimensionId) {
  var _ref;

  var itemIds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return _ref = {}, (0, _defineProperty2.default)(_ref, _dimension.DIMENSION_PROP_ID.name, dimensionId), (0, _defineProperty2.default)(_ref, _dimension.DIMENSION_PROP_ITEMS.name, itemIds.map(function (id) {
    return {
      id: id
    };
  })), _ref;
};

exports.dimensionCreate = dimensionCreate;