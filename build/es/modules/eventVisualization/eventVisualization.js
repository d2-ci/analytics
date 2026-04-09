import { getHeaderByVis } from '../dimensions.js';
import { layoutGetAllDimensions } from '../layout/layoutGetAllDimensions.js';

// Dimensions saved with program or program stage in an EventVisualization need
// transformation before we can pass them to the pivot table engine

export const transformEventVisualization = vis => {
  // Do not modify the original visualization
  const transformedVis = {
    ...vis,
    columns: [...vis.columns.map(col => ({
      ...col
    }))],
    rows: [...vis.rows.map(row => ({
      ...row
    }))]
  };
  let headerName;
  layoutGetAllDimensions(transformedVis).forEach(dim => {
    var _dim$program, _dim$programStage;
    headerName = getHeaderByVis(dim.dimension);
    if ((_dim$program = dim.program) !== null && _dim$program !== void 0 && _dim$program.id) {
      dim.dimension = `${dim.program.id}.${headerName}`;
    } else if ((_dim$programStage = dim.programStage) !== null && _dim$programStage !== void 0 && _dim$programStage.id) {
      dim.dimension = `${dim.programStage.id}.${headerName}`;
    } else {
      dim.dimension = headerName;
    }
  });
  return transformedVis;
};