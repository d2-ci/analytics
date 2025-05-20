import { formatDimension } from '../../api/analytics/utils.js';
import { DIMENSION_PROP_ID, DIMENSION_PROP_PROGRAM_STAGE, DIMENSION_PROP_PROGRAM } from './dimension.js';
export const dimensionGetId = (dimension, outputType) => {
  var _dimension$DIMENSION_, _dimension$DIMENSION_2;
  return formatDimension({
    dimension: dimension[DIMENSION_PROP_ID.name],
    programId: (_dimension$DIMENSION_ = dimension[DIMENSION_PROP_PROGRAM.name]) === null || _dimension$DIMENSION_ === void 0 ? void 0 : _dimension$DIMENSION_.id,
    programStageId: (_dimension$DIMENSION_2 = dimension[DIMENSION_PROP_PROGRAM_STAGE.name]) === null || _dimension$DIMENSION_2 === void 0 ? void 0 : _dimension$DIMENSION_2.id,
    outputType
  });
};