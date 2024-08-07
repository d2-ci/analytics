import { dimensionsQuery, apiFetchDimensions } from '../dimensions.js';
let mockDataEngine;
let mockQueryFn;
const asyncCheckMatches = (_ref, done) => {
  let [queryDefinition, queryVariables, callCount = 1, callIndex = 0] = _ref;
  setTimeout(() => {
    expect(mockQueryFn).toHaveBeenCalledTimes(callCount);
    expect(mockQueryFn.mock.calls[callIndex][0]).toEqual(queryDefinition);
    expect(mockQueryFn.mock.calls[callIndex][1].variables).toEqual(queryVariables);
    done();
  });
};
describe('api: dimensions', () => {
  beforeEach(() => {
    mockQueryFn = jest.fn().mockResolvedValue({
      dimensions: {
        dimensions: []
      }
    });
    mockDataEngine = {
      query: mockQueryFn
    };
  });
  describe('apiFetchDimensions', () => {
    it('has correct entity and name property', done => {
      apiFetchDimensions(mockDataEngine, 'entireName');
      asyncCheckMatches([{
        dimensions: dimensionsQuery
      }, {
        nameProp: 'entireName'
      }], done);
    });
  });
});