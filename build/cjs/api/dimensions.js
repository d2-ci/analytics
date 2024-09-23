"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.programsQuery = exports.itemsByDimensionQuery = exports.indicatorsQuery = exports.indicatorGroupsQuery = exports.dimensionsQuery = exports.dataSetsQuery = exports.dataItemsQuery = exports.dataElementsQuery = exports.dataElementOperandsQuery = exports.dataElementGroupsQuery = exports.apiFetchRecommendedIds = exports.apiFetchOptions = exports.apiFetchItemsByDimension = exports.apiFetchGroups = exports.apiFetchDimensions = void 0;
var _objectClean = _interopRequireDefault(require("d2-utilizr/lib/objectClean"));
var _dataTypes = require("../modules/dataTypes.js");
var _index = require("./index.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Query definitions
const dimensionsQuery = {
  resource: 'dimensions',
  params: _ref => {
    let {
      nameProp
    } = _ref;
    return {
      fields: `id,${nameProp}~rename(name),dimensionType,dataDimensionType`,
      order: `${nameProp}:asc`,
      paging: false
    };
  }
};
exports.dimensionsQuery = dimensionsQuery;
const recommendedDimensionsQuery = {
  resource: 'dimensions/recommendations',
  params: _ref2 => {
    let {
      dxIds,
      ouIds
    } = _ref2;
    const dimensions = [];
    if (dxIds.length) {
      dimensions.push(`dx:${dxIds.join(';')}`);
    }
    if (ouIds.length) {
      dimensions.push(`ou:${ouIds.join(';')}`);
    }
    return {
      fields: 'id',
      dimension: dimensions
    };
  }
};
const dataItemsQuery = {
  resource: 'dataItems',
  params: _ref3 => {
    let {
      nameProp,
      filter,
      searchTerm,
      page
    } = _ref3;
    const filters = [];

    // TODO: Extract all of this logic out of the query?
    if ((filter === null || filter === void 0 ? void 0 : filter.dataType) === _dataTypes.DIMENSION_TYPE_EVENT_DATA_ITEM) {
      filters.push(`dimensionItemType:in:[${_dataTypes.DIMENSION_TYPE_PROGRAM_DATA_ELEMENT},${_dataTypes.DIMENSION_TYPE_PROGRAM_ATTRIBUTE}]`);
    } else if (filter !== null && filter !== void 0 && filter.dataType && filter.dataType !== _dataTypes.DIMENSION_TYPE_ALL) {
      filters.push(`dimensionItemType:eq:${filter.dataType}`);
    }
    if (filter !== null && filter !== void 0 && filter.group && filter.group !== _dataTypes.DIMENSION_TYPE_ALL && [_dataTypes.DIMENSION_TYPE_EVENT_DATA_ITEM, _dataTypes.DIMENSION_TYPE_PROGRAM_INDICATOR].includes(filter.dataType)) {
      filters.push(`programId:eq:${filter.group}`);
    }
    if (searchTerm) {
      filters.push(`${nameProp}:ilike:${searchTerm}`);
    }
    return (0, _objectClean.default)({
      fields: `id,${nameProp}~rename(name),dimensionItemType,expression`,
      order: `${nameProp}:asc`,
      filter: filters,
      paging: true,
      page
    });
  }
};
exports.dataItemsQuery = dataItemsQuery;
const indicatorsQuery = {
  resource: 'indicators',
  params: _ref4 => {
    let {
      nameProp,
      filter,
      searchTerm,
      page
    } = _ref4;
    const filters = [];
    if (filter !== null && filter !== void 0 && filter.group && filter.group !== _dataTypes.DIMENSION_TYPE_ALL) {
      filters.push(`indicatorGroups.id:eq:${filter.group}`);
    }
    if (searchTerm) {
      filters.push(`${nameProp}:ilike:${searchTerm}`);
    }
    return {
      fields: `id,${nameProp}~rename(name),dimensionItemType`,
      order: `${nameProp}:asc`,
      filter: filters,
      paging: true,
      page
    };
  }
};
exports.indicatorsQuery = indicatorsQuery;
const indicatorGroupsQuery = {
  resource: 'indicatorGroups',
  params: _ref5 => {
    let {
      nameProp
    } = _ref5;
    return {
      fields: `id,${nameProp}~rename(name)`,
      order: `${nameProp}:asc`,
      paging: false
    };
  }
};
exports.indicatorGroupsQuery = indicatorGroupsQuery;
const dataElementsQuery = {
  resource: 'dataElements',
  params: _ref6 => {
    let {
      nameProp,
      filter,
      searchTerm,
      page
    } = _ref6;
    const idField = (filter === null || filter === void 0 ? void 0 : filter.group) === _dataTypes.DIMENSION_TYPE_ALL ? 'id' : 'dimensionItem~rename(id)';
    const filters = ['domainType:eq:AGGREGATE'];
    if (filter !== null && filter !== void 0 && filter.group && filter.group !== _dataTypes.DIMENSION_TYPE_ALL) {
      filters.push(`dataElementGroups.id:eq:${filter.group}`);
    }
    if (searchTerm) {
      filters.push(`${nameProp}:ilike:${searchTerm}`);
    }
    return {
      fields: `${idField},${nameProp}~rename(name),dimensionItemType`,
      order: `${nameProp}:asc`,
      filter: filters,
      paging: true,
      page
    };
  }
};
exports.dataElementsQuery = dataElementsQuery;
const dataElementGroupsQuery = {
  resource: 'dataElementGroups',
  params: _ref7 => {
    let {
      nameProp
    } = _ref7;
    return {
      fields: `id,${nameProp}~rename(name)`,
      order: `${nameProp}:asc`,
      paging: false
    };
  }
};
exports.dataElementGroupsQuery = dataElementGroupsQuery;
const itemsByDimensionQuery = {
  resource: `dimensions`,
  id: _ref8 => {
    let {
      id
    } = _ref8;
    return `${id}/items`;
  },
  params: _ref9 => {
    let {
      searchTerm,
      page,
      nameProp
    } = _ref9;
    const filters = [];
    if (searchTerm) {
      filters.push(`${nameProp}:ilike:${searchTerm}`);
    }
    return {
      fields: `id,${nameProp}~rename(name)`,
      order: `${nameProp}:asc`,
      filter: filters,
      paging: true,
      page
    };
  }
};
exports.itemsByDimensionQuery = itemsByDimensionQuery;
const dataElementOperandsQuery = {
  resource: 'dataElementOperands',
  params: _ref10 => {
    let {
      nameProp,
      filter,
      searchTerm,
      page
    } = _ref10;
    const idField = (filter === null || filter === void 0 ? void 0 : filter.group) === _dataTypes.DIMENSION_TYPE_ALL ? 'id' : 'dimensionItem~rename(id)';
    const filters = [];
    if (filter !== null && filter !== void 0 && filter.group && filter.group !== _dataTypes.DIMENSION_TYPE_ALL) {
      filters.push(`dataElement.dataElementGroups.id:eq:${filter.group}`);
    }
    if (searchTerm) {
      filters.push(`${nameProp}:ilike:${searchTerm}`);
    }
    return {
      fields: `${idField},${nameProp}~rename(name),dimensionItemType`,
      order: `${nameProp}:asc`,
      filter: filters,
      paging: true,
      page
    };
  }
};
exports.dataElementOperandsQuery = dataElementOperandsQuery;
const dataSetsQuery = {
  resource: 'dataSets',
  params: _ref11 => {
    let {
      nameProp,
      searchTerm,
      filter,
      page
    } = _ref11;
    const filters = [];
    if (searchTerm) {
      filters.push(`${nameProp}:ilike:${searchTerm}`);
    }
    if (filter !== null && filter !== void 0 && filter.group && filter.group !== _dataTypes.DIMENSION_TYPE_ALL) {
      filters.push(`id:eq:${filter.group}`);
    }
    const query = {
      fields: `dimensionItem~rename(id),${nameProp}~rename(name),dimensionItemType`,
      order: `${nameProp}:asc`,
      filter: filters,
      paging: false
    };
    if (page) {
      query.page = page;
      query.paging = true;
    }
    return query;
  }
};
exports.dataSetsQuery = dataSetsQuery;
const programsQuery = {
  resource: 'programs',
  params: _ref12 => {
    let {
      nameProp
    } = _ref12;
    return {
      fields: `id,${nameProp}~rename(name)`,
      order: `${nameProp}:asc`,
      paging: false
    };
  }
};

// Fetch functions
exports.programsQuery = programsQuery;
const apiFetchDimensions = async (dataEngine, nameProp) => {
  const dimensionsData = await dataEngine.query({
    dimensions: dimensionsQuery
  }, {
    variables: {
      nameProp
    },
    onError: _index.onError
  });
  return dimensionsData.dimensions.dimensions;
};
exports.apiFetchDimensions = apiFetchDimensions;
const apiFetchRecommendedIds = async (dataEngine, dxIds, ouIds) => {
  const recommendedDimensionsData = await dataEngine.query({
    recommendedDimensions: recommendedDimensionsQuery
  }, {
    variables: {
      dxIds,
      ouIds
    },
    onError: _index.onError
  });
  return recommendedDimensionsData.recommendedDimensions.dimensions.map(item => item.id);
};
exports.apiFetchRecommendedIds = apiFetchRecommendedIds;
const apiFetchOptions = _ref13 => {
  let {
    dataEngine,
    nameProp,
    filter,
    searchTerm,
    page
  } = _ref13;
  switch (filter === null || filter === void 0 ? void 0 : filter.dataType) {
    case _dataTypes.DIMENSION_TYPE_INDICATOR:
      {
        return fetchIndicators({
          dataEngine,
          nameProp,
          filter,
          searchTerm,
          page
        });
      }
    case _dataTypes.DIMENSION_TYPE_DATA_ELEMENT:
      {
        if (filter.subGroup === _dataTypes.TOTALS) {
          return fetchDataElements({
            dataEngine,
            nameProp,
            filter,
            searchTerm,
            page
          });
        } else {
          return fetchDataElementOperands({
            dataEngine,
            nameProp,
            filter,
            searchTerm,
            page
          });
        }
      }
    case _dataTypes.DIMENSION_TYPE_DATA_SET:
      {
        return fetchDataSets({
          dataEngine,
          nameProp,
          filter,
          searchTerm,
          page
        });
      }
    default:
      return fetchDataItems({
        dataEngine,
        nameProp,
        filter,
        searchTerm,
        page
      });
  }
};
exports.apiFetchOptions = apiFetchOptions;
const apiFetchGroups = async (dataEngine, dataType, nameProp) => {
  // indicatorGroups does not support shortName
  const name = dataType === _dataTypes.DIMENSION_TYPE_INDICATOR ? 'displayName' : nameProp;
  switch (dataType) {
    case _dataTypes.DIMENSION_TYPE_INDICATOR:
      {
        const indicatorGroupsData = await dataEngine.query({
          indicatorGroups: indicatorGroupsQuery
        }, {
          variables: {
            nameProp: name
          },
          onError: _index.onError
        });
        return indicatorGroupsData.indicatorGroups.indicatorGroups;
      }
    case _dataTypes.DIMENSION_TYPE_DATA_ELEMENT:
      {
        const dataElementGroupsData = await dataEngine.query({
          dataElementGroups: dataElementGroupsQuery
        }, {
          variables: {
            nameProp: name
          },
          onError: _index.onError
        });
        return dataElementGroupsData.dataElementGroups.dataElementGroups;
      }
    case _dataTypes.DIMENSION_TYPE_DATA_SET:
      {
        const response = await dataEngine.query({
          data: dataSetsQuery
        }, {
          variables: {
            nameProp: name
          },
          onError: _index.onError
        });
        return response.data.dataSets;
      }
    case _dataTypes.DIMENSION_TYPE_EVENT_DATA_ITEM:
    case _dataTypes.DIMENSION_TYPE_PROGRAM_INDICATOR:
      {
        const programsData = await dataEngine.query({
          programs: programsQuery
        }, {
          variables: {
            nameProp: name
          },
          onError: _index.onError
        });
        return programsData.programs.programs;
      }
    default:
      return null;
  }
};
exports.apiFetchGroups = apiFetchGroups;
const fetchIndicators = async _ref14 => {
  let {
    dataEngine,
    nameProp,
    filter,
    searchTerm,
    page
  } = _ref14;
  const indicatorsData = await dataEngine.query({
    indicators: indicatorsQuery
  }, {
    variables: {
      nameProp,
      filter,
      searchTerm,
      page
    },
    onError: _index.onError
  });
  const response = indicatorsData.indicators;
  return formatResponse(response.indicators, response.pager);
};
const fetchDataItems = async _ref15 => {
  let {
    dataEngine,
    nameProp,
    filter,
    searchTerm,
    page
  } = _ref15;
  const dataItemsData = await dataEngine.query({
    dataItems: dataItemsQuery
  }, {
    variables: {
      nameProp,
      filter,
      searchTerm,
      page
    },
    onError: _index.onError
  });
  const response = dataItemsData.dataItems;
  return formatResponse(response.dataItems, response.pager);
};
const formatResponse = (dimensionItems, pager) => ({
  dimensionItems,
  nextPage: pager.nextPage ? pager.page + 1 : null
});
const fetchDataElements = async _ref16 => {
  let {
    dataEngine,
    nameProp,
    filter,
    searchTerm,
    page
  } = _ref16;
  const dataElementsData = await dataEngine.query({
    dataElements: dataElementsQuery
  }, {
    variables: {
      nameProp,
      filter,
      searchTerm,
      page
    },
    onError: _index.onError
  });
  const response = dataElementsData.dataElements;
  return formatResponse(response.dataElements, response.pager);
};
const apiFetchItemsByDimension = async _ref17 => {
  let {
    dataEngine,
    dimensionId,
    searchTerm,
    page,
    nameProp
  } = _ref17;
  const itemsByDimensionData = await dataEngine.query({
    itemsByDimensions: itemsByDimensionQuery
  }, {
    variables: {
      id: dimensionId,
      searchTerm,
      page,
      nameProp
    },
    onError: _index.onError
  });
  const response = itemsByDimensionData.itemsByDimensions;
  return formatResponse(response.items, response.pager);
};
exports.apiFetchItemsByDimension = apiFetchItemsByDimension;
const fetchDataElementOperands = async _ref18 => {
  let {
    dataEngine,
    nameProp,
    filter,
    searchTerm,
    page
  } = _ref18;
  const dataElementOperandsData = await dataEngine.query({
    dataElementOperands: dataElementOperandsQuery
  }, {
    variables: {
      nameProp,
      filter,
      searchTerm,
      page
    },
    onError: _index.onError
  });
  const response = dataElementOperandsData.dataElementOperands;
  return formatResponse(response.dataElementOperands, response.pager);
};
const fetchDataSets = async _ref19 => {
  let {
    dataEngine,
    nameProp,
    searchTerm,
    filter,
    page
  } = _ref19;
  const dataSetsData = await dataEngine.query({
    dataSets: dataSetsQuery
  }, {
    variables: {
      nameProp,
      searchTerm,
      filter,
      page
    },
    onError: _index.onError
  });
  const response = dataSetsData.dataSets;
  return formatResponse(response.dataSets, response.pager);
};