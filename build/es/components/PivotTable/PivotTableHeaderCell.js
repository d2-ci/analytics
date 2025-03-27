import PropTypes from 'prop-types';
import { getHeaderForDisplay } from '../../modules/pivotTable/getHeaderForDisplay.js';
export const PivotTableHeaderCell = _ref => {
  let {
    axisClippingResult,
    index,
    level,
    getHeader,
    render,
    showHierarchy
  } = _ref;
  const header = getHeaderForDisplay({
    start: axisClippingResult.indices[0],
    count: axisClippingResult.indices.length,
    index,
    dimensionLevel: level,
    getHeader,
    showHierarchy
  });
  return !header ? null : render(header);
};
PivotTableHeaderCell.propTypes = {
  axisClippingResult: PropTypes.object.isRequired,
  getHeader: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  level: PropTypes.number.isRequired,
  render: PropTypes.func.isRequired,
  showHierarchy: PropTypes.bool.isRequired
};