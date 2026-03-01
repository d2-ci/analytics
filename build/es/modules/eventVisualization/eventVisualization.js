import { getHeaderByVis } from "../dimensions";
import { layoutGetAllDimensions } from "../layout/layoutGetAllDimensions";
export const transformEventVisualization = vis => {
  // Do not modify the original visualization
  let transformedVis = {
    ...vis,
    columns: [...vis.columns.map(col => ({
      ...col
    }))],
    rows: [...vis.rows.map(row => ({
      ...row
    }))]
  };
  let headerName;
  layoutGetAllDimensions(vis).forEach(dim => {
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
};