import { INDICATOR_FACTOR_100 } from './getSingleValueFormattedValue.js';
const INDICATOR_FACTOR_1 = 1;
export function getSingleValueSubtext(metaData) {
  const indicatorType = metaData.items[metaData.dimensions.dx[0]].indicatorType;
  return indicatorType !== null && indicatorType !== void 0 && indicatorType.displayName && ![INDICATOR_FACTOR_1, INDICATOR_FACTOR_100].includes(indicatorType === null || indicatorType === void 0 ? void 0 : indicatorType.factor) ? indicatorType === null || indicatorType === void 0 ? void 0 : indicatorType.displayName : undefined;
}