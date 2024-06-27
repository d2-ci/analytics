"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _appRuntime = require("@dhis2/app-runtime");

var _ui = require("@dhis2/ui");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _dimensions = require("../../api/dimensions.js");

var _DataElementIcon = _interopRequireDefault(require("../../assets/DimensionItemIcons/DataElementIcon.js"));

var _GenericIcon = _interopRequireDefault(require("../../assets/DimensionItemIcons/GenericIcon.js"));

var _index = _interopRequireDefault(require("../../locales/index.js"));

var _dataSets = require("../../modules/dataSets.js");

var _dataTypes = require("../../modules/dataTypes.js");

var _dimensionSelectorHelper = require("../../modules/dimensionSelectorHelper.js");

var _utils = require("../../modules/utils.js");

var _DimensionSelectorStyle = _interopRequireDefault(require("../styles/DimensionSelector.style.js"));

var _TransferOption = require("../TransferOption.js");

var _DataTypeSelector = _interopRequireDefault(require("./DataTypeSelector.js"));

var _GroupSelector = _interopRequireDefault(require("./GroupSelector.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const LeftHeader = _ref => {
  let {
    searchTerm,
    setSearchTerm,
    dataType,
    setDataType,
    group,
    setGroup,
    subGroup,
    setSubGroup,
    displayNameProp,
    dataTest
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "jsx-".concat(_DimensionSelectorStyle.default.__hash) + " " + "leftHeader"
  }, /*#__PURE__*/_react.default.createElement(_ui.InputField, {
    value: searchTerm,
    onChange: _ref2 => {
      let {
        value
      } = _ref2;
      return setSearchTerm(value);
    },
    placeholder: _index.default.t('Search by data item name'),
    dataTest: "".concat(dataTest, "-filter-input-field"),
    dense: true,
    initialFocus: true,
    type: 'search'
  }), /*#__PURE__*/_react.default.createElement(_DataTypeSelector.default, {
    currentDataType: dataType,
    onChange: setDataType,
    dataTest: "".concat(dataTest, "-data-types-select-field")
  }), _dataTypes.dataTypeMap[dataType] && /*#__PURE__*/_react.default.createElement(_GroupSelector.default, {
    dataType: dataType,
    displayNameProp: displayNameProp,
    currentGroup: group,
    onGroupChange: setGroup,
    currentSubGroup: subGroup,
    onSubGroupChange: setSubGroup,
    dataTest: dataTest
  })), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _DimensionSelectorStyle.default.__hash
  }, _DimensionSelectorStyle.default));
};

LeftHeader.propTypes = {
  dataTest: _propTypes.default.string,
  dataType: _propTypes.default.string,
  displayNameProp: _propTypes.default.string,
  group: _propTypes.default.string,
  searchTerm: _propTypes.default.string,
  setDataType: _propTypes.default.func,
  setGroup: _propTypes.default.func,
  setSearchTerm: _propTypes.default.func,
  setSubGroup: _propTypes.default.func,
  subGroup: _propTypes.default.string
};

const EmptySelection = () => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("p", {
  className: "jsx-".concat(_DimensionSelectorStyle.default.__hash) + " " + "emptyList"
}, _index.default.t('No items selected')), /*#__PURE__*/_react.default.createElement(_style.default, {
  id: _DimensionSelectorStyle.default.__hash
}, _DimensionSelectorStyle.default));

const RightHeader = _ref3 => {
  let {
    infoText
  } = _ref3;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("p", {
    className: "jsx-".concat(_DimensionSelectorStyle.default.__hash) + " " + "rightHeader"
  }, _index.default.t('Selected Items')), infoText && /*#__PURE__*/_react.default.createElement("div", {
    className: "jsx-".concat(_DimensionSelectorStyle.default.__hash) + " " + "info-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "jsx-".concat(_DimensionSelectorStyle.default.__hash)
  }, /*#__PURE__*/_react.default.createElement(_ui.IconInfo16, null)), /*#__PURE__*/_react.default.createElement("span", {
    className: "jsx-".concat(_DimensionSelectorStyle.default.__hash) + " " + "info-text"
  }, infoText)), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _DimensionSelectorStyle.default.__hash
  }, _DimensionSelectorStyle.default));
};

RightHeader.propTypes = {
  infoText: _propTypes.default.string
};

