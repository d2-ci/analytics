"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryAll = exports.getTotal = exports.countQuery = exports.assignedTo = void 0;
// A count with no list: pageSize=1 gives the total in the pager
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

// The filter on units a data set or program is assigned to
exports.getTotal = getTotal;
const assignedTo = ({
  id,
  field
}) => `${field}.id:eq:${id}`;

// Queries as [key, query] pairs, sent together; the response is keyed count<i>
exports.assignedTo = assignedTo;
const queryAll = (engine, queries) => queries.length ? engine.query(Object.fromEntries(queries.map(([, query], i) => [`count${i}`, query]))) : {};
exports.queryAll = queryAll;