"use strict";

var _react = require("@testing-library/react");
var _useDataOutputPeriodTypes = require("../useDataOutputPeriodTypes.js");
var _useRelativePeriodsNames = require("../useRelativePeriodsNames.js");
var _relativePeriods = require("../utils/relativePeriods.js");
jest.mock('../useDataOutputPeriodTypes.js', () => ({
  useDataOutputPeriodTypes: jest.fn()
}));
const mockDataOutputPeriodTypes = ({
  enabledPeriodTypesData = null,
  loading = false,
  error = null
} = {}) => _useDataOutputPeriodTypes.useDataOutputPeriodTypes.mockReturnValue({
  supportsEnabledPeriodTypes: Boolean(enabledPeriodTypesData),
  enabledPeriodTypesData,
  loading,
  error
});
describe('useRelativePeriodsNames', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  it('returns the hardcoded names on v42', () => {
    mockDataOutputPeriodTypes();
    const {
      result
    } = (0, _react.renderHook)(() => (0, _useRelativePeriodsNames.useRelativePeriodsNames)());
    expect(result.current.relativePeriodsNames).toEqual((0, _relativePeriods.getRelativePeriodsName)());
    expect(result.current.relativePeriodsNames.LAST_5_YEARS).toBe('Last 5 years');
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
  });
  it('applies the derived names on v43', () => {
    mockDataOutputPeriodTypes({
      enabledPeriodTypesData: {
        version: 43,
        metaData: {
          THIS_WEEK: {
            name: 'This EPI week'
          },
          LAST_FINANCIAL_YEAR: {
            name: 'Last FY October'
          }
        }
      }
    });
    const {
      result
    } = (0, _react.renderHook)(() => (0, _useRelativePeriodsNames.useRelativePeriodsNames)());
    expect(result.current.relativePeriodsNames).toEqual({
      ...(0, _relativePeriods.getRelativePeriodsName)(),
      THIS_WEEK: 'This EPI week',
      LAST_FINANCIAL_YEAR: 'Last FY October'
    });
  });
  it('handles v43 without enabled period types (no metaData)', () => {
    mockDataOutputPeriodTypes({
      enabledPeriodTypesData: {
        version: 43,
        noEnabledTypes: true
      }
    });
    const {
      result
    } = (0, _react.renderHook)(() => (0, _useRelativePeriodsNames.useRelativePeriodsNames)());
    expect(result.current.relativePeriodsNames).toEqual((0, _relativePeriods.getRelativePeriodsName)());
  });
  it('uses the server names on v44, with the hardcoded names as fallback', () => {
    mockDataOutputPeriodTypes({
      enabledPeriodTypesData: {
        version: 44,
        metaData: {
          LAST_5_YEARS: {
            name: 'Les 5 dernières années'
          },
          TODAY: {
            name: "Aujourd'hui"
          }
        }
      }
    });
    const {
      result
    } = (0, _react.renderHook)(() => (0, _useRelativePeriodsNames.useRelativePeriodsNames)());
    const names = result.current.relativePeriodsNames;
    expect(names.LAST_5_YEARS).toBe('Les 5 dernières années');
    expect(names.TODAY).toBe("Aujourd'hui");
    // not returned by the server (i.e. disabled period type)
    expect(names.LAST_10_YEARS).toBe('Last 10 years');
    expect(Object.keys(names)).toEqual(Object.keys((0, _relativePeriods.getRelativePeriodsName)()));
  });
  it('returns the hardcoded names and the loading state while loading', () => {
    mockDataOutputPeriodTypes({
      loading: true
    });
    const {
      result
    } = (0, _react.renderHook)(() => (0, _useRelativePeriodsNames.useRelativePeriodsNames)());
    expect(result.current.loading).toBe(true);
    expect(result.current.relativePeriodsNames).toEqual((0, _relativePeriods.getRelativePeriodsName)());
  });
  it('returns the hardcoded names and the error when the request fails', () => {
    const error = new Error('Request failed');
    mockDataOutputPeriodTypes({
      error
    });
    const {
      result
    } = (0, _react.renderHook)(() => (0, _useRelativePeriodsNames.useRelativePeriodsNames)());
    expect(result.current.error).toBe(error);
    expect(result.current.relativePeriodsNames).toEqual((0, _relativePeriods.getRelativePeriodsName)());
  });
  it('does not mutate the hardcoded names', () => {
    mockDataOutputPeriodTypes({
      enabledPeriodTypesData: {
        version: 44,
        metaData: {
          TODAY: {
            name: "Aujourd'hui"
          }
        }
      }
    });
    (0, _react.renderHook)(() => (0, _useRelativePeriodsNames.useRelativePeriodsNames)());
    expect((0, _relativePeriods.getRelativePeriodsName)().TODAY).toBe('Today');
  });
});