"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.apiFetchOrganisationUnits = exports.apiFetchOrganisationUnitRoots = exports.apiFetchOrganisationUnitLevels = exports.apiFetchOrganisationUnitGroups = exports.apiFetchOrganisationUnit = void 0;
var _index = require("./index.js");
const orgUnitLevelsQuery = {
  resource: 'organisationUnitLevels',
  params: function () {
    let {
      displayNameProp = 'displayName'
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return {
      fields: `id,level,${displayNameProp}~rename(displayName),name`,
      paging: false
    };
  }
};
const orgUnitGroupsQuery = {
  resource: 'organisationUnitGroups',
  params: function () {
    let {
      displayNameProp = 'displayName'
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return {
      fields: `id,${displayNameProp}~rename(displayName),name`,
      paging: false
    };
  }
};
const orgUnitRootsQuery = {
  resource: 'organisationUnits',
  params: {
    fields: 'id,displayName,name',
    userDataViewFallback: true,
    paging: false
  }
};
const orgUnitsQuery = {
  resource: 'organisationUnits',
  params: _ref => {
    let {
      displayNameProp
    } = _ref;
    return {
      fields: `id,path,${displayNameProp}~rename(displayName),children::isNotEmpty`,
      level: 1,
      userDataViewFallback: true,
      paging: false
    };
  }
};
const orgUnitQuery = {
  resource: 'organisationUnits',
  id: _ref2 => {
    let {
      id
    } = _ref2;
    return id;
  },
  params: {
    fields: 'id,level,displayName~rename(name),path,parent[id,displayName~rename(name)],children[level]',
    userDataViewFallback: true,
    paging: false
  }
};
const apiFetchOrganisationUnitLevels = async dataEngine => {
  const orgUnitLevelsData = await dataEngine.query({
    orgUnitLevels: orgUnitLevelsQuery
  }, {
    onError: _index.onError
  });
  return orgUnitLevelsData.orgUnitLevels.organisationUnitLevels;
};
exports.apiFetchOrganisationUnitLevels = apiFetchOrganisationUnitLevels;
const apiFetchOrganisationUnitGroups = async (dataEngine, displayNameProp) => {
  const orgUnitGroupsData = await dataEngine.query({
    orgUnitGroups: orgUnitGroupsQuery
  }, {
    variables: {
      displayNameProp
    },
    onError: _index.onError
  });
  return orgUnitGroupsData.orgUnitGroups.organisationUnitGroups;
};
exports.apiFetchOrganisationUnitGroups = apiFetchOrganisationUnitGroups;
const apiFetchOrganisationUnitRoots = async dataEngine => {
  const orgUnitRootsData = await dataEngine.query({
    orgUnitRoots: orgUnitRootsQuery
  }, {
    onError: _index.onError
  });
  return orgUnitRootsData.orgUnitRoots.organisationUnits;
};

// TODO: Unused, previously used to load all org units for the tree, but that is done by the ui component internally now, remove?
exports.apiFetchOrganisationUnitRoots = apiFetchOrganisationUnitRoots;
const apiFetchOrganisationUnits = async (dataEngine, displayNameProp) => {
  const orgUnitsData = await dataEngine.query({
    orgUnits: orgUnitsQuery
  }, {
    variables: {
      displayNameProp
    },
    onError: _index.onError
  });
  return orgUnitsData.orgUnits.organisationUnits;
};
exports.apiFetchOrganisationUnits = apiFetchOrganisationUnits;
const apiFetchOrganisationUnit = async (dataEngine, id) => {
  const orgUnitData = await dataEngine.query({
    orgUnit: orgUnitQuery
  }, {
    variables: {
      id
    },
    onError: _index.onError
  });
  return orgUnitData.orgUnit;
};
exports.apiFetchOrganisationUnit = apiFetchOrganisationUnit;