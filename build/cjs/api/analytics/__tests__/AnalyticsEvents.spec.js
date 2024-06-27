"use strict";

var _fixtures = _interopRequireDefault(require("../../../__fixtures__/fixtures.js"));

var _DataEngine = _interopRequireDefault(require("../__mocks__/DataEngine.js"));

var _AnalyticsEvents = _interopRequireDefault(require("../AnalyticsEvents.js"));

var _AnalyticsRequest = _interopRequireDefault(require("../AnalyticsRequest.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('analytics.events', () => {
  let events;
  let request;
  let dataEngineMock;
  let fixture;
  beforeEach(() => {
    dataEngineMock = new _DataEngine.default();

    _DataEngine.default.mockClear();

    events = new _AnalyticsEvents.default();
  });
  it('should not be allowed to be called without new', () => {
    expect(() => (0, _AnalyticsEvents.default)()).toThrowErrorMatchingSnapshot();
  });
  it('should use the dataEngine object when it is passed', () => {
    const dataEngineMockObject = {};
    events = new _AnalyticsEvents.default(dataEngineMockObject);
    expect(events.dataEngine).toBe(dataEngineMockObject);
  });
  describe('.getAggregate()', () => {
    beforeEach(() => {
      events = new _AnalyticsEvents.default(new _DataEngine.default());
      request = new _AnalyticsRequest.default().withLimit(10);
      fixture = _fixtures.default.get('/api/analytics/aggregate');
      dataEngineMock.query.mockReturnValue(Promise.resolve({
        data: fixture
      }));
    });
    it('should be a function', () => {
      expect(events.getAggregate).toBeInstanceOf(Function);
    });
    it('should resolve a promise with data', () => events.getAggregate(request).then(data => {
      expect(data).toEqual(fixture);
    }));
  });
  describe('.getCount()', () => {
    beforeEach(() => {
      events = new _AnalyticsEvents.default(new _DataEngine.default());
      request = new _AnalyticsRequest.default().withProgram('eBAyeGv0exc').addPeriodDimension('LAST_YEAR').addOrgUnitDimension('ImspTQPwCqd').addDimension('qrur9Dvnyt5:LT:50');
      fixture = _fixtures.default.get('/api/analytics/count');
      dataEngineMock.query.mockReturnValue(Promise.resolve({
        data: fixture
      }));
    });
    it('should be a function', () => {
      expect(events.getCount).toBeInstanceOf(Function);
    });
    it('should resolve a promise with data', () => events.getCount(request).then(data => {
      expect(data.count).toEqual(fixture.count);
      expect(data.extent).toEqual(fixture.extent);
    }));
  });
  describe('.getCluster()', () => {
    beforeEach(() => {
      events = new _AnalyticsEvents.default(new _DataEngine.default());
      request = new _AnalyticsRequest.default().withProgram('VBqh0ynB2wv').addOrgUnitDimension('ImspTQPwCqd').withStage('pTo4uMt3xur').withStartDate('2016-10-17').withEndDate('2017-10-17').withCoordinatesOnly(true).withBbox('-14.062500000000002,5.61598581915534,-11.25,8.407168163601076').withClusterSize(67265).withIncludeClusterPoints(false);
      fixture = _fixtures.default.get('/api/analytics/cluster');
      dataEngineMock.query.mockReturnValue(Promise.resolve({
        data: fixture
      }));
    });
    it('should be a function', () => {
      expect(events.getCluster).toBeInstanceOf(Function);
    });
    it('should resolve a promise with data', () => events.getCluster(request).then(data => {
      expect(data.width).toEqual(fixture.width);
      expect(data.height).toEqual(fixture.height);
    }));
  });
  describe('.getQuery()', () => {
    beforeEach(() => {
      events = new _AnalyticsEvents.default(new _DataEngine.default());
      request = new _AnalyticsRequest.default().addOrgUnitDimension('ImspTQPwCqd').addDimension('qrur9Dvnyt5:LT:50').addPeriodFilter('LAST_MONTH').withStage('Zj7UnCAulEk').withPage(1).withPageSize(5);
      fixture = _fixtures.default.get('/api/analytics/query');
      dataEngineMock.query.mockReturnValue(Promise.resolve({
        data: fixture
      }));
    });
    it('should be a function', () => {
      expect(events.getQuery).toBeInstanceOf(Function);
    });
    it('should resolve a promise with data', () => events.getQuery(request).then(data => {
      expect(data.width).toEqual(fixture.width);
      expect(data.height).toEqual(fixture.height);
    }));
  });
});