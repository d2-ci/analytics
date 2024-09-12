import { getSingleValueFormattedValue } from './getSingleValueFormattedValue.js';
import { getSingleValueSubtext } from './getSingleValueSubtext.js';
export function getSingleValueCustomSVGOptions(_ref) {
  let {
    layout,
    extraOptions,
    metaData,
    series
  } = _ref;
  const {
    dashboard,
    icon
  } = extraOptions;
  const value = series[0];
  return {
    value,
    formattedValue: getSingleValueFormattedValue(value, layout, metaData),
    icon,
    dashboard,
    subText: getSingleValueSubtext(metaData)
  };
}