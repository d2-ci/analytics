"use strict";

var _fixtures = _interopRequireDefault(require("../../../__fixtures__/fixtures.js"));

var _DataEngine = _interopRequireDefault(require("../__mocks__/DataEngine.js"));

var _AnalyticsEnrollments = _interopRequireDefault(require("../AnalyticsEnrollments.js"));

var _AnalyticsRequest = _interopRequireDefault(require("../AnalyticsRequest.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('analytics.enrollments', () => {
  let enrollments;
  let request;
  let dataEngineMock;
  let fixture;
  beforeEach(() => {
    dataEngineMock = new _DataEngine.default();

    _DataEngine.default.mockClear();

    enrollments = new _AnalyticsEnrollments.default();
  });
  it('should not be allowed to be called without new', () => {
    expect(() => (0, _AnalyticsEnrollments.default)()).toThrowErrorMatchingSnapshot();
  });
  it('should use the dataEngine object when it is passed', () => {
    const dataEngineMockObject = {};
    enrollments = new _AnalyticsEnrollments.default(dataEngineMockObject);
    expect(enrollments.dataEngine).toBe(dataEngineMockObject);
  });
  describe('.getQuery()', () => {
    beforeEach(() => {
      enrollments = new _AnalyticsEnrollments.default(new _DataEngine.default());
      request = new _AnalyticsRequest.default().addOrgUnitDimension('ImspTQPwCqd').addDimension('WZbXY0S00lP.de0FEHSIoxh').addDimension('WZbXY0S00lP.sWoqcoByYmD').addPeriodFilter('LAST_MONTH').withProgram('WSGAb5XwJ3Y').withStage('WZbXY0S00lP').withAsc('ENROLLMENTDATE').withOuMode('DESCENDANTS').withColumns('w75KJ2mc4zz').withPage(1).withPageSize(10);
      fixture = _fixtures.default.get('/api/analytics/enrollments');
      dataEngineMock.query.mockReturnValue(Promise.resolve({
        data: fixture
      }));
    });
    it('should be a function', () => {
      expect(enrollments.getQuery).toBeInstanceOf(Function);
    });
    it('should resolve a promise with data', () => enrollments.getQuery(request).then(data => {
      expect(data.width).toEqual(fixture.width);
      expect(data.height).toEqual(fixture.height);
    }));
  });
});