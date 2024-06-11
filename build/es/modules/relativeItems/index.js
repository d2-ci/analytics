import { getRelativePeriodIds } from '../../components/PeriodDimension/utils/relativePeriods.js';
import { ouIdHelper, USER_ORG_UNIT, USER_ORG_UNIT_CHILDREN, USER_ORG_UNIT_GRANDCHILDREN } from '../ouIdHelper/index.js';
import { DIMENSION_ID_ASSIGNED_CATEGORIES, DIMENSION_ID_ORGUNIT, DIMENSION_ID_PERIOD } from '../predefinedDimensions.js';
export const hasRelativeItems = function (dimension) {
  let itemIds = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return dimension === DIMENSION_ID_ASSIGNED_CATEGORIES || dimension === DIMENSION_ID_ORGUNIT && Array.isArray(itemIds) && itemIds.some(id => ouIdHelper.hasLevelPrefix(id) || ouIdHelper.hasGroupPrefix(id) || [USER_ORG_UNIT, USER_ORG_UNIT_CHILDREN, USER_ORG_UNIT_GRANDCHILDREN].includes(id)) || dimension === DIMENSION_ID_PERIOD && Array.isArray(itemIds) && itemIds.some(id => getRelativePeriodIds().includes(id));
};