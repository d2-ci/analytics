"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.apiFetchAlternatives = exports.apiFetchGroups = exports.apiFetchItemsByDimension = exports.apiFetchRecommendedIds = exports.apiFetchDimensions = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _sortBy = _interopRequireDefault(require("lodash/sortBy"));

var _index = require("./index");

var _dataSets = require("../modules/dataSets");

var _dataTypes = require("../modules/dataTypes");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Request util functions
var selectFromResponse = function selectFromResponse(response, entity, selectorFn) {
  return typeof selectorFn === 'function' ? selectorFn(response) : response[entity];
}; // Request functions


var request = function request(d2, entity) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      paramString = _ref.paramString,
      selectorFn = _ref.selectorFn;

  var url = "/".concat(entity, "?").concat(paramString, "&paging=false");
  return d2.Api.getApi().get(url).then(function (response) {
    return selectFromResponse(response, entity, selectorFn);
  }).catch(_index.onError);
};

var requestWithPaging = function requestWithPaging(d2, entity) {
  var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      page = _ref2.page,
      paramString = _ref2.paramString,
      selectorFn = _ref2.selectorFn;

  var paging = "&paging=true&page=".concat(page);
  var url = "/".concat(entity, "?").concat(paramString).concat(paging);
  return d2.Api.getApi().get(url).then(function (response) {
    return {
      dimensionItems: selectFromResponse(response, entity, selectorFn),
      nextPage: response.pager.nextPage ? response.pager.page + 1 : null
    };
  }).catch(_index.onError);
}; // Fetch functions


var apiFetchDimensions = function apiFetchDimensions(d2, nameProp) {
  var fields = "fields=id,".concat(nameProp, "~rename(name),dimensionType,dataDimensionType");
  var order = "order=".concat(nameProp, ":asc");
  var params = "".concat(fields, "&").concat(order);
  return request(d2, 'dimensions', {
    paramString: params
  });
};

exports.apiFetchDimensions = apiFetchDimensions;

var apiFetchRecommendedIds = function apiFetchRecommendedIds(d2, dxIds, ouIds) {
  var dimensions = 'dimension=';

  if (dxIds.length) {
    dimensions = dimensions.concat("dx:".concat(dxIds.join(';')));
    if (ouIds.length) dimensions = dimensions.concat("&dimension=ou:".concat(ouIds.join(';')));
  } else if (ouIds.length) {
    dimensions = dimensions.concat("ou:".concat(ouIds.join(';')));
  } else {
    return Promise.resolve([]);
  }

  var url = "/dimensions/recommendations?".concat(dimensions, "&fields=id");
  return d2.Api.getApi().get(url).then(function (response) {
    return response.dimensions.map(function (item) {
      return item.id;
    });
  }).catch(_index.onError);
};

exports.apiFetchRecommendedIds = apiFetchRecommendedIds;

var apiFetchItemsByDimension = function apiFetchItemsByDimension(d2, dimensionId) {
  var fields = "fields=id,displayName~rename(name)";
  var order = "order=displayName:asc";
  var url = "dimensions/".concat(dimensionId, "/items?").concat(fields, "&").concat(order);
  return d2.Api.getApi().get(url).then(function (response) {
    return response.items;
  });
};

exports.apiFetchItemsByDimension = apiFetchItemsByDimension;

var apiFetchGroups = function apiFetchGroups(d2, dataType, nameProp) {
  // indicatorGroups does not support shortName
  var name = dataType === 'indicators' ? 'displayName' : nameProp;
  var fields = "fields=id,".concat(name, "~rename(name)");
  var order = "order=".concat(name, ":asc");
  var params = "".concat(fields, "&").concat(order);

  switch (dataType) {
    case 'indicators':
      {
        return request(d2, 'indicatorGroups', {
          paramString: params
        });
      }

    case 'dataElements':
      {
        return request(d2, 'dataElementGroups', {
          paramString: params
        });
      }

    case 'dataSets':
      {
        var dataSetGroups = _dataSets.DATA_SETS_CONSTANTS.map(function (_ref3) {
          var id = _ref3.id,
              name = _ref3.name;
          return {
            id: id,
            name: name()
          };
        });

        return Promise.resolve(dataSetGroups);
      }

    case 'eventDataItems':
    case 'programIndicators':
      {
        return request(d2, 'programs', {
          paramString: params
        });
      }

    default:
      return null;
  }
};

