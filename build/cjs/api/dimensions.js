"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.programsQuery = exports.itemsByDimensionQuery = exports.indicatorsQuery = exports.indicatorGroupsQuery = exports.dimensionsQuery = exports.dataSetsQuery = exports.dataItemsQuery = exports.dataElementsQuery = exports.dataElementOperandsQuery = exports.dataElementGroupsQuery = exports.apiFetchRecommendedIds = exports.apiFetchOptions = exports.apiFetchItemsByDimension = exports.apiFetchGroups = exports.apiFetchDimensions = void 0;
var _objectClean = _interopRequireDefault(require("d2-utilizr/lib/objectClean"));
var _dataTypes = require("../modules/dataTypes.js");
var _index = require("./index.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// Query definitions
const dimensionsQuery = exports.dimensionsQuery = {
  resource: 'dimensions',
  params: ({
    nameProp
  }) => ({
    fields: `id,${nameProp}~rename(name),dimensionType,dataDimensionType`,
    order: `${nameProp}:asc`,
    paging: false
  })
};
const recommendedDimensionsQuery = {
  resource: 'dimensions/recommendations',
  params: ({
    dxIds,
    ouIds
  }) => {
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
const dataItemsQuery = exports.dataItemsQuery = {
  resource: 'dataItems',
  params: ({
    nameProp,
    filter,
    searchTerm,
    page
  }) => {
    let fields = `id,${nameProp}~rename(name),dimensionItemType,expression,optionSetId`;
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
    if (filter !== null && filter !== void 0 && filter.dataItemId) {
      // remove unnecessary fields
      fields = `id,${nameProp}~rename(name),dimensionItemType`;
      if (filter.dataType === _dataTypes.DIMENSION_TYPE_PROGRAM_DATA_ELEMENT_OPTION) {
        filters.push(`programDataElementId:eq:${filter.dataItemId}`);
      } else if (filter.dataType === _dataTypes.DIMENSION_TYPE_PROGRAM_ATTRIBUTE_OPTION) {
        filters.push(`programAttributeId:eq:${filter.dataItemId}`);
      }
    }
    if (searchTerm) {
      filters.push(`${nameProp}:ilike:${searchTerm}`);
    }
    return (0, _objectClean.default)({
      fields,
      order: `${nameProp}:asc`,
      filter: filters,
      paging: true,
      page
    });
  }
};
const indicatorsQuery = exports.indicatorsQuery = {
  resource: 'indicators',
  params: ({
    nameProp,
    filter,
    searchTerm,
    page
  }) => {
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
const indicatorGroupsQuery = exports.indicatorGroupsQuery = {
  resource: 'indicatorGroups',
  params: ({
    nameProp
  }) => ({
    fields: `id,${nameProp}~rename(name)`,
    order: `${nameProp}:asc`,
    paging: false
  })
};
const dataElementsQuery = exports.dataElementsQuery = {
  resource: 'dataElements',
  params: ({
    nameProp,
    filter,
    searchTerm,
    page
  }) => {
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
const dataElementGroupsQuery = exports.dataElementGroupsQuery = {
  resource: 'dataElementGroups',
  params: ({
    nameProp
  }) => ({
    fields: `id,${nameProp}~rename(name)`,
    order: `${nameProp}:asc`,
    paging: false
  })
};
const itemsByDimensionQuery = exports.itemsByDimensionQuery = {
  resource: `dimensions`,
  id: ({
    id
  }) => `${id}/items`,
  params: ({
    searchTerm,
    page,
    nameProp
  }) => {
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
const dataElementOperandsQuery = exports.dataElementOperandsQuery = {
  resource: 'dataElementOperands',
  params: ({
    nameProp,
    filter,
    searchTerm,
    page
  }) => {
    const idField = (filter === null || filter === void 0 ? void 0 : filter.group) === _dataTypes.DIMENSION_TYPE_ALL ? 'id' : 'dimensionItem~rename(id)';
    const filters = ['categoryOptionCombo.name:ne:default'];
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
const dataSetsQuery = exports.dataSetsQuery = {
  resource: 'dataSets',
  params: ({
    nameProp,
    searchTerm,
    filter,
    page
  }) => {
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
const programsQuery = exports.programsQuery = {
  resource: 'programs',
  params: ({
    nameProp
  }) => ({
    fields: `id,${nameProp}~rename(name)`,
    order: `${nameProp}:asc`,
    paging: false
  })
};

// Fetch functions
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
const apiFetchOptions = ({
  dataEngine,
  nameProp,
  filter,
  searchTerm,
  page
}) => {
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
const fetchIndicators = async ({
  dataEngine,
  nameProp,
  filter,
  searchTerm,
  page
}) => {
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
const fetchDataItems = async ({
  dataEngine,
  nameProp,
  filter,
  searchTerm,
  page
}) => {
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
const fetchDataElements = async ({
  dataEngine,
  nameProp,
  filter,
  searchTerm,
  page
}) => {
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
const apiFetchItemsByDimension = async ({
  dataEngine,
  dimensionId,
  searchTerm,
  page,
  nameProp
}) => {
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
const fetchDataElementOperands = async ({
  dataEngine,
  nameProp,
  filter,
  searchTerm,
  page
}) => {
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
const fetchDataSets = async ({
  dataEngine,
  nameProp,
  searchTerm,
  filter,
  page
}) => {
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