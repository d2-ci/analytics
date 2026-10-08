"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchSelectionOrgUnits = void 0;
var _orgUnitSelection = require("../../modules/dataItemProfile/orgUnits/orgUnitSelection.js");
var _orgUnitQueries = require("./orgUnitQueries.js");
const ORG_UNIT_FIELDS = 'id,level,path,displayName';
const orgUnitsQuery = filter => ({
  resource: 'organisationUnits',
  params: {
    filter,
    fields: ORG_UNIT_FIELDS,
    paging: false
  }
});
const userOrgUnitsQuery = {
  resource: 'me',
  params: {
    fields: `organisationUnits[${ORG_UNIT_FIELDS}],dataViewOrganisationUnits[${ORG_UNIT_FIELDS}]`
  }
};
const byId = (orgUnits = []) => Object.fromEntries(orgUnits.map(({
  id,
  level,
  path,
  displayName
}) => [id, {
  id,
  level,
  path,
  name: displayName
}]));

/**
 * The org units a selection (DV's org unit items) needs, in one request,
 * beyond those `previous` (an earlier coverage) knows: the levels, the
 * selection's org units, the roots and the user's org units. The roots are
 * always loaded: with a single root, its counts are the counts across the
 * hierarchy. Gives `{ levels, orgUnits, rootIds, userOrgUnitIds, requests }`.
 */
const fetchSelectionOrgUnits = async (engine, {
  orgUnitItems,
  previous,
  signal
}) => {
  var _previous$orgUnits, _previous$rootIds, _previous$levels, _response$me, _response$me2, _response$roots$organ, _response$roots, _previous$userOrgUnit, _response$orgUnits, _response$roots2;
  const {
    orgUnitIds,
    needsUserOrgUnits
  } = (0, _orgUnitSelection.getOrgUnitsToFetch)(orgUnitItems);
  const known = (_previous$orgUnits = previous === null || previous === void 0 ? void 0 : previous.orgUnits) !== null && _previous$orgUnits !== void 0 ? _previous$orgUnits : {};
  const missingIds = orgUnitIds.filter(id => !known[id]);
  const fetchRoots = !(previous !== null && previous !== void 0 && (_previous$rootIds = previous.rootIds) !== null && _previous$rootIds !== void 0 && _previous$rootIds.length);
  const fetchUser = needsUserOrgUnits && !(previous !== null && previous !== void 0 && previous.userOrgUnitIds);
  const query = {
    ...(!(previous !== null && previous !== void 0 && (_previous$levels = previous.levels) !== null && _previous$levels !== void 0 && _previous$levels.length) && _orgUnitQueries.levelsQuery),
    ...(missingIds.length && {
      orgUnits: orgUnitsQuery(`id:in:[${missingIds.join(',')}]`)
    }),
    ...(fetchRoots && {
      roots: orgUnitsQuery('level:eq:1')
    }),
    ...(fetchUser && {
      me: userOrgUnitsQuery
    })
  };
  const requests = Object.keys(query).length;
  const response = requests ? await engine.query(query, {
    signal
  }) : {};
  // Analytics reads the user's data view org units when there are some
  const userOrgUnits = (_response$me = response.me) !== null && _response$me !== void 0 && (_response$me = _response$me.dataViewOrganisationUnits) !== null && _response$me !== void 0 && _response$me.length ? response.me.dataViewOrganisationUnits : (_response$me2 = response.me) === null || _response$me2 === void 0 ? void 0 : _response$me2.organisationUnits;
  const rootIds = fetchRoots ? ((_response$roots$organ = (_response$roots = response.roots) === null || _response$roots === void 0 ? void 0 : _response$roots.organisationUnits) !== null && _response$roots$organ !== void 0 ? _response$roots$organ : []).map(({
    id
  }) => id) : previous.rootIds;
  const userOrgUnitIds = fetchUser ? (userOrgUnits !== null && userOrgUnits !== void 0 ? userOrgUnits : []).map(({
    id
  }) => id) : (_previous$userOrgUnit = previous === null || previous === void 0 ? void 0 : previous.userOrgUnitIds) !== null && _previous$userOrgUnit !== void 0 ? _previous$userOrgUnit : null;
  return {
    levels: response.levels ? (0, _orgUnitQueries.readLevels)(response) : previous.levels,
    orgUnits: {
      ...known,
      ...byId((_response$orgUnits = response.orgUnits) === null || _response$orgUnits === void 0 ? void 0 : _response$orgUnits.organisationUnits),
      ...byId((_response$roots2 = response.roots) === null || _response$roots2 === void 0 ? void 0 : _response$roots2.organisationUnits),
      ...byId(userOrgUnits)
    },
    rootIds,
    userOrgUnitIds,
    requests
  };
};
exports.fetchSelectionOrgUnits = fetchSelectionOrgUnits;