const SourceEmptyPlaceholder = _ref4 => {
  let {
    loading,
    searchTerm,
    options,
    noItemsMessage,
    dataType,
    dataTest
  } = _ref4;
  let message = '';

  if (!loading && !options.length && !searchTerm) {
    if (noItemsMessage) {
      message = noItemsMessage;
    } else {
      switch (dataType) {
        case _dataTypes.DIMENSION_TYPE_INDICATOR:
          message = _index.default.t('No indicators found');
          break;

        case _dataTypes.DIMENSION_TYPE_DATA_ELEMENT:
          message = _index.default.t('No data elements found');
          break;

        case _dataTypes.DIMENSION_TYPE_DATA_SET:
          message = _index.default.t('No data sets found');
          break;

        case _dataTypes.DIMENSION_TYPE_EVENT_DATA_ITEM:
          message = _index.default.t('No event data items found');
          break;

        case _dataTypes.DIMENSION_TYPE_PROGRAM_INDICATOR:
          message = _index.default.t('No program indicators found');
          break;

        default:
          message = _index.default.t('No data');
          break;
      }
    }
  } else if (!loading && !options.length && searchTerm) {
    switch (dataType) {
      case _dataTypes.DIMENSION_TYPE_INDICATOR:
        message = _index.default.t('No indicators found for "{{- searchTerm}}"', {
          searchTerm: searchTerm
        });
        break;

      case _dataTypes.DIMENSION_TYPE_DATA_ELEMENT:
        message = _index.default.t('No data elements found for "{{- searchTerm}}"', {
          searchTerm: searchTerm
        });
        break;

      case _dataTypes.DIMENSION_TYPE_DATA_SET:
        message = _index.default.t('No data sets found for "{{- searchTerm}}"', {
          searchTerm: searchTerm
        });
        break;

      case _dataTypes.DIMENSION_TYPE_EVENT_DATA_ITEM:
        message = _index.default.t('No event data items found for "{{- searchTerm}}"', {
          searchTerm: searchTerm
        });
        break;

      case _dataTypes.DIMENSION_TYPE_PROGRAM_INDICATOR:
        message = _index.default.t('No program indicators found for "{{- searchTerm}}"', {
          searchTerm: searchTerm
        });
        break;

      default:
        message = _index.default.t('Nothing found for "{{- searchTerm}}"', {
          searchTerm: searchTerm
        });
        break;
    }
  }

  return message && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("p", {
    "data-test": dataTest,
    className: "jsx-".concat(_DimensionSelectorStyle.default.__hash) + " " + "emptyList"
  }, message), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _DimensionSelectorStyle.default.__hash
  }, _DimensionSelectorStyle.default));
};

SourceEmptyPlaceholder.propTypes = {
  dataTest: _propTypes.default.string,
  dataType: _propTypes.default.string,
  loading: _propTypes.default.bool,
  noItemsMessage: _propTypes.default.string,
  options: _propTypes.default.array,
  searchTerm: _propTypes.default.string
};

