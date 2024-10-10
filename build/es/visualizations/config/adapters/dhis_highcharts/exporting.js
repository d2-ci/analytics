import { VIS_TYPE_SINGLE_VALUE } from '../../../../modules/visTypes.js';
import { renderSingleValueSVG } from './customSVGOptions/singleValue/renderer/renderSingleValueSVG.js';
export default function getExporting(layoutType) {
  const exporting = {
    // disable exporting context menu
    enabled: false
  };
  switch (layoutType) {
    case VIS_TYPE_SINGLE_VALUE:
      return {
        ...exporting,
        chartOptions: {
          chart: {
            events: {
              load: renderSingleValueSVG
            }
          }
        }
      };
    default:
      return exporting;
  }
}