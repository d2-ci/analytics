import objectClean from 'd2-utilizr/lib/objectClean';
import { DIMENSION_TYPE_ALL, DIMENSION_TYPE_INDICATOR, DIMENSION_TYPE_DATA_ELEMENT, DIMENSION_TYPE_DATA_SET, DIMENSION_TYPE_PROGRAM_INDICATOR, DIMENSION_TYPE_EVENT_DATA_ITEM, DIMENSION_TYPE_PROGRAM_DATA_ELEMENT, DIMENSION_TYPE_PROGRAM_ATTRIBUTE, TOTALS } from '../modules/dataTypes.js';
import { onError } from './index.js'; // Query definitions

export const dimensionsQuery = {
  resource: 'dimensions',
  params: _ref => {
    let {
      nameProp
    } = _ref;
    return {
      fields: "id,".concat(nameProp, "~rename(name),dimensionType,dataDimensionType"),
      order: "".concat(nameProp, ":asc"),
      paging: false
    };
  }
};
const recommendedDimensionsQuery = {
  resource: 'dimensions/recommendations',
  params: _ref2 => {
    let {
      dxIds,
      ouIds
    } = _ref2;
    const dimensions = [];

    if (dxIds.length) {
      dimensions.push("dx:".concat(dxIds.join(';')));
    }

    if (ouIds.length) {
      dimensions.push("ou:".concat(ouIds.join(';')));
    }

    return {
      fields: 'id',
      dimension: dimensions
    };
  }
};
export const dataItemsQuery = {
  resource: 'dataItems',
  params: _ref3 => {
    let {
      nameProp,
      filter,
      searchTerm,
      page
    } = _ref3;
    const filters = []; // TODO: Extract all of this logic out of the query?

    if ((filter === null || filter === void 0 ? void 0 : filter.dataType) === DIMENSION_TYPE_EVENT_DATA_ITEM) {
      filters.push("dimensionItemType:in:[".concat(DIMENSION_TYPE_PROGRAM_DATA_ELEMENT, ",").concat(DIMENSION_TYPE_PROGRAM_ATTRIBUTE, "]"));
    } else if (filter !== null && filter !== void 0 && filter.dataType && filter.dataType !== DIMENSION_TYPE_ALL) {
      filters.push("dimensionItemType:eq:".concat(filter.dataType));
    }

    if (filter !== null && filter !== void 0 && filter.group && filter.group !== DIMENSION_TYPE_ALL && [DIMENSION_TYPE_EVENT_DATA_ITEM, DIMENSION_TYPE_PROGRAM_INDICATOR].includes(filter.dataType)) {
      filters.push("programId:eq:".concat(filter.group));
    }

    if (searchTerm) {
      filters.push("".concat(nameProp, ":ilike:").concat(searchTerm));
    }

    return objectClean({
      fields: "id,".concat(nameProp, "~rename(name),dimensionItemType"),
      order: "".concat(nameProp, ":asc"),
      filter: filters,
      paging: true,
      page
    });
  }
};
export const indicatorsQuery = {
  resource: 'indicators',
  params: _ref4 => {
    let {
      nameProp,
      filter,
      searchTerm,
      page
    } = _ref4;
    const filters = [];

    if (filter !== null && filter !== void 0 && filter.group && filter.group !== DIMENSION_TYPE_ALL) {
      filters.push("indicatorGroups.id:eq:".concat(filter.group));
    }

    if (searchTerm) {
      filters.push("".concat(nameProp, ":ilike:").concat(searchTerm));
    }

    return {
      fields: "id,".concat(nameProp, "~rename(name),dimensionItemType"),
      order: "".concat(nameProp, ":asc"),
      filter: filters,
      paging: true,
      page
    };
  }
};
export const indicatorGroupsQuery = {
  resource: 'indicatorGroups',
  params: _ref5 => {
    let {
      nameProp
    } = _ref5;
    return {
      fields: "id,".concat(nameProp, "~rename(name)"),
      order: "".concat(nameProp, ":asc"),
      paging: false
    };
  }
};
export const dataElementsQuery = {
  resource: 'dataElements',
  params: _ref6 => {
    let {
      nameProp,
      filter,
      searchTerm,
      page
    } = _ref6;
    const idField = (filter === null || filter === void 0 ? void 0 : filter.group) === DIMENSION_TYPE_ALL ? 'id' : 'dimensionItem~rename(id)';
    const filters = ['domainType:eq:AGGREGATE'];

    if (filter !== null && filter !== void 0 && filter.group && filter.group !== DIMENSION_TYPE_ALL) {
      filters.push("dataElementGroups.id:eq:".concat(filter.group));
    }

    if (searchTerm) {
      filters.push("".concat(nameProp, ":ilike:").concat(searchTerm));
    }

    return {
      fields: "".concat(idField, ",").concat(nameProp, "~rename(name),dimensionItemType"),
      order: "".concat(nameProp, ":asc"),
      filter: filters,
      paging: true,
      page
    };
  }
};
export const dataElementGroupsQuery = {
  resource: 'dataElementGroups',
  params: _ref7 => {
    let {
      nameProp
    } = _ref7;
    return {
      fields: "id,".concat(nameProp, "~rename(name)"),
      order: "".concat(nameProp, ":asc"),
      paging: false
    };
  }
};
export const itemsByDimensionQuery = {
  resource: "dimensions",
  id: _ref8 => {
    let {
      id
    } = _ref8;
    return "".concat(id, "/items");
  },
  params: _ref9 => {
    let {
      searchTerm,
      page,
      nameProp
    } = _ref9;
    const filters = [];

    if (searchTerm) {
      filters.push("".concat(nameProp, ":ilike:").concat(searchTerm));
    }

    return {
      fields: "id,".concat(nameProp, "~rename(name)"),
      order: "".concat(nameProp, ":asc"),
      filter: filters,
      paging: true,
      page
    };
  }
};
export const dataElementOperandsQuery = {
  resource: 'dataElementOperands',
  params: _ref10 => {
    let {
      nameProp,
      filter,
      searchTerm,
      page
    } = _ref10;
    const idField = (filter === null || filter === void 0 ? void 0 : filter.group) === DIMENSION_TYPE_ALL ? 'id' : 'dimensionItem~rename(id)';
    const filters = [];

    if (filter !== null && filter !== void 0 && filter.group && filter.group !== DIMENSION_TYPE_ALL) {
      filters.push("dataElement.dataElementGroups.id:eq:".concat(filter.group));
    }

    if (searchTerm) {
      filters.push("".concat(nameProp, ":ilike:").concat(searchTerm));
    }

    return {
      fields: "".concat(idField, ",").concat(nameProp, "~rename(name),dimensionItemType"),
      order: "".concat(nameProp, ":asc"),
      filter: filters,
      paging: true,
      page
    };
  }
};
export const dataSetsQuery = {
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
      filters.push("".concat(nameProp, ":ilike:").concat(searchTerm));
    }

    if (filter !== null && filter !== void 0 && filter.group && filter.group !== DIMENSION_TYPE_ALL) {
      filters.push("id:eq:".concat(filter.group));
    }

    const query = {
      fields: "dimensionItem~rename(id),".concat(nameProp, "~rename(name),dimensionItemType"),
      order: "".concat(nameProp, ":asc"),
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
export const programsQuery = {
  resource: 'programs',
  params: _ref12 => {
    let {
      nameProp
    } = _ref12;
    return {
      fields: "id,".concat(nameProp, "~rename(name)"),
      order: "".concat(nameProp, ":asc"),
      paging: false
    };
  }
}; // Fetch functions

export const apiFetchDimensions = async (dataEngine, nameProp) => {
  const dimensionsData = await dataEngine.query({
    dimensions: dimensionsQuery
  }, {
    variables: {
      nameProp
    },
    onError
  });
  return dimensionsData.dimensions.dimensions;
};
export const apiFetchRecommendedIds = async (dataEngine, dxIds, ouIds) => {
  const recommendedDimensionsData = await dataEngine.query({
    recommendedDimensions: recommendedDimensionsQuery
  }, {
    variables: {
      dxIds,
      ouIds
    },
    onError
  });
  return recommendedDimensionsData.recommendedDimensions.dimensions.map(item => item.id);
};
export const apiFetchOptions = _ref13 => {
  let {
    dataEngine,
    nameProp,
    filter,
    searchTerm,
    page
  } = _ref13;

  switch (filter === null || filter === void 0 ? void 0 : filter.dataType) {
    case DIMENSION_TYPE_INDICATOR:
      {
        return fetchIndicators({
          dataEngine,
          nameProp,
          filter,
          searchTerm,
          page
        });
      }

    case DIMENSION_TYPE_DATA_ELEMENT:
      {
        if (filter.subGroup === TOTALS) {
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

    case DIMENSION_TYPE_DATA_SET:
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
export const apiFetchGroups = async (dataEngine, dataType, nameProp) => {
  // indicatorGroups does not support shortName
  const name = dataType === DIMENSION_TYPE_INDICATOR ? 'displayName' : nameProp;

  switch (dataType) {
    case DIMENSION_TYPE_INDICATOR:
      {
        const indicatorGroupsData = await dataEngine.query({
          indicatorGroups: indicatorGroupsQuery
        }, {
          variables: {
            nameProp: name
          },
          onError
        });
        return indicatorGroupsData.indicatorGroups.indicatorGroups;
      }

    case DIMENSION_TYPE_DATA_ELEMENT:
      {
        const dataElementGroupsData = await dataEngine.query({
          dataElementGroups: dataElementGroupsQuery
        }, {
          variables: {
            nameProp: name
          },
          onError
        });
        return dataElementGroupsData.dataElementGroups.dataElementGroups;
      }

    case DIMENSION_TYPE_DATA_SET:
      {
        const response = await dataEngine.query({
          data: dataSetsQuery
        }, {
          variables: {
            nameProp: name
          },
          onError
        });
        return response.data.dataSets;
      }

    case DIMENSION_TYPE_EVENT_DATA_ITEM:
    case DIMENSION_TYPE_PROGRAM_INDICATOR:
      {
        const programsData = await dataEngine.query({
          programs: programsQuery
        }, {
          variables: {
            nameProp: name
          },
          onError
        });
        return programsData.programs.programs;
      }

    default:
      return null;
  }
};

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
    onError
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
    onError
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
    onError
  });
  const response = dataElementsData.dataElements;
  return formatResponse(response.dataElements, response.pager);
};

export const apiFetchItemsByDimension = async _ref17 => {
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
    onError
  });
  const response = itemsByDimensionData.itemsByDimensions;
  return formatResponse(response.items, response.pager);
};

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
    onError
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
    onError
  });
  const response = dataSetsData.dataSets;
  return formatResponse(response.dataSets, response.pager);
};