exports.apiFetchGroups = apiFetchGroups;

var apiFetchAlternatives = function apiFetchAlternatives(args) {
  var d2 = args.d2,
      dataType = args.dataType,
      groupDetail = args.groupDetail,
      queryParams = (0, _objectWithoutProperties2.default)(args, ["d2", "dataType", "groupDetail"]);

  switch (dataType) {
    case 'indicators':
      {
        return fetchIndicators(_objectSpread({
          d2: d2
        }, queryParams));
      }

    case 'dataElements':
      {
        if (groupDetail === 'detail') {
          return fetchDataElementOperands(_objectSpread({
            d2: d2
          }, queryParams));
        } else {
          return fetchDataElements(_objectSpread({
            d2: d2
          }, queryParams));
        }
      }

    case 'dataSets':
      {
        return fetchDataSets(_objectSpread({
          d2: d2
        }, queryParams));
      }

    case 'eventDataItems':
      {
        return queryParams.groupId ? getEventDataItems(_objectSpread({
          d2: d2
        }, queryParams)) : null;
      }

    case 'programIndicators':
      {
        return queryParams.groupId ? fetchProgramIndicators(_objectSpread({
          d2: d2
        }, queryParams)) : null;
      }

    default:
      return null;
  }
};

exports.apiFetchAlternatives = apiFetchAlternatives;

var fetchIndicators = function fetchIndicators(_ref4) {
  var d2 = _ref4.d2,
      nameProp = _ref4.nameProp,
      groupId = _ref4.groupId,
      filterText = _ref4.filterText,
      page = _ref4.page;
  var fields = "fields=id,".concat(nameProp, "~rename(name),dimensionItemType&order=").concat(nameProp, ":asc");
  var order = "order=".concat(nameProp, ":asc");
  var filter = groupId !== 'ALL' ? "&filter=indicatorGroups.id:eq:".concat(groupId) : '';

  if (filterText) {
    filter = filter.concat("&filter=".concat(nameProp, ":ilike:").concat(filterText));
  }

  var paramString = "".concat(fields, "&").concat(order).concat(filter);
  return requestWithPaging(d2, 'indicators', {
    paramString: paramString,
    page: page
  });
};

var fetchDataElements = function fetchDataElements(_ref5) {
  var d2 = _ref5.d2,
      groupId = _ref5.groupId,
      page = _ref5.page,
      filterText = _ref5.filterText,
      nameProp = _ref5.nameProp;
  var idField = groupId === 'ALL' ? 'id' : 'dimensionItem~rename(id)';
  var fields = "fields=".concat(idField, ",").concat(nameProp, "~rename(name)");
  var order = "order=".concat(nameProp, ":asc");
  var filter = '&filter=domainType:eq:AGGREGATE';

  if (groupId !== 'ALL') {
    filter = filter.concat("&filter=dataElementGroups.id:eq:".concat(groupId));
  }

  if (filterText) {
    filter = filter.concat("&filter=".concat(nameProp, ":ilike:").concat(filterText));
  }

  var paramString = "".concat(fields, "&").concat(order).concat(filter);
  return requestWithPaging(d2, 'dataElements', {
    paramString: paramString,
    page: page
  });
};

var fetchDataElementOperands = function fetchDataElementOperands(_ref6) {
  var d2 = _ref6.d2,
      groupId = _ref6.groupId,
      page = _ref6.page,
      filterText = _ref6.filterText,
      nameProp = _ref6.nameProp;
  var idField = groupId === 'ALL' ? 'id' : 'dimensionItem~rename(id)';
  var fields = "fields=".concat(idField, ",").concat(nameProp, "~rename(name)");
  var order = "order=".concat(nameProp, ":asc");
  var filter = '';

  if (groupId !== 'ALL') {
    filter = "&filter=dataElement.dataElementGroups.id:eq:".concat(groupId);
  }

  if (filterText) {
    var textFilter = "&filter=".concat(nameProp, ":ilike:").concat(filterText);
    filter = filter.length ? filter.concat(textFilter) : textFilter;
  }

  return requestWithPaging(d2, 'dataElementOperands', {
    paramString: "".concat(fields, "&").concat(order).concat(filter),
    page: page
  });
};

