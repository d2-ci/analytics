"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.VisTypeIcon = void 0;
var _ui = require("@dhis2/ui");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _visTypes = require("../modules/visTypes.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const VisTypeIcon = _ref => {
  let {
    type,
    useSmall = false,
    ...props
  } = _ref;
  let VisIcon;
  switch (type) {
    case _visTypes.VIS_TYPE_LINE_LIST:
      {
        VisIcon = useSmall ? _ui.IconVisualizationLinelist16 : _ui.IconVisualizationLinelist24;
        break;
      }
    case _visTypes.VIS_TYPE_PIVOT_TABLE:
      {
        VisIcon = useSmall ? _ui.IconVisualizationPivotTable16 : _ui.IconVisualizationPivotTable24;
        break;
      }
    case _visTypes.VIS_TYPE_BAR:
      {
        VisIcon = useSmall ? _ui.IconVisualizationBar16 : _ui.IconVisualizationBar24;
        break;
      }
    case _visTypes.VIS_TYPE_STACKED_BAR:
      {
        VisIcon = useSmall ? _ui.IconVisualizationBarStacked16 : _ui.IconVisualizationBarStacked24;
        break;
      }
    case _visTypes.VIS_TYPE_STACKED_COLUMN:
      {
        VisIcon = useSmall ? _ui.IconVisualizationColumnStacked16 : _ui.IconVisualizationColumnStacked24;
        break;
      }
    case _visTypes.VIS_TYPE_LINE:
      {
        VisIcon = useSmall ? _ui.IconVisualizationLine16 : _ui.IconVisualizationLine24;
        break;
      }
    case _visTypes.VIS_TYPE_AREA:
      {
        VisIcon = useSmall ? _ui.IconVisualizationArea16 : _ui.IconVisualizationArea24;
        break;
      }
    case _visTypes.VIS_TYPE_STACKED_AREA:
      {
        VisIcon = useSmall ? _ui.IconVisualizationAreaStacked16 : _ui.IconVisualizationAreaStacked24;
        break;
      }
    case _visTypes.VIS_TYPE_PIE:
      {
        VisIcon = useSmall ? _ui.IconVisualizationPie16 : _ui.IconVisualizationPie24;
        break;
      }
    case _visTypes.VIS_TYPE_RADAR:
      {
        VisIcon = useSmall ? _ui.IconVisualizationRadar16 : _ui.IconVisualizationRadar24;
        break;
      }
    case _visTypes.VIS_TYPE_GAUGE:
      {
        VisIcon = useSmall ? _ui.IconVisualizationGauge16 : _ui.IconVisualizationGauge24;
        break;
      }
    case _visTypes.VIS_TYPE_YEAR_OVER_YEAR_LINE:
      {
        VisIcon = useSmall ? _ui.IconVisualizationLineMulti16 : _ui.IconVisualizationLineMulti24;
        break;
      }
    case _visTypes.VIS_TYPE_YEAR_OVER_YEAR_COLUMN:
      {
        VisIcon = useSmall ? _ui.IconVisualizationColumnMulti16 : _ui.IconVisualizationColumnMulti24;
        break;
      }
    case _visTypes.VIS_TYPE_SINGLE_VALUE:
      {
        VisIcon = useSmall ? _ui.IconVisualizationSingleValue16 : _ui.IconVisualizationSingleValue24;
        break;
      }
    case _visTypes.VIS_TYPE_SCATTER:
      {
        VisIcon = useSmall ? _ui.IconVisualizationScatter16 : _ui.IconVisualizationScatter24;
        break;
      }
    case _visTypes.VIS_TYPE_OUTLIER_TABLE:
      {
        VisIcon = useSmall ? _ui.IconVisualizationOutlierTable16 : _ui.IconVisualizationOutlierTable24;
        break;
      }
    case _visTypes.VIS_TYPE_COLUMN:
    default:
      {
        VisIcon = useSmall ? _ui.IconVisualizationColumn16 : _ui.IconVisualizationColumn24;
        break;
      }
  }
  return /*#__PURE__*/_react.default.createElement(VisIcon, props);
};
exports.VisTypeIcon = VisTypeIcon;
VisTypeIcon.propTypes = {
  type: _propTypes.default.string,
  useSmall: _propTypes.default.bool
};
var _default = VisTypeIcon;
exports.default = _default;