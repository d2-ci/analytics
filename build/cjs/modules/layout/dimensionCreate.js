"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dimensionCreate = void 0;

var _dimension = require("./dimension.js");

const dimensionCreate = function (dimensionId) {
  let itemIds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  let args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  const dimension = {
    [_dimension.DIMENSION_PROP_ID.name]: dimensionId,
    ...(itemIds.length && {
      [_dimension.DIMENSION_PROP_ITEMS.name]: itemIds.map(id => ({
        id
      }))
    }),
    ...(args.filter && {
      [_dimension.DIMENSION_PROP_FILTER.name]: args.filter
    }),
    ...(args.legendSet && {
      [_dimension.DIMENSION_PROP_LEGEND_SET.name]: args.legendSet
    }),
    ...(args.programStage && {
      [_dimension.DIMENSION_PROP_PROGRAM_STAGE.name]: args.programStage
    }),
    ...(args.repetition && {
      [_dimension.DIMENSION_PROP_REPETITION.name]: args.repetition
    })
  };
  return dimension;
};

exports.dimensionCreate = dimensionCreate;