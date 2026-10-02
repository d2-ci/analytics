"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readLevels = exports.queryAll = exports.levelsQuery = exports.inGroup = exports.getTotal = exports.countQuery = exports.assignedTo = void 0;
/* Requests on organisationUnits, all metadata. Counts use pageSize=1: the
 * total is in the pager, so large hierarchies cost the same. */

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

// The filter on org units a data set or program ({ id, field }) is assigned to
exports.getTotal = getTotal;
const assignedTo = ({
  id,
  field
}) => `${field}.id:eq:${id}`;
exports.assignedTo = assignedTo;
const inGroup = groupId => `organisationUnitGroups.id:eq:${groupId}`;

/**
 * Sends `queries`, `[key, query]` pairs, in one request; the response for
 * the i-th is `count<i>`.
 */
exports.inGroup = inGroup;
const queryAll = (engine, queries) => queries.length ? engine.query(Object.fromEntries(queries.map(([, query], i) => [`count${i}`, query]))) : {};
exports.queryAll = queryAll;
const levelsQuery = exports.levelsQuery = {
  levels: {
    resource: 'organisationUnitLevels',
    params: {
      fields: 'id,level,displayName',
      paging: false
    }
  }
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