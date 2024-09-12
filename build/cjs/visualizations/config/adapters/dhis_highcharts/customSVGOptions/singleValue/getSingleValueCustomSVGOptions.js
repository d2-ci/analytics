"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSingleValueCustomSVGOptions = getSingleValueCustomSVGOptions;
var _getSingleValueFormattedValue = require("./getSingleValueFormattedValue.js");
function getSingleValueCustomSVGOptions(_ref) {
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
    formattedValue: (0, _getSingleValueFormattedValue.getSingleValueFormattedValue)(value, layout, metaData),
    icon,
    dashboard,
    subText: 'Test'
  };
  console.log('singleValueCustomSvgOptions', customSVGOptions);
  return customSVGOptions;
}