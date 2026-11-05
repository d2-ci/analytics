"use strict";

var _AnalyticsRequest = _interopRequireDefault(require("../AnalyticsRequest.js"));
var _AnalyticsTrackedEntities = _interopRequireDefault(require("../AnalyticsTrackedEntities.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
describe('AnalyticsTrackedEntities options', () => {
  it.each([['getQuery', 'fetch', 'trackedEntities/query']])('.%s() should pass options to .%s()', async (method, target, path) => {
    const instance = new _AnalyticsTrackedEntities.default({});
    const spy = jest.spyOn(instance, target).mockResolvedValue({});
    const options = {
      signal: new AbortController().signal
    };
    await instance[method](new _AnalyticsRequest.default(), options);
    expect(spy).toHaveBeenCalledWith(expect.objectContaining({
      path
    }), options);
  });
});