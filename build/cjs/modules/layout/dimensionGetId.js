"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dimensionGetId = void 0;
var _utils = require("../../api/analytics/utils.js");
var _dimension = require("./dimension.js");
const dimensionGetId = (dimension, outputType) => {
  var _dimension$DIMENSION_, _dimension$DIMENSION_2;
  return (0, _utils.formatDimension)({
    dimension: dimension[_dimension.DIMENSION_PROP_ID.name],
    programId: (_dimension$DIMENSION_ = dimension[_dimension.DIMENSION_PROP_PROGRAM.name]) === null || _dimension$DIMENSION_ === void 0 ? void 0 : _dimension$DIMENSION_.id,
    programStageId: (_dimension$DIMENSION_2 = dimension[_dimension.DIMENSION_PROP_PROGRAM_STAGE.name]) === null || _dimension$DIMENSION_2 === void 0 ? void 0 : _dimension$DIMENSION_2.id,
    outputType
  });
};
exports.dimensionGetId = dimensionGetId;