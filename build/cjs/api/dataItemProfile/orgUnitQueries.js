"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readLevels = exports.queryAll = exports.levelsQuery = exports.inGroup = exports.getTotal = exports.getAncestorIds = exports.countQuery = exports.assignedTo = void 0;
var _organisationUnits = require("../organisationUnits.js");
/* Requests on organisationUnits, all metadata. Counts use pageSize=1: the
 * total is in the pager, so a large hierarchy costs no more per count. */

// A count with no list
const countQuery = filter => ({
  resource: 'organisationUnits',
  params: {
    filter,
    fields: 'id',
    pageSize: 1
  }
});
exports.countQuery = countQuery;
const getTotal = response => {
  var _response$pager$total, _response$pager;
  return (_response$pager$total = response === null || response === void 0 || (_response$pager = response.pager) === null || _response$pager === void 0 ? void 0 : _response$pager.total) !== null && _response$pager$total !== void 0 ? _response$pager$total : 0;
};
exports.getTotal = getTotal;
const getAncestorIds = ({
  id,
  path
}) => path.split('/').filter(ancestorId => ancestorId && ancestorId !== id);

// The filter on org units a data set or program ({ id, field }) is assigned to
exports.getAncestorIds = getAncestorIds;
const assignedTo = ({
  id,
  field
}) => `${field}.id:eq:${id}`;
exports.assignedTo = assignedTo;
const inGroup = groupId => `organisationUnitGroups.id:eq:${groupId}`;

// Requests sent at once: a few hundred in one go make the server queue them
exports.inGroup = inGroup;
const BATCH_SIZE = 100;
const getQueryKey = ({
  resource,
  params
}) => JSON.stringify([resource, params]);
const queryBatch = async (engine, batch, signal) => {
  const response = await engine.query(Object.fromEntries(batch.map((query, i) => [`query${i}`, query])), {
    signal
  });
  return batch.map((_, i) => response[`query${i}`]);
};

/**
 * Sends the queries of `[key, query]` pairs and gives `{ responses, requests }`:
 * the responses in the same order, and how many requests were sent. Each
 * distinct query is sent once (siblings share their ancestors' counts), in
 * batches of BATCH_SIZE one after the other; the data engine sends one
 * request per query.
 */
const queryAll = async (engine, queries, {
  signal
} = {}) => {
  const indexByKey = new Map();
  const distinct = [];
  const positions = queries.map(([, query]) => {
    const key = getQueryKey(query);
    if (!indexByKey.has(key)) {
      indexByKey.set(key, distinct.length);
      distinct.push(query);
    }
    return indexByKey.get(key);
  });
  const batches = Array.from({
    length: Math.ceil(distinct.length / BATCH_SIZE)
  }, (_, i) => distinct.slice(i * BATCH_SIZE, (i + 1) * BATCH_SIZE));
  const responses = await batches.reduce(async (done, batch) => [...(await done), ...(await queryBatch(engine, batch, signal))], Promise.resolve([]));
  return {
    responses: positions.map(index => responses[index]),
    requests: distinct.length
  };
};
exports.queryAll = queryAll;
const levelsQuery = exports.levelsQuery = {
  levels: _organisationUnits.orgUnitLevelsQuery
};
const readLevels = response => {
  var _response$levels$orga, _response$levels;
  return ((_response$levels$orga = response === null || response === void 0 || (_response$levels = response.levels) === null || _response$levels === void 0 ? void 0 : _response$levels.organisationUnitLevels) !== null && _response$levels$orga !== void 0 ? _response$levels$orga : []).map(({
    id,
    level,
    displayName
  }) => ({
    id,
    level,
    name: displayName
  })).sort((a, b) => a.level - b.level);
};
exports.readLevels = readLevels;