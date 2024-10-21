import { colors } from '@dhis2/ui';
import { getSingleValueFormattedValue } from './getSingleValueFormattedValue.js';
import { getSingleValueSubtext } from './getSingleValueSubtext.js';
import { getSingleValueTextColor } from './getSingleValueTextColor.js';
export default function getSingleValueCustomSVGOptions(_ref) {
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
    fontColor: getSingleValueTextColor(colors.grey900, value, layout.legend, extraOptions.legendSets),
    formattedValue: getSingleValueFormattedValue(value, layout, metaData),
    icon,
    dashboard,
    subText: getSingleValueSubtext(metaData)
  };
}