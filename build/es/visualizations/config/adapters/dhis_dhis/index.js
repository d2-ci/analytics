import getSubtitle from './subtitle/index.js';
import getTitle from './title/index.js';
import getValue from './value/index.js';
export const INDICATOR_FACTOR_100 = 100;
export default function (_ref) {
  let {
    store,
    layout,
    extraOptions
  } = _ref;
  const data = store.generateData({
    type: layout.type,
    seriesId: layout.columns && layout.columns.length ? layout.columns[0].dimension : null,
    categoryId: layout.rows && layout.rows.length ? layout.rows[0].dimension : null
  });
  const metaData = store.data[0].metaData;
  const config = {
    value: data[0],
    formattedValue: data[0] === undefined ? extraOptions.noData.text : getValue(data[0], layout, metaData),
    title: getTitle(layout, metaData, extraOptions.dashboard),
    subtitle: getSubtitle(layout, metaData, extraOptions.dashboard)
  };
  const indicatorType = metaData.items[metaData.dimensions.dx[0]].indicatorType; // Use % symbol for factor 100 and the full string for others

  if ((indicatorType === null || indicatorType === void 0 ? void 0 : indicatorType.factor) !== INDICATOR_FACTOR_100) {
    config.subText = indicatorType === null || indicatorType === void 0 ? void 0 : indicatorType.displayName;
  }

  return config;
}