var fetchDataSets = function fetchDataSets(_ref7) {
  var d2 = _ref7.d2,
      page = _ref7.page,
      filterText = _ref7.filterText,
      nameProp = _ref7.nameProp;
  var fields = "fields=dimensionItem~rename(id),".concat(nameProp, "~rename(name)");
  var order = "order=".concat(nameProp, ":asc");
  var filter = filterText ? "&filter=".concat(nameProp, ":ilike:").concat(filterText) : '';
  var paramString = "".concat(fields, "&").concat(order).concat(filter);
  return requestWithPaging(d2, 'dataSets', {
    paramString: paramString,
    page: page
  });
};

var fetchProgramDataElements = function fetchProgramDataElements(_ref8) {
  var d2 = _ref8.d2,
      groupId = _ref8.groupId,
      page = _ref8.page,
      filterText = _ref8.filterText,
      nameProp = _ref8.nameProp;
  var fields = "fields=dimensionItem~rename(id),".concat(nameProp, "~rename(name),valueType");
  var order = "order=".concat(nameProp, ":asc");
  var program = "program=".concat(groupId);
  var filter = filterText ? "&filter=".concat(nameProp, ":ilike:").concat(filterText) : '';
  var paramString = "".concat(fields, "&").concat(order, "&").concat(program).concat(filter);
  return requestWithPaging(d2, 'programDataElements', {
    paramString: paramString,
    page: page
  });
};

var fetchTrackedEntityAttributes = function fetchTrackedEntityAttributes(_ref9) {
  var d2 = _ref9.d2,
      groupId = _ref9.groupId,
      filterText = _ref9.filterText,
      nameProp = _ref9.nameProp;
  var fields = "fields=".concat(nameProp, "~rename(name),programTrackedEntityAttributes[trackedEntityAttribute[id,").concat(nameProp, "~rename(name),valueType]]");
  var filter = filterText ? "&filter=".concat(nameProp, ":ilike:").concat(filterText) : '';
  var paramString = "".concat(fields).concat(filter);
  return request(d2, "programs/".concat(groupId), {
    paramString: paramString,
    selectorFn: function selectorFn(r) {
      return Array.isArray(r.programTrackedEntityAttributes) ? r.programTrackedEntityAttributes.map(function (a) {
        return a.trackedEntityAttribute;
      }).map(function (a) {
        return _objectSpread(_objectSpread({}, a), {}, {
          id: "".concat(groupId, ".").concat(a.id),
          name: "".concat(r.name, " ").concat(a.name)
        });
      }) : [];
    }
  });
};

var getEventDataItems = /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(d2, queryParams) {
    var _yield$Promise$all, _yield$Promise$all2, dataElementsObj, attributes, filterInvalidTypes;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Promise.all([fetchProgramDataElements(d2, queryParams), fetchTrackedEntityAttributes(d2, queryParams)]);

          case 2:
            _yield$Promise$all = _context.sent;
            _yield$Promise$all2 = (0, _slicedToArray2.default)(_yield$Promise$all, 2);
            dataElementsObj = _yield$Promise$all2[0];
            attributes = _yield$Promise$all2[1];

            filterInvalidTypes = function filterInvalidTypes(item) {
              return Boolean(_dataTypes.CHART_AGGREGATE_AGGREGATABLE_TYPES.includes(item.valueType));
            };

            return _context.abrupt("return", _objectSpread(_objectSpread({}, dataElementsObj), {}, {
              dimensionItems: (0, _sortBy.default)([].concat((0, _toConsumableArray2.default)(dataElementsObj.dimensionItems), (0, _toConsumableArray2.default)(attributes)).filter(filterInvalidTypes), 'name')
            }));

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getEventDataItems(_x, _x2) {
    return _ref10.apply(this, arguments);
  };
}();

var fetchProgramIndicators = function fetchProgramIndicators(_ref11) {
  var d2 = _ref11.d2,
      groupId = _ref11.groupId,
      page = _ref11.page,
      filterText = _ref11.filterText,
      nameProp = _ref11.nameProp;
  var fields = "fields=dimensionItem~rename(id),".concat(nameProp, "~rename(name)");
  var order = "order=".concat(nameProp, ":asc");
  var programFilter = "filter=program.id:eq:".concat(groupId);
  var filter = filterText ? "&filter=".concat(nameProp, ":ilike:").concat(filterText) : '';
  var paramString = "".concat(fields, "&").concat(order, "&").concat(programFilter).concat(filter);
  return requestWithPaging(d2, 'programIndicators', {
    paramString: paramString,
    page: page
  });
};