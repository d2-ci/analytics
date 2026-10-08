"use strict";

var _coverageCounts = require("../coverageCounts.js");
describe('coverageCounts', () => {
  it('records totals, source counts per level, and ancestors that add up', () => {
    const counts = {};
    (0, _coverageCounts.recordCount)(counts, ['districtAAA', 'total', 3], 4);
    (0, _coverageCounts.recordCount)(counts, ['districtAAA', 'formMonth', 3], 2);
    (0, _coverageCounts.recordCount)(counts, ['groupKey', 'formMonth', 'ancestors'], 1);
    (0, _coverageCounts.recordCount)(counts, ['groupKey', 'formMonth', 'ancestors'], 2);
    expect(counts).toEqual({
      districtAAA: {
        totals: {
          3: 4
        },
        sources: {
          formMonth: {
            byLevel: {
              3: 2
            }
          }
        }
      },
      groupKey: {
        totals: {},
        sources: {
          formMonth: {
            byLevel: {},
            ancestors: 3
          }
        }
      }
    });
  });
  it('tells a count of 0 from one not fetched', () => {
    const counts = {};
    (0, _coverageCounts.recordCount)(counts, ['districtAAA', 'formMonth', 3], 0);
    (0, _coverageCounts.recordCount)(counts, ['districtAAA', 'formMonth', 'ancestors'], 0);
    expect((0, _coverageCounts.isCounted)(counts, ['districtAAA', 'formMonth', 3])).toBe(true);
    expect((0, _coverageCounts.isCounted)(counts, ['districtAAA', 'formMonth', 'ancestors'])).toBe(true);
    expect((0, _coverageCounts.isCounted)(counts, ['districtAAA', 'formMonth', 2])).toBe(false);
    expect((0, _coverageCounts.isCounted)(counts, ['districtAAA', 'formQuart', 3])).toBe(false);
    expect((0, _coverageCounts.isCounted)(counts, ['districtAAA', 'total', 3])).toBe(false);
    expect((0, _coverageCounts.isCounted)(undefined, ['districtAAA', 'total', 3])).toBe(false);
  });
  it('merges counts source by source and level by level', () => {
    expect((0, _coverageCounts.mergeCounts)({
      districtAAA: {
        totals: {
          3: 4
        },
        sources: {
          formMonth: {
            byLevel: {
              3: 2
            },
            ancestors: 1
          }
        }
      }
    }, {
      districtAAA: {
        totals: {
          2: 1
        },
        sources: {
          formMonth: {
            byLevel: {
              2: 0
            }
          },
          formQuart: {
            byLevel: {
              2: 1
            }
          }
        }
      },
      districtBBB: {
        totals: {},
        sources: {}
      }
    })).toEqual({
      districtAAA: {
        totals: {
          2: 1,
          3: 4
        },
        sources: {
          formMonth: {
            byLevel: {
              2: 0,
              3: 2
            },
            ancestors: 1
          },
          formQuart: {
            byLevel: {
              2: 1
            }
          }
        }
      },
      districtBBB: {
        totals: {},
        sources: {}
      }
    });
    expect((0, _coverageCounts.mergeCounts)()).toEqual({});
  });
});