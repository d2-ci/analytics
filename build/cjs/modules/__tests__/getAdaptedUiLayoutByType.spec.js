"use strict";

var _getAdaptedUiLayoutByType = require("../getAdaptedUiLayoutByType.js");

var _axis = require("../layout/axis.js");

var _predefinedDimensions = require("../predefinedDimensions.js");

var _visTypes = require("../visTypes.js");

const someId = 'someId';
const otherId = 'otherId';
describe('getAdaptedUiLayoutByType', () => {
  it('column: moves all extra dimensions in columns and rows to filters', () => {
    const initialState = {
      [_axis.AXIS_ID_COLUMNS]: [_predefinedDimensions.DIMENSION_ID_DATA, someId],
      [_axis.AXIS_ID_ROWS]: [],
      [_axis.AXIS_ID_FILTERS]: [_predefinedDimensions.DIMENSION_ID_PERIOD, _predefinedDimensions.DIMENSION_ID_ORGUNIT, otherId]
    };
    const actualState = (0, _getAdaptedUiLayoutByType.getAdaptedUiLayoutByType)(initialState, _visTypes.VIS_TYPE_COLUMN);
    const expectedState = {
      [_axis.AXIS_ID_COLUMNS]: [_predefinedDimensions.DIMENSION_ID_DATA],
      [_axis.AXIS_ID_ROWS]: [],
      [_axis.AXIS_ID_FILTERS]: [_predefinedDimensions.DIMENSION_ID_PERIOD, _predefinedDimensions.DIMENSION_ID_ORGUNIT, otherId, someId]
    };
    expect(actualState).toEqual(expectedState);
  });
  it('dualCategory: should keep the 2nd category in rows and move the others to filters (if any),', () => {
    const initialState = {
      [_axis.AXIS_ID_COLUMNS]: [_predefinedDimensions.DIMENSION_ID_DATA],
      [_axis.AXIS_ID_ROWS]: [_predefinedDimensions.DIMENSION_ID_PERIOD, otherId, someId],
      [_axis.AXIS_ID_FILTERS]: [_predefinedDimensions.DIMENSION_ID_ORGUNIT]
    };
    const actualState = (0, _getAdaptedUiLayoutByType.getAdaptedUiLayoutByType)(initialState, _visTypes.VIS_TYPE_BAR);
    const expectedState = {
      [_axis.AXIS_ID_COLUMNS]: [_predefinedDimensions.DIMENSION_ID_DATA],
      [_axis.AXIS_ID_ROWS]: [_predefinedDimensions.DIMENSION_ID_PERIOD, otherId],
      [_axis.AXIS_ID_FILTERS]: [_predefinedDimensions.DIMENSION_ID_ORGUNIT, someId]
    };
    expect(actualState).toEqual(expectedState);
  });
  it('pie: moves all column and row dimensions to filter except the first column dimension', () => {
    const initialState = {
      [_axis.AXIS_ID_COLUMNS]: [_predefinedDimensions.DIMENSION_ID_DATA, someId],
      [_axis.AXIS_ID_ROWS]: [_predefinedDimensions.DIMENSION_ID_PERIOD, otherId],
      [_axis.AXIS_ID_FILTERS]: [_predefinedDimensions.DIMENSION_ID_ORGUNIT]
    };
    const actualState = (0, _getAdaptedUiLayoutByType.getAdaptedUiLayoutByType)(initialState, _visTypes.VIS_TYPE_PIE);
    const expectedState = {
      [_axis.AXIS_ID_COLUMNS]: [_predefinedDimensions.DIMENSION_ID_DATA],
      [_axis.AXIS_ID_ROWS]: [],
      [_axis.AXIS_ID_FILTERS]: [_predefinedDimensions.DIMENSION_ID_ORGUNIT, someId, _predefinedDimensions.DIMENSION_ID_PERIOD, otherId]
    };
    expect(actualState).toEqual(expectedState);
  });
  it('pie: moves the first row dimension to series and the rest to filter', () => {
    const initialState = {
      [_axis.AXIS_ID_COLUMNS]: [],
      [_axis.AXIS_ID_ROWS]: [_predefinedDimensions.DIMENSION_ID_DATA, _predefinedDimensions.DIMENSION_ID_PERIOD, someId],
      [_axis.AXIS_ID_FILTERS]: [_predefinedDimensions.DIMENSION_ID_ORGUNIT]
    };
    const actualState = (0, _getAdaptedUiLayoutByType.getAdaptedUiLayoutByType)(initialState, _visTypes.VIS_TYPE_PIE);
    const expectedState = {
      [_axis.AXIS_ID_COLUMNS]: [_predefinedDimensions.DIMENSION_ID_DATA],
      [_axis.AXIS_ID_ROWS]: [],
      [_axis.AXIS_ID_FILTERS]: [_predefinedDimensions.DIMENSION_ID_ORGUNIT, _predefinedDimensions.DIMENSION_ID_PERIOD, someId]
    };
    expect(actualState).toEqual(expectedState);
  });
  it('yoy: removes the "pe" dimension and moves all other dimensions to filter with dimension strings', () => {
    const initialState = {
      [_axis.AXIS_ID_COLUMNS]: [_predefinedDimensions.DIMENSION_ID_DATA, someId],
      [_axis.AXIS_ID_ROWS]: [_predefinedDimensions.DIMENSION_ID_PERIOD, otherId],
      [_axis.AXIS_ID_FILTERS]: [_predefinedDimensions.DIMENSION_ID_ORGUNIT]
    };
    const actualState = (0, _getAdaptedUiLayoutByType.getAdaptedUiLayoutByType)(initialState, _visTypes.VIS_TYPE_YEAR_OVER_YEAR_LINE);
    const expectedState = {
      [_axis.AXIS_ID_COLUMNS]: [],
      [_axis.AXIS_ID_ROWS]: [],
      [_axis.AXIS_ID_FILTERS]: [_predefinedDimensions.DIMENSION_ID_ORGUNIT, _predefinedDimensions.DIMENSION_ID_DATA, someId, otherId]
    };
    expect(actualState).toEqual(expectedState);
  });
  it('yoy: removes the "pe" dimension and moves all other dimensions to filter with dimension objects', () => {
    const initialState = {
      [_axis.AXIS_ID_COLUMNS]: [{
        dimension: _predefinedDimensions.DIMENSION_ID_DATA
      }, {
        dimension: someId
      }],
      [_axis.AXIS_ID_ROWS]: [{
        dimension: _predefinedDimensions.DIMENSION_ID_PERIOD
      }, {
        dimension: otherId
      }],
      [_axis.AXIS_ID_FILTERS]: [{
        dimension: _predefinedDimensions.DIMENSION_ID_ORGUNIT
      }]
    };
    const actualState = (0, _getAdaptedUiLayoutByType.getAdaptedUiLayoutByType)(initialState, _visTypes.VIS_TYPE_YEAR_OVER_YEAR_LINE);
    const expectedState = {
      [_axis.AXIS_ID_COLUMNS]: [],
      [_axis.AXIS_ID_ROWS]: [],
      [_axis.AXIS_ID_FILTERS]: [{
        dimension: _predefinedDimensions.DIMENSION_ID_ORGUNIT
      }, {
        dimension: _predefinedDimensions.DIMENSION_ID_DATA
      }, {
        dimension: someId
      }, {
        dimension: otherId
      }]
    };
    expect(actualState).toEqual(expectedState);
  });
  it('pivot -> sv with dimension strings', () => {
    const initialLayout = {
      [_axis.AXIS_ID_COLUMNS]: [_predefinedDimensions.DIMENSION_ID_DATA, _predefinedDimensions.DIMENSION_ID_PERIOD],
      [_axis.AXIS_ID_ROWS]: [_predefinedDimensions.DIMENSION_ID_ORGUNIT],
      [_axis.AXIS_ID_FILTERS]: [someId]
    };
    const actualLayout = (0, _getAdaptedUiLayoutByType.getAdaptedUiLayoutByType)(initialLayout, _visTypes.VIS_TYPE_SINGLE_VALUE);
    const expectedLayout = {
      [_axis.AXIS_ID_COLUMNS]: [_predefinedDimensions.DIMENSION_ID_DATA],
      [_axis.AXIS_ID_ROWS]: [],
      [_axis.AXIS_ID_FILTERS]: [someId, _predefinedDimensions.DIMENSION_ID_PERIOD, _predefinedDimensions.DIMENSION_ID_ORGUNIT]
    };
    expect(actualLayout).toEqual(expectedLayout);
  });
  it('pivot -> sv with dimension objects', () => {
    const initialLayout = {
      [_axis.AXIS_ID_COLUMNS]: [{
        dimension: _predefinedDimensions.DIMENSION_ID_DATA
      }, {
        dimension: _predefinedDimensions.DIMENSION_ID_PERIOD
      }],
      [_axis.AXIS_ID_ROWS]: [{
        dimension: _predefinedDimensions.DIMENSION_ID_ORGUNIT
      }],
      [_axis.AXIS_ID_FILTERS]: [{
        dimension: someId
      }]
    };
    const actualLayout = (0, _getAdaptedUiLayoutByType.getAdaptedUiLayoutByType)(initialLayout, _visTypes.VIS_TYPE_SINGLE_VALUE);
    const expectedLayout = {
      [_axis.AXIS_ID_COLUMNS]: [{
        dimension: _predefinedDimensions.DIMENSION_ID_DATA
      }],
      [_axis.AXIS_ID_ROWS]: [],
      [_axis.AXIS_ID_FILTERS]: [{
        dimension: someId
      }, {
        dimension: _predefinedDimensions.DIMENSION_ID_PERIOD
      }, {
        dimension: _predefinedDimensions.DIMENSION_ID_ORGUNIT
      }]
    };
    expect(actualLayout).toEqual(expectedLayout);
  });
  it('column -> sv with dimension strings', () => {
    const initialLayout = {
      [_axis.AXIS_ID_COLUMNS]: [_predefinedDimensions.DIMENSION_ID_DATA],
      [_axis.AXIS_ID_ROWS]: [_predefinedDimensions.DIMENSION_ID_PERIOD, otherId],
      [_axis.AXIS_ID_FILTERS]: [_predefinedDimensions.DIMENSION_ID_ORGUNIT, someId]
    };
    const actualLayout = (0, _getAdaptedUiLayoutByType.getAdaptedUiLayoutByType)(initialLayout, _visTypes.VIS_TYPE_SINGLE_VALUE);
    const expectedLayout = {
      [_axis.AXIS_ID_COLUMNS]: [_predefinedDimensions.DIMENSION_ID_DATA],
      [_axis.AXIS_ID_ROWS]: [],
      [_axis.AXIS_ID_FILTERS]: [_predefinedDimensions.DIMENSION_ID_ORGUNIT, someId, _predefinedDimensions.DIMENSION_ID_PERIOD, otherId]
    };
    expect(actualLayout).toEqual(expectedLayout);
  });
});