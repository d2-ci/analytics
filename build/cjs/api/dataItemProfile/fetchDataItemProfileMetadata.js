"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchDataItemProfileMetadata = void 0;
var _expressionOperands = require("../../modules/dataItemProfile/expressionOperands.js");
var _getDataItemProfile = require("../../modules/dataItemProfile/getDataItemProfile.js");
var _dataSets = require("../../modules/dataSets.js");
var _dataTypes = require("../../modules/dataTypes.js");
var _assignedOrgUnitCounts = require("./assignedOrgUnitCounts.js");
var _metadataQueries = require("./metadataQueries.js");
var _orgUnitQueries = require("./orgUnitQueries.js");
const createPending = () => Object.fromEntries(_metadataQueries.METADATA_RESOURCES.map(resource => [resource, new Set()]));

// The program of program.element or program.attribute, if the id names one
const addProgramOfItem = (pending, id) => {
  if (id.includes('.')) {
    pending.programs.add(id.split('.')[0]);
  }
};
const addItem = (pending, {
  id,
  dimensionItemType
}) => {
  switch (dimensionItemType) {
    case _dataTypes.DIMENSION_TYPE_DATA_ELEMENT:
    case _dataTypes.DIMENSION_TYPE_DATA_ELEMENT_OPERAND:
      pending.dataElements.add(id.split('.')[0]);
      break;
    case _dataSets.REPORTING_RATE:
      pending.dataSets.add(id.split('.')[0]);
      break;
    case _dataTypes.DIMENSION_TYPE_INDICATOR:
      pending.indicators.add(id);
      break;
    case _dataTypes.DIMENSION_TYPE_EXPRESSION_DIMENSION_ITEM:
      pending.expressionDimensionItems.add(id);
      break;
    case _dataTypes.DIMENSION_TYPE_PROGRAM_INDICATOR:
      pending.programIndicators.add(id);
      break;
    case _dataTypes.DIMENSION_TYPE_PROGRAM_DATA_ELEMENT:
    case _dataTypes.DIMENSION_TYPE_PROGRAM_DATA_ELEMENT_OPTION:
    case _dataTypes.DIMENSION_TYPE_PROGRAM_ATTRIBUTE:
    case _dataTypes.DIMENSION_TYPE_PROGRAM_ATTRIBUTE_OPTION:
    case _dataTypes.DIMENSION_TYPE_EVENT_DATA_ITEM:
      addProgramOfItem(pending, id);
      break;
    default:
    // Other items need no metadata
  }
};
const RESOURCE_BY_OPERAND_TYPE = {
  [_dataTypes.DIMENSION_TYPE_DATA_ELEMENT]: 'dataElements',
  [_dataSets.REPORTING_RATE]: 'dataSets',
  [_dataTypes.DIMENSION_TYPE_INDICATOR]: 'indicators',
  [_dataTypes.DIMENSION_TYPE_PROGRAM_INDICATOR]: 'programIndicators'
};
const PROGRAM_ITEM_OPERAND_TYPES = new Set([_dataTypes.DIMENSION_TYPE_PROGRAM_DATA_ELEMENT, _dataTypes.DIMENSION_TYPE_PROGRAM_ATTRIBUTE]);
const addOperands = (pending, expression) => (0, _expressionOperands.parseExpressionOperands)(expression).forEach(({
  type,
  id
}) => {
  const resource = RESOURCE_BY_OPERAND_TYPE[type];
  if (resource) {
    pending[resource].add(id);
  } else if (PROGRAM_ITEM_OPERAND_TYPES.has(type)) {
    addProgramOfItem(pending, id);
  }
});

// What the fetched objects refer to: operands of expressions, programs of program indicators
const getReferences = fetched => {
  const pending = createPending();
  Object.values(fetched.indicators).forEach(({
    numerator,
    denominator
  }) => {
    addOperands(pending, numerator);
    addOperands(pending, denominator);
  });
  Object.values(fetched.expressionDimensionItems).forEach(({
    expression
  }) => addOperands(pending, expression));
  Object.values(fetched.programIndicators).forEach(({
    program
  }) => program && pending.programs.add(program));
  return pending;
};
const mergeMetadata = (metadata, fetched) => Object.fromEntries(_metadataQueries.METADATA_RESOURCES.map(resource => [resource, {
  ...metadata[resource],
  ...fetched[resource]
}]));

