import { DIMENSION_PROP_ID, DIMENSION_PROP_PROGRAM_STAGE } from './dimension.js';
export const dimensionGetId = dimension => {
  var _dimension$DIMENSION_;

  return (_dimension$DIMENSION_ = dimension[DIMENSION_PROP_PROGRAM_STAGE.name]) !== null && _dimension$DIMENSION_ !== void 0 && _dimension$DIMENSION_.id ? "".concat(dimension[DIMENSION_PROP_PROGRAM_STAGE.name].id, ".").concat(dimension[DIMENSION_PROP_ID.name]) : dimension[DIMENSION_PROP_ID.name];
};