const ItemSelector = _ref5 => {
  let {
    selectedItems,
    noItemsMessage,
    onSelect,
    rightFooter,
    displayNameProp,
    infoBoxMessage,
    dataTest
  } = _ref5;
  const [state, setState] = (0, _react.useState)({
    searchTerm: '',
    filter: {
      dataType: _dataTypes.DIMENSION_TYPE_ALL
    },
    options: [],
    loading: true,
    nextPage: 1
  });
  const dataEngine = (0, _appRuntime.useDataEngine)();

  const setSearchTerm = searchTerm => setState(state => ({ ...state,
    searchTerm
  }));

  const setFilter = filter => setState(state => ({ ...state,
    filter
  }));

  const debouncedSearchTerm = (0, _utils.useDebounce)(state.searchTerm, 200);

  const fetchItems = async page => {
    var _result$dimensionItem;

    setState(state => ({ ...state,
      loading: true
    }));
    const result = await (0, _dimensions.apiFetchOptions)({
      dataEngine,
      nameProp: displayNameProp,
      page,
      filter: state.filter,
      searchTerm: state.searchTerm
    });
    const newOptions = [];
    (_result$dimensionItem = result.dimensionItems) === null || _result$dimensionItem === void 0 ? void 0 : _result$dimensionItem.forEach(item => {
      if (item.dimensionItemType === _dataSets.REPORTING_RATE) {
        if (state.filter.subGroup && state.filter.subGroup !== _dataTypes.DIMENSION_TYPE_ALL) {
          const metric = _dataSets.DATA_SETS_CONSTANTS.find(item => item.id === state.filter.subGroup);

          newOptions.push({
            label: "".concat(item.name, " - ").concat(metric.getName()),
            value: "".concat(item.id, ".").concat(metric.id),
            disabled: item.disabled,
            type: item.dimensionItemType
          });
        } else {
          _dataSets.DATA_SETS_CONSTANTS.forEach(metric => {
            newOptions.push({
              label: "".concat(item.name, " - ").concat(metric.getName()),
              value: "".concat(item.id, ".").concat(metric.id),
              disabled: item.disabled,
              type: item.dimensionItemType
            });
          });
        }
      } else {
        newOptions.push({
          label: item.name,
          value: item.id,
          disabled: item.disabled,
          type: item.dimensionItemType
        });
      }
    });
    setState(state => ({ ...state,
      loading: false,
      options: page > 1 ? [...state.options, ...newOptions] : newOptions,
      nextPage: result.nextPage
    }));
    /*  The following handles a very specific edge-case where the user can select all items from a 
        page and then reopen the modal. Usually Transfer triggers the onEndReached when the end of 
        the page is reached (scrolling down) or if too few items are on the left side (e.g. selecting 
        49 items from page 1, leaving only 1 item on the left side). However, due to the way Transfer 
        works, if 0 items are available, more items are fetched, but all items are already selected 
        (leaving 0 items on the left side still), the onReachedEnd won't trigger. Hence the code below:
        IF there is a next page AND some options were just fetched AND you have the same or more
        selected items than fetched items AND all fetched items are already selected -> fetch more!
    */

    if (result.nextPage && newOptions.length && selectedItems.length >= newOptions.length && newOptions.every(newOption => selectedItems.find(selectedItem => selectedItem.value === newOption.value))) {
      fetchItems(result.nextPage);
    }
  };

  (0, _utils.useDidUpdateEffect)(() => {
    setState(state => ({ ...state,
      loading: true,
      nextPage: 1
    }));
    fetchItems(1);
  }, [debouncedSearchTerm, state.filter]);

  const onChange = newSelected => {
    onSelect(newSelected.map(value => {
      const matchingItem = [...state.options, ...selectedItems].find(item => item.value === value);
      return {
        value,
        label: matchingItem.label,
        type: matchingItem.type
      };
    }));
  };

  const onEndReached = () => {
    if (state.nextPage) {
      fetchItems(state.nextPage);
    }
  };

  const isActive = value => {
    const item = selectedItems.find(item => item.value === value);
    return !item || item.isActive;
  };

  const getItemType = value => {
    var _find;

    return (_find = [...state.options, ...selectedItems].find(item => item.value === value)) === null || _find === void 0 ? void 0 : _find.type;
  };

  const getTooltipText = itemType => {
    var _dataTypes$itemType;

    switch (itemType) {
      case _dataTypes.DIMENSION_TYPE_DATA_ELEMENT_OPERAND:
        return _dataTypes.dataTypeMap[_dataTypes.DIMENSION_TYPE_DATA_ELEMENT].getItemName();

      case _dataSets.REPORTING_RATE:
        return _dataTypes.dataTypeMap[_dataTypes.DIMENSION_TYPE_DATA_SET].getItemName();

      case _dataTypes.DIMENSION_TYPE_PROGRAM_DATA_ELEMENT:
      case _dataTypes.DIMENSION_TYPE_PROGRAM_ATTRIBUTE:
        return _dataTypes.dataTypeMap[_dataTypes.DIMENSION_TYPE_EVENT_DATA_ITEM].getItemName();

      default:
        return (_dataTypes$itemType = _dataTypes.dataTypeMap[itemType]) === null || _dataTypes$itemType === void 0 ? void 0 : _dataTypes$itemType.getItemName();
    }
  };

  const getIcon = itemType => {
    switch (itemType) {
      case _dataTypes.DIMENSION_TYPE_INDICATOR:
        return /*#__PURE__*/_react.default.createElement(_ui.IconDimensionIndicator16, null);

      case _dataTypes.DIMENSION_TYPE_DATA_ELEMENT_OPERAND:
      case _dataTypes.DIMENSION_TYPE_DATA_ELEMENT:
        return _DataElementIcon.default;

      case _dataSets.REPORTING_RATE:
        return /*#__PURE__*/_react.default.createElement(_ui.IconDimensionDataSet16, null);

      case _dataTypes.DIMENSION_TYPE_EVENT_DATA_ITEM:
      case _dataTypes.DIMENSION_TYPE_PROGRAM_DATA_ELEMENT:
      case _dataTypes.DIMENSION_TYPE_PROGRAM_ATTRIBUTE:
        return /*#__PURE__*/_react.default.createElement(_ui.IconDimensionEventDataItem16, null);

      case _dataTypes.DIMENSION_TYPE_PROGRAM_INDICATOR:
        return /*#__PURE__*/_react.default.createElement(_ui.IconDimensionProgramIndicator16, null);

      default:
        return _GenericIcon.default;
    }
  };

  return /*#__PURE__*/_react.default.createElement(_ui.Transfer, {
    onChange: _ref6 => {
      let {
        selected
      } = _ref6;
      return onChange(selected);
    },
    selected: selectedItems.map(item => item.value),
    options: [...state.options, ...selectedItems],
    loading: state.loading,
    loadingPicked: state.loading,
    sourceEmptyPlaceholder: /*#__PURE__*/_react.default.createElement(SourceEmptyPlaceholder, {
      loading: state.loading,
      searchTerm: debouncedSearchTerm,
      options: state.options,
      noItemsMessage: noItemsMessage,
      dataType: state.filter.dataType,
      dataTest: "".concat(dataTest, "-empty-source")
    }),
    onEndReached: onEndReached,
    leftHeader: /*#__PURE__*/_react.default.createElement(LeftHeader, {
      dataType: state.filter.dataType,
      setDataType: dataType => {
        setFilter({ ...state.filter,
          dataType,
          group: null,
          subGroup: dataType === _dataTypes.DIMENSION_TYPE_DATA_ELEMENT ? _dataTypes.TOTALS : null
        });
      },
      group: state.filter.group,
      setGroup: group => {
        setFilter({ ...state.filter,
          group
        });
      },
      subGroup: state.filter.subGroup,
      setSubGroup: subGroup => {
        setFilter({ ...state.filter,
          subGroup
        });
      },
      searchTerm: state.searchTerm,
      setSearchTerm: setSearchTerm,
      displayNameProp: displayNameProp,
      dataTest: "".concat(dataTest, "-left-header")
    }),
    enableOrderChange: true,
    height: _dimensionSelectorHelper.TRANSFER_HEIGHT,
    optionsWidth: _dimensionSelectorHelper.TRANSFER_OPTIONS_WIDTH,
    selectedWidth: _dimensionSelectorHelper.TRANSFER_SELECTED_WIDTH,
    selectedEmptyComponent: /*#__PURE__*/_react.default.createElement(EmptySelection, null),
    rightHeader: /*#__PURE__*/_react.default.createElement(RightHeader, {
      infoText: infoBoxMessage
    }),
    rightFooter: rightFooter,
    renderOption: props => /*#__PURE__*/_react.default.createElement(_TransferOption.TransferOption, _extends({}, props, {
      active: isActive(props.value
      /* eslint-disable-line react/prop-types */
      ),
      icon: getIcon(getItemType(props.value
      /* eslint-disable-line react/prop-types */
      )),
      tooltipText: state.filter.dataType === _dataTypes.DIMENSION_TYPE_ALL ? getTooltipText(getItemType(props.value
      /* eslint-disable-line react/prop-types */
      )) : undefined,
      dataTest: "".concat(dataTest, "-transfer-option")
    })),
    dataTest: "".concat(dataTest, "-transfer")
  });
};

ItemSelector.propTypes = {
  displayNameProp: _propTypes.default.string.isRequired,
  onSelect: _propTypes.default.func.isRequired,
  dataTest: _propTypes.default.string,
  infoBoxMessage: _propTypes.default.string,
  noItemsMessage: _propTypes.default.string,
  rightFooter: _propTypes.default.node,
  selectedItems: _propTypes.default.arrayOf(_propTypes.default.exact({
    label: _propTypes.default.string.isRequired,
    value: _propTypes.default.string.isRequired,
    isActive: _propTypes.default.bool,
    type: _propTypes.default.string
  }))
};
ItemSelector.defaultProps = {
  selectedItems: []
};
var _default = ItemSelector;
exports.default = _default;