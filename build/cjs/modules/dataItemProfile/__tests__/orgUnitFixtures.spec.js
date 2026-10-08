"use strict";

var _fs = _interopRequireDefault(require("fs"));
var _path = _interopRequireDefault(require("path"));
var _fakeOrgUnitServer = require("../../../__fixtures__/fakeOrgUnitServer.js");
var _assignedOrgUnitCounts = require("../../../api/dataItemProfile/assignedOrgUnitCounts.js");
var _fetchOrgUnitCoverage = require("../../../api/dataItemProfile/fetchOrgUnitCoverage.js");
var _metadataQueries = require("../../../api/dataItemProfile/metadataQueries.js");
var _getDataItemProfileOrgUnitCompatibility = require("../compatibility/getDataItemProfileOrgUnitCompatibility.js");
var _getDataItemProfile = require("../getDataItemProfile.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/* The fixtures come from the test tool in dhis2/maps-tools
 * (test-data-item-profile, org unit groups): analytics' answers on 2.40 to
 * 2.44 for data sets and programs assigned at different levels, on the
 * tool's own org units. Each case is rebuilt here: its hierarchy and
 * assignments become a fake server, and the library judges the selection
 * from metadata as it would on a real one. */
const FIXTURES_DIR = _path.default.join(__dirname, '../../../__fixtures__/org-units');
const readFixture = name => JSON.parse(_fs.default.readFileSync(_path.default.join(FIXTURES_DIR, `${name}.json`)));
const CASE_GROUPS = ['entered-above', 'partly-assigned', 'mixed-levels', 'aggregation-levels', 'org-unit-groups', 'user-org-units', 'programs'];

/* Where the tool's prediction differs from the library's on purpose (the
 * analytics answers agree with both) */
const PREDICTION_DIFFERENCES = {
  // One operand: the library gives the element's reason, OPERAND_PARTIAL is for expressions of several
  'ou-mixed-indicator__F1': {
    status: 'partial',
    reasons: ['ASSIGNED_AT_HIGHER_LEVEL']
  }
};

/* Cases at the region, where the tool leaves out PARTLY_ASSIGNED (only some
 * of its districts or facilities are assigned): the library notes it */
const TOOL_LEAVES_OUT_PARTLY_ASSIGNED = new Set(['ou-above__level-3-region', 'ou-above__region', 'ou-agg-d1-3__region', 'ou-prog-event__region']);

// The tool's names for the library's reasons
const REASON_BY_TOOL_NAME = {
  BELOW_COLLECTION: 'ASSIGNED_AT_HIGHER_LEVEL',
  AGGREGATION_LEVEL: 'STOPPED_BY_AGGREGATION_LEVEL',
  ORG_UNIT_FIELD: 'ANY_ORG_UNIT'
};

// Ids the library reads as org unit uids (11 characters)
const toUid = (prefix, key) => `${prefix}${key}xxxxxxxxxxx`.slice(0, 11);
const orgUnitUid = key => toUid('orgUnit', key);
const groupUid = key => toUid('groupOf', key);
const sourceUid = name => toUid('src', name.replace(/[^a-zA-Z0-9]/g, '').slice(-8));

// The tool's root region sits under a level 1 org unit, as on the server
const ROOT = 'root';
const getPath = (key, orgUnits) => {
  var _orgUnits$key$parent;
  return key === ROOT ? `/${orgUnitUid(ROOT)}` : `${getPath((_orgUnits$key$parent = orgUnits[key].parent) !== null && _orgUnits$key$parent !== void 0 ? _orgUnits$key$parent : ROOT, orgUnits)}/${orgUnitUid(key)}`;
};
const getSources = ({
  collectionSources = [],
  operands = []
}) => [...collectionSources, ...operands.flatMap(getSources)];
const createServer = (hierarchy, item) => {
  const sources = getSources(item);
  const assignedTo = (key, field) => sources.filter(source => source[field] && source.orgUnits.includes(key)).map(source => sourceUid(source[field]));
  const orgUnits = Object.entries({
    [ROOT]: {
      level: 1
    },
    ...hierarchy.orgUnits
  }).map(([key, {
    level
  }]) => ({
    id: orgUnitUid(key),
    level,
    path: getPath(key, hierarchy.orgUnits),
    dataSets: assignedTo(key, 'dataSet'),
    programs: assignedTo(key, 'program')
  }));
  const groups = Object.fromEntries(Object.entries(hierarchy.groups).map(([key, members]) => [groupUid(key), members.map(orgUnitUid)]));
  const userOrgUnits = [orgUnitUid('region')];
  return (0, _fakeOrgUnitServer.createFakeOrgUnitServer)({
    orgUnits,
    groups,
    user: {
      organisationUnits: userOrgUnits,
      dataViewOrganisationUnits: userOrgUnits
    }
  });
};
const toDataElement = ({
  aggregationType = 'SUM',
  collectionSources
}) => {
  var _collectionSources$fi;
  return {
    aggregationType,
    ...(((_collectionSources$fi = collectionSources.find(({
      aggregationLevels
    }) => aggregationLevels)) === null || _collectionSources$fi === void 0 ? void 0 : _collectionSources$fi.aggregationLevels) && {
      aggregationLevels: collectionSources.find(({
        aggregationLevels
      }) => aggregationLevels).aggregationLevels
    }),
    dataSetElements: collectionSources.map(({
      dataSet,
      periodType
    }) => ({
      dataSet: {
        id: sourceUid(dataSet),
        periodType
      }
    }))
  };
};

// An org unit data element's id, for a program indicator placed by one
const ORG_UNIT_DATA_ELEMENT = 'orgUnitDeAA';

// The metadata the library would fetch for the case's item
const getMetadata = (itemId, item) => {
  var _item$collectionSourc;
  const [source] = (_item$collectionSourc = item.collectionSources) !== null && _item$collectionSourc !== void 0 ? _item$collectionSourc : [];
  switch (item.dimensionItemType) {
    case 'INDICATOR':
      return (0, _metadataQueries.normalizeDataItemProfileMetadata)({
        indicators: [{
          id: itemId,
          numerator: item.numerator,
          denominator: item.denominator
        }],
        dataElements: item.operands.map(operand => ({
          id: operand.id,
          ...toDataElement(operand)
        }))
      });
    case 'PROGRAM_INDICATOR':
      return (0, _metadataQueries.normalizeDataItemProfileMetadata)({
        programIndicators: [{
          id: itemId,
          program: {
            id: sourceUid(source.program)
          },
          orgUnitField: source.orgUnitField === 'DATA_ELEMENT' ? ORG_UNIT_DATA_ELEMENT : source.orgUnitField
        }],
        programs: [{
          id: sourceUid(source.program)
        }]
      });
    default:
      return (0, _metadataQueries.normalizeDataItemProfileMetadata)({
        dataElements: [{
          id: itemId,
          ...toDataElement(item)
        }]
      });
  }
};
const toSelectionItem = (key, hierarchy) => {
  if (hierarchy.orgUnits[key]) {
    return orgUnitUid(key);
  }
  return key.startsWith('OU_GROUP-') ? `OU_GROUP-${groupUid(key.slice('OU_GROUP-'.length))}` : key;
};
const judgeCase = async (hierarchy, {
  item,
  query
}) => {
  const itemId = 'itemUnderTe';
  const profile = (0, _getDataItemProfile.getDataItemProfile)({
    id: itemId,
    dimensionItemType: item.dimensionItemType
  }, getMetadata(itemId, item));
  const orgUnits = query.orgUnits.map(key => toSelectionItem(key, hierarchy));
  const coverage = await (0, _fetchOrgUnitCoverage.fetchOrgUnitCoverage)(createServer(hierarchy, item).createEngine(),
  // With the totals, to check PARTLY_ASSIGNED too
  {
    sourceKeys: (0, _assignedOrgUnitCounts.getDataItemProfileSourceKeys)([profile]),
    orgUnits,
    withAssignmentTotals: true
  });
  return (0, _getDataItemProfileOrgUnitCompatibility.getDataItemProfileOrgUnitCompatibility)(profile, {
    orgUnits
  }, {
    orgUnitCoverage: coverage
  })[0];
};
const getExpected = ({
  id,
  expected,
  observed
}) => {
  if (PREDICTION_DIFFERENCES[id]) {
    return PREDICTION_DIFFERENCES[id];
  }
  const isRefused = Object.values(observed).every(({
    error
  }) => error === null || error === void 0 ? void 0 : error.startsWith('E7143'));
  if (isRefused) {
    return {
      status: 'none',
      reasons: ['EMPTY_GROUP']
    };
  }
  const reasons = expected.reasons.map(reason => {
    var _REASON_BY_TOOL_NAME$;
    return (_REASON_BY_TOOL_NAME$ = REASON_BY_TOOL_NAME[reason]) !== null && _REASON_BY_TOOL_NAME$ !== void 0 ? _REASON_BY_TOOL_NAME$ : reason;
  });
  return {
    status: expected.compatibility,
    reasons: TOOL_LEAVES_OUT_PARTLY_ASSIGNED.has(id) ? [...reasons, 'PARTLY_ASSIGNED'] : reasons
  };
};

/* What analytics must have returned on every version for the library's
 * status: none, nothing (or the refusal of an empty group); partial, some
 * values (the ones that reach the org unit); full, never an error. A full
 * result says nothing is left out, not that there is data: a program with no
 * event in an org unit gives nothing there. */
const ANSWERS_BY_STATUS = {
  none: ['EMPTY'],
  partial: ['VALUE'],
  full: ['VALUE', 'EMPTY']
};
const agreesWithAnalytics = ({
  status,
  reasons
}, observed) => Object.values(observed).every(answer => reasons.includes('EMPTY_GROUP') ? answer.status === 'ERROR' : ANSWERS_BY_STATUS[status].includes(answer.status));
describe('org unit fixtures', () => {
  describe.each(CASE_GROUPS)('%s', group => {
    const {
      hierarchy,
      cases
    } = readFixture(group);
    it.each(cases.map(fixtureCase => [fixtureCase.id, fixtureCase]))('%s: the library judges as the tool expects, and as analytics answered', async (_, fixtureCase) => {
      const result = await judgeCase(hierarchy, fixtureCase);
      expect({
        status: result.status,
        reasons: result.reasons
      }).toEqual(getExpected(fixtureCase));
      expect(agreesWithAnalytics(result, fixtureCase.observed)).toBe(true);
    });
  });

  // The org unit requests are recorded with the period ones, in metadata-shapes.json
  describe('the metadata requests, as each version answered them', () => {
    const {
      versions
    } = JSON.parse(_fs.default.readFileSync(_path.default.join(FIXTURES_DIR, '../period-types/metadata-shapes.json')));
    describe.each(Object.entries(versions))('%s', (_, {
      requests
    }) => {
      const responseOf = name => requests.find(request => request.name === name).response;
      it('give data elements their aggregation levels', () => {
        const {
          dataElements
        } = (0, _metadataQueries.normalizeDataItemProfileMetadata)({
          dataElements: responseOf('dataElements-aggregationLevels')
        });
        expect(Object.values(dataElements).map(({
          aggregationLevels
        }) => aggregationLevels)).toContainEqual([2, 3]);
      });
      it('give program indicators their program and orgUnitField', () => {
        const response = responseOf('programIndicators');
        const {
          programIndicators
        } = (0, _metadataQueries.normalizeDataItemProfileMetadata)({
          programIndicators: response
        });
        const read = Object.entries(programIndicators).map(([id, {
          program,
          orgUnitField
        }]) => ({
          id,
          program,
          orgUnitField
        }));
        expect(read).toEqual(response.programIndicators.map(({
          id,
          program,
          orgUnitField
        }) => ({
          id,
          program: program.id,
          orgUnitField
        })));
        expect(read.some(({
          orgUnitField
        }) => orgUnitField)).toBe(true);
      });
      it('give the user data view org units', () => {
        expect(responseOf('me-ptt-user').dataViewOrganisationUnits).toHaveLength(1);
      });
    });
  });
});