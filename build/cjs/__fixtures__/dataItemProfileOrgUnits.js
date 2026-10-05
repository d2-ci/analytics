"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.orgUnitProfileOf = exports.ORG_UNIT_METADATA = exports.ORG_UNIT_COVERAGE = void 0;
var _getDataItemProfile = require("../modules/dataItemProfile/getDataItemProfile.js");
var _dataItemProfileMetadata = require("./dataItemProfileMetadata.js");
/* Metadata and org unit coverage for the org unit compatibility specs */
const ORG_UNIT_METADATA = exports.ORG_UNIT_METADATA = {
  dataElements: {
    facility: {
      aggregationType: 'SUM',
      dataSets: (0, _dataItemProfileMetadata.inDataSets)(['Monthly'])
    },
    district: {
      aggregationType: 'SUM',
      dataSets: (0, _dataItemProfileMetadata.inDataSets)(['Quarterly'])
    },
    twoForms: {
      aggregationType: 'SUM',
      dataSets: (0, _dataItemProfileMetadata.inDataSets)(['Monthly', 'Weekly'])
    },
    twoLevels: {
      aggregationType: 'SUM',
      dataSets: (0, _dataItemProfileMetadata.inDataSets)(['Monthly', 'Quarterly'])
    },
    cappedAtDistrict: {
      aggregationType: 'SUM',
      dataSets: (0, _dataItemProfileMetadata.inDataSets)(['Monthly']),
      aggregationLevels: [2]
    },
    cappedWithDistrictForm: {
      aggregationType: 'SUM',
      dataSets: (0, _dataItemProfileMetadata.inDataSets)(['Monthly', 'Quarterly']),
      aggregationLevels: [2]
    },
    orphan: {
      aggregationType: 'SUM',
      dataSets: []
    }
  },
  dataSets: {
    MonthlyForm: {
      periodType: 'Monthly'
    }
  },
  programs: {
    eventProgra: {
      programType: 'WITHOUT_REGISTRATION'
    }
  },
  programIndicators: {
    pi: {
      program: 'eventProgra'
    },
    piByOwner: {
      program: 'eventProgra',
      orgUnitField: 'OWNER_AT_END'
    },
    piByRegistr: {
      program: 'eventProgra',
      orgUnitField: 'REGISTRATION'
    },
    piByAttribu: {
      program: 'eventProgra',
      orgUnitField: 'attributeAAA'
    }
  },
  indicators: {
    ratio: {
      numerator: '#{facility}',
      denominator: '#{district}'
    },
    facilityPlusDistrict: {
      numerator: '#{facility} + #{district}',
      denominator: '1'
    },
    completeness: {
      numerator: '#{facility}',
      denominator: 'R{MonthlyForm.REPORTING_RATE}'
    },
    partOfTotal: {
      numerator: '#{twoLevels}',
      denominator: '#{facility}'
    },
    casesPerFacility: {
      numerator: 'I{pi}',
      denominator: '#{facility}'
    },
    constantsOnly: {
      numerator: 'C{constantAA}',
      denominator: '[days]'
    }
  }
};
const orgUnitProfileOf = (id, dimensionItemType = 'DATA_ELEMENT') => (0, _getDataItemProfile.getDataItemProfile)({
  id,
  dimensionItemType
}, ORG_UNIT_METADATA);

/* A nation (level 1) with 2 districts (2) and 4 facilities (3).
 * MonthlyForm: 3 of the 4 facilities (missing facilityDDD, under districtBBB),
 * and the nation. QuarterlyForm: both districts. WeeklyForm: facilityDDD. */
exports.orgUnitProfileOf = orgUnitProfileOf;
const unit = (id, level, path) => ({
  id,
  level,
  path
});
const ORG_UNIT_COVERAGE = exports.ORG_UNIT_COVERAGE = {
  levels: [{
    id: 'levelNation',
    level: 1
  }, {
    id: 'levelDistri',
    level: 2
  }, {
    id: 'levelFacili',
    level: 3
  }],
  orgUnits: {
    nationUnit1: unit('nationUnit1', 1, '/nationUnit1'),
    districtAAA: unit('districtAAA', 2, '/nationUnit1/districtAAA'),
    districtBBB: unit('districtBBB', 2, '/nationUnit1/districtBBB'),
    facilityAAA: unit('facilityAAA', 3, '/nationUnit1/districtAAA/facilityAAA'),
    facilityDDD: unit('facilityDDD', 3, '/nationUnit1/districtBBB/facilityDDD')
  },
  rootIds: ['nationUnit1'],
  userOrgUnitIds: ['districtBBB'],
  // clinicGroup: facilityAAA and facilityDDD. mixedGroupA: districtBBB and facilityAAA
  groups: {
    clinicGroup: {
      3: 2
    },
    mixedGroupA: {
      2: 1,
      3: 1
    },
    emptyGroupA: {}
  },
  assignedOrgUnitCounts: {
    MonthlyForm: {
      1: 1,
      3: 3
    },
    QuarterlyForm: {
      2: 2
    },
    WeeklyForm: {
      3: 1
    },
    eventProgra: {
      3: 2
    }
  },
  counts: {
    nationUnit1: {
      totals: {
        1: 1,
        2: 2,
        3: 4
      },
      sources: {
        MonthlyForm: {
          byLevel: {
            1: 1,
            3: 3
          }
        },
        QuarterlyForm: {
          byLevel: {
            2: 2
          }
        },
        WeeklyForm: {
          byLevel: {
            3: 1
          }
        },
        eventProgra: {
          byLevel: {
            3: 2
          }
        }
      }
    },
    districtAAA: {
      totals: {
        2: 1,
        3: 2
      },
      sources: {
        MonthlyForm: {
          byLevel: {
            3: 2
          },
          ancestors: 1
        },
        QuarterlyForm: {
          byLevel: {
            2: 1
          }
        },
        WeeklyForm: {
          byLevel: {}
        },
        eventProgra: {
          byLevel: {
            3: 2
          }
        }
      }
    },
    districtBBB: {
      totals: {
        2: 1,
        3: 2
      },
      sources: {
        MonthlyForm: {
          byLevel: {
            3: 1
          },
          ancestors: 1
        },
        QuarterlyForm: {
          byLevel: {
            2: 1
          }
        },
        WeeklyForm: {
          byLevel: {
            3: 1
          }
        }
      }
    },
    facilityAAA: {
      totals: {
        3: 1
      },
      sources: {
        MonthlyForm: {
          byLevel: {
            3: 1
          },
          ancestors: 1
        },
        QuarterlyForm: {
          byLevel: {},
          ancestors: 1
        }
      }
    },
    facilityDDD: {
      totals: {
        3: 1
      },
      sources: {
        eventProgra: {
          byLevel: {}
        },
        MonthlyForm: {
          byLevel: {},
          ancestors: 1
        },
        QuarterlyForm: {
          byLevel: {},
          ancestors: 1
        },
        WeeklyForm: {
          byLevel: {
            3: 1
          }
        }
      }
    },
    'clinicGroup:3:': {
      totals: {
        3: 2
      },
      sources: {
        MonthlyForm: {
          byLevel: {
            3: 1
          },
          ancestors: 1
        },
        QuarterlyForm: {
          byLevel: {},
          ancestors: 2
        }
      }
    },
    'mixedGroupA:2:': {
      totals: {
        2: 1,
        3: 2
      },
      sources: {
        MonthlyForm: {
          byLevel: {
            3: 1
          },
          ancestors: 1
        }
      }
    },
    'mixedGroupA:3:': {
      totals: {
        3: 1
      },
      sources: {
        MonthlyForm: {
          byLevel: {
            3: 1
          },
          ancestors: 1
        }
      }
    },
    'mixedGroupA:2:districtAAA': {
      totals: {
        2: 0,
        3: 0
      },
      sources: {
        MonthlyForm: {
          byLevel: {
            3: 0
          },
          ancestors: 1
        }
      }
    },
    'mixedGroupA:3:districtAAA': {
      totals: {
        3: 1
      },
      sources: {
        MonthlyForm: {
          byLevel: {
            3: 1
          },
          ancestors: 1
        }
      }
    }
  }
};