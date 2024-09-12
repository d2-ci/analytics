import { getSingleValueFormattedValue } from './getSingleValueFormattedValue.js';
export function getSingleValueCustomSVGOptions(_ref) {
  let {
    extraConfig,
    layout,
    extraOptions,
    metaData,
    series
  } = _ref;
  const {
    dashboard,
    legendSets,
    fontStyle,
    noData,
    legendOptions,
    icon
  } = extraOptions;
  const value = series[0];
  console.log('++++setSingleValueOptions++++', '\nextraConfig: ', extraConfig, '\nlayout: ', layout, '\nmetaData: ', metaData, '\nseries: ', series, '\ndashboard: ', dashboard, '\nlegendSets: ', legendSets, '\nfontStyle: ', fontStyle, '\nnoData: ', noData, '\nlegendOptions: ', legendOptions, '\nicon: ', icon, '\n=============');
  const customSVGOptions = {
    value,
    formattedValue: getSingleValueFormattedValue(value, layout, metaData),
    icon,
    dashboard,
    subText: 'Test'
  };
  console.log('singleValueCustomSvgOptions', customSVGOptions);
  return customSVGOptions;
}