/* One round: fetch what is pending and not fetched yet, then what it refers
 * to (indicators nest through N{}). Each id is fetched once, so the rounds
 * end when nothing new is referred to. */
const fetchRound = async (dataEngine, {
  metadata,
  pending,
  requested,
  signal
}) => {
  const toFetch = _metadataQueries.METADATA_RESOURCES.map(resource => [resource, [...pending[resource]].filter(id => !requested[resource].has(id))]).filter(([, ids]) => ids.length);
  if (!toFetch.length) {
    return metadata;
  }
  const responses = await Promise.all(toFetch.map(([resource, ids]) => {
    ids.forEach(id => requested[resource].add(id));
    return dataEngine.query({
      [resource]: _metadataQueries.dataItemProfileMetadataQueries[resource]
    }, {
      variables: {
        ids
      },
      signal
    });
  }));
  const fetched = (0, _metadataQueries.normalizeDataItemProfileMetadata)(Object.assign({}, ...responses));
  return fetchRound(dataEngine, {
    metadata: mergeMetadata(metadata, fetched),
    pending: getReferences(fetched),
    requested,
    signal
  });
};

// What `known` metadata already holds counts as requested
const getRequested = known => Object.fromEntries(_metadataQueries.METADATA_RESOURCES.map(resource => {
  var _known$resource;
  return [resource, new Set(Object.keys((_known$resource = known === null || known === void 0 ? void 0 : known[resource]) !== null && _known$resource !== void 0 ? _known$resource : {}))];
}));
const fetchAssignedCounts = async (dataEngine, {
  items,
  metadata,
  known,
  levels,
  signal
}) => {
  var _known$assignedOrgUni;
  const knownCounts = (_known$assignedOrgUni = known === null || known === void 0 ? void 0 : known.assignedOrgUnitCounts) !== null && _known$assignedOrgUni !== void 0 ? _known$assignedOrgUni : {};
  // Only the sources the items' profiles use, and not counted yet
  const sourceKeys = (0, _assignedOrgUnitCounts.getDataItemProfileSourceKeys)(items.map(item => (0, _getDataItemProfile.getDataItemProfile)(item, metadata))).filter(({
    id
  }) => !knownCounts[id]);
  const counted = await (0, _assignedOrgUnitCounts.fetchAssignedOrgUnitCounts)(dataEngine, sourceKeys, {
    levels,
    signal
  });
  return {
    orgUnitLevels: counted.levels,
    assignedOrgUnitCounts: {
      ...knownCounts,
      ...counted.assignedOrgUnitCounts
    }
  };
};

/**
 * Fetches the metadata getDataItemProfile needs for `items`
 * ({ id, dimensionItemType }): data elements, data sets, indicators and their
 * operands, nested indicators, expression dimension items, program
 * indicators and programs. By default it also counts the org units each data
 * set and program is assigned to per level (fetchAssignedOrgUnitCounts), for
 * the profile's assigned org unit levels, with the levels (`orgUnitLevels`);
 * `{ withAssignedOrgUnitCounts: false }` leaves them out. `known`, metadata
 * fetched before, is reused: only what it lacks is fetched. `signal` cancels
 * the requests.
 */
const fetchDataItemProfileMetadata = async (dataEngine, items = [], {
  withAssignedOrgUnitCounts = true,
  known,
  signal
} = {}) => {
  const pending = createPending();
  items.forEach(item => addItem(pending, item));

  // The levels, alongside the first round
  const levelsRequest = withAssignedOrgUnitCounts && !(known !== null && known !== void 0 && known.orgUnitLevels) ? dataEngine.query(_orgUnitQueries.levelsQuery, {
    signal
  }).then(_orgUnitQueries.readLevels) : Promise.resolve(known === null || known === void 0 ? void 0 : known.orgUnitLevels);
  const [metadata, levels] = await Promise.all([fetchRound(dataEngine, {
    metadata: mergeMetadata((0, _metadataQueries.normalizeDataItemProfileMetadata)(), known !== null && known !== void 0 ? known : {}),
    pending,
    requested: getRequested(known),
    signal
  }), levelsRequest]);
  return withAssignedOrgUnitCounts ? {
    ...metadata,
    ...(await fetchAssignedCounts(dataEngine, {
      items,
      metadata,
      known,
      levels,
      signal
    }))
  } : metadata;
};
exports.fetchDataItemProfileMetadata = fetchDataItemProfileMetadata;