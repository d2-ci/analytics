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
var _index = _interopRequireDefault(require("../../locales/index.js"));
var _dataSets = require("../../modules/dataSets.js");
var _dataTypes = require("../../modules/dataTypes.js");
var _dimensionListItem = require("../../modules/dimensionListItem.js");
var _dimensionSelectorHelper = require("../../modules/dimensionSelectorHelper.js");
var _utils = require("../../modules/utils.js");
var _DimensionSelectorStyle = _interopRequireDefault(require("../styles/DimensionSelector.style.js"));
var _TransferOption = require("../TransferOption.js");
var _CalculationModal = _interopRequireDefault(require("./Calculation/CalculationModal.js"));
var _DataTypeSelector = _interopRequireDefault(require("./DataTypeSelector.js"));
var _GroupSelector = _interopRequireDefault(require("./GroupSelector.js"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const LeftHeader = _ref => {
  let {
    searchTerm,
    setSearchTerm,
    dataType,
    dataTypes,
    setDataType,
    group,
    setGroup,
    subGroup,
    setSubGroup,
    displayNameProp,
    dataTest
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_DimensionSelectorStyle.default.__hash}` + " " + "leftHeader"
  }, /*#__PURE__*/_react.default.createElement(_ui.InputField, {
    value: searchTerm,
    onChange: _ref2 => {
      let {
        value
      } = _ref2;
      return setSearchTerm(value);
    },
    placeholder: _index.default.t('Search by data item name'),
    dataTest: `${dataTest}-filter-input-field`,
    dense: true,
    initialFocus: true,
    type: 'search'
  }), /*#__PURE__*/_react.default.createElement(_DataTypeSelector.default, {
    currentDataType: dataType,
    onChange: setDataType,
    dataTest: `${dataTest}-data-types-select-field`,
    dataTypes: dataTypes
  }), ![_dataTypes.DIMENSION_TYPE_EXPRESSION_DIMENSION_ITEM, _dataTypes.DIMENSION_TYPE_ALL].includes(dataType) && /*#__PURE__*/_react.default.createElement(_GroupSelector.default, {
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
  dataTypes: _propTypes.default.array,
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
  className: `jsx-${_DimensionSelectorStyle.default.__hash}` + " " + "emptyList"
}, _index.default.t('No items selected')), /*#__PURE__*/_react.default.createElement(_style.default, {
  id: _DimensionSelectorStyle.default.__hash
}, _DimensionSelectorStyle.default));
const RightHeader = _ref3 => {
  let {
    infoBoxMessage
  } = _ref3;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("p", {
    className: `jsx-${_DimensionSelectorStyle.default.__hash}` + " " + "rightHeader"
  }, _index.default.t('Selected Items')), infoBoxMessage && /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_DimensionSelectorStyle.default.__hash}` + " " + "info-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_DimensionSelectorStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement(_ui.IconInfo16, null)), /*#__PURE__*/_react.default.createElement("span", {
    className: `jsx-${_DimensionSelectorStyle.default.__hash}` + " " + "info-text"
  }, infoBoxMessage)), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _DimensionSelectorStyle.default.__hash
  }, _DimensionSelectorStyle.default));
};
RightHeader.propTypes = {
  infoBoxMessage: _propTypes.default.string
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
        case _dataTypes.DIMENSION_TYPE_EXPRESSION_DIMENSION_ITEM:
          message = _index.default.t('No calculations found');
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
          searchTerm
        });
        break;
      case _dataTypes.DIMENSION_TYPE_DATA_ELEMENT:
        message = _index.default.t('No data elements found for "{{- searchTerm}}"', {
          searchTerm
        });
        break;
      case _dataTypes.DIMENSION_TYPE_DATA_SET:
        message = _index.default.t('No data sets found for "{{- searchTerm}}"', {
          searchTerm
        });
        break;
      case _dataTypes.DIMENSION_TYPE_EVENT_DATA_ITEM:
        message = _index.default.t('No event data items found for "{{- searchTerm}}"', {
          searchTerm
        });
        break;
      case _dataTypes.DIMENSION_TYPE_PROGRAM_INDICATOR:
        message = _index.default.t('No program indicators found for "{{- searchTerm}}"', {
          searchTerm
        });
        break;
      case _dataTypes.DIMENSION_TYPE_EXPRESSION_DIMENSION_ITEM:
        message = _index.default.t('No calculations found for "{{- searchTerm}}"', {
          searchTerm
        });
        break;
      default:
        message = _index.default.t('Nothing found for "{{- searchTerm}}"', {
          searchTerm
        });
        break;
    }
  }
  return message && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("p", {
    "data-test": dataTest,
    className: `jsx-${_DimensionSelectorStyle.default.__hash}` + " " + "emptyList"
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
    dataTypes,
    dataTest,
    onEDISave
  } = _ref5;
  const [state, setState] = (0, _react.useState)({
    searchTerm: '',
    dataTypes,
    filter: {
      dataType: dataTypes.length === 1 ? dataTypes[0].id : _dataTypes.DIMENSION_TYPE_ALL,
      group: null,
      subGroup: dataTypes.length === 1 && dataTypes[0].id === _dataTypes.DIMENSION_TYPE_DATA_ELEMENT ? _dataTypes.TOTALS : null
    },
    options: [],
    loading: true,
    nextPage: 1,
    supportsEDI: dataTypes.map(_ref6 => {
      let {
        id
      } = _ref6;
      return id;
    }).includes(_dataTypes.DIMENSION_TYPE_EXPRESSION_DIMENSION_ITEM)
  });
  const [currentCalculation, setCurrentCalculation] = (0, _react.useState)();
  const dataEngine = (0, _appRuntime.useDataEngine)();
  const setSearchTerm = searchTerm => setState(state => ({
    ...state,
    searchTerm
  }));
  const debouncedSearchTerm = (0, _utils.useDebounce)(state.searchTerm, 500);
  const fetchItems = async page => {
    var _result$dimensionItem;
    setState(state => ({
      ...state,
      nextPage: page === 1 ? 1 : state.nextPage,
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
            label: `${item.name} - ${metric.getName()}`,
            value: `${item.id}.${metric.id}`,
            disabled: item.disabled,
            type: item.dimensionItemType,
            expression: item.expression
          });
        } else {
          _dataSets.DATA_SETS_CONSTANTS.forEach(metric => {
            newOptions.push({
              label: `${item.name} - ${metric.getName()}`,
              value: `${item.id}.${metric.id}`,
              disabled: item.disabled,
              type: item.dimensionItemType,
              expression: item.expression
            });
          });
        }
      } else {
        newOptions.push({
          label: item.name,
          value: item.id,
          disabled: item.disabled,
          type: item.dimensionItemType,
          expression: item.expression
        });
      }
    });
    setState(state => ({
      ...state,
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
    fetchItems(1);
  }, [debouncedSearchTerm, state.filter]);
  const onChange = newSelected => {
    onSelect(newSelected.map(value => {
      const matchingItem = [...state.options, ...selectedItems].find(item => item.value === value);
      return {
        value,
        label: matchingItem.label,
        type: matchingItem.type,
        ...(matchingItem.expression ? {
          expression: matchingItem.expression
        } : {})
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
  const onSaveCalculation = async _ref7 => {
    let {
      id,
      name,
      expression,
      isNew
    } = _ref7;
    onEDISave({
      id,
      name,
      expression,
      type: _dataTypes.DIMENSION_TYPE_EXPRESSION_DIMENSION_ITEM
    });

    // close the modal
    setCurrentCalculation();

    // reload the list of options
    fetchItems(1);
    if (isNew) {
      // select the new calculation
      onSelect([...selectedItems, {
        value: id,
        label: name,
        expression,
        type: _dataTypes.DIMENSION_TYPE_EXPRESSION_DIMENSION_ITEM
      }]);
    }
  };
  const onDeleteCalculation = _ref8 => {
    let {
      id
    } = _ref8;
    // close the modal
    setCurrentCalculation();

    // reload the list of options
    fetchItems(1);

    // unselect the deleted calculation
    onSelect([...selectedItems.filter(item => item.value !== id)]);
  };
  const onSetGroup = group => setState(state => ({
    ...state,
    nextPage: 1,
    filter: {
      ...state.filter,
      group
    }
  }));
  const onSetSubGroup = subGroup => setState(state => ({
    ...state,
    nextPage: 1,
    filter: {
      ...state.filter,
      subGroup
    }
  }));
  const onSetDataType = dataType => setState(state => ({
    ...state,
    nextPage: 1,
    filter: {
      ...state.filter,
      dataType,
      group: null,
      subGroup: dataType === _dataTypes.DIMENSION_TYPE_DATA_ELEMENT ? _dataTypes.TOTALS : null
    }
  }));
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_ui.Transfer, {
    onChange: _ref9 => {
      let {
        selected
      } = _ref9;
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
      dataTest: `${dataTest}-empty-source`
    }),
    onEndReached: onEndReached,
    leftHeader: /*#__PURE__*/_react.default.createElement(LeftHeader, {
      dataTypes: state.dataTypes,
      dataType: state.filter.dataType,
      setDataType: onSetDataType,
      group: state.filter.group,
      setGroup: onSetGroup,
      subGroup: state.filter.subGroup,
      setSubGroup: onSetSubGroup,
      searchTerm: state.searchTerm,
      setSearchTerm: setSearchTerm,
      displayNameProp: displayNameProp,
      dataTest: `${dataTest}-left-header`
    }),
    leftFooter: state.supportsEDI ? /*#__PURE__*/_react.default.createElement("div", {
      className: `jsx-${_DimensionSelectorStyle.default.__hash}` + " " + "calculation-button"
    }, /*#__PURE__*/_react.default.createElement(_ui.Button, {
      icon: /*#__PURE__*/_react.default.createElement(_ui.IconAdd24, null),
      onClick: () => setCurrentCalculation({}),
      small: true
    }, _index.default.t('Calculation'))) : undefined,
    enableOrderChange: true,
    height: _dimensionSelectorHelper.TRANSFER_HEIGHT,
    optionsWidth: _dimensionSelectorHelper.TRANSFER_OPTIONS_WIDTH,
    selectedWidth: _dimensionSelectorHelper.TRANSFER_SELECTED_WIDTH,
    selectedEmptyComponent: /*#__PURE__*/_react.default.createElement(EmptySelection, null),
    rightHeader: /*#__PURE__*/_react.default.createElement(RightHeader, {
      infoBoxMessage: infoBoxMessage
    }),
    rightFooter: rightFooter,
    renderOption: props => {
      var _props$access;
      return /*#__PURE__*/_react.default.createElement(_TransferOption.TransferOption
      /* eslint-disable react/prop-types */, _extends({}, props, {
        active: isActive(props.value),
        icon: (0, _dimensionListItem.getIcon)(getItemType(props.value)),
        tooltipText: (0, _dimensionListItem.getTooltipText)({
          type: getItemType(props.value),
          expression: props.expression
        }),
        dataTest: `${dataTest}-transfer-option`,
        onEditClick: getItemType(props.value) === _dataTypes.DIMENSION_TYPE_EXPRESSION_DIMENSION_ITEM && !(((_props$access = props.access) === null || _props$access === void 0 ? void 0 : _props$access.write) === false) && state.supportsEDI ? () => setCurrentCalculation({
          id: props.value,
          name: props.label,
          expression: props.expression
        }) : undefined
        /* eslint-enable react/prop-types */
      }));
    },
    dataTest: `${dataTest}-transfer`
  }), currentCalculation && state.supportsEDI && /*#__PURE__*/_react.default.createElement(_CalculationModal.default, {
    calculation: currentCalculation,
    onSave: onSaveCalculation,
    onClose: () => setCurrentCalculation(),
    onDelete: onDeleteCalculation,
    displayNameProp: displayNameProp
  }), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _DimensionSelectorStyle.default.__hash
  }, _DimensionSelectorStyle.default));
};
ItemSelector.propTypes = {
  displayNameProp: _propTypes.default.string.isRequired,
  onSelect: _propTypes.default.func.isRequired,
  dataTest: _propTypes.default.string,
  dataTypes: _propTypes.default.array,
  infoBoxMessage: _propTypes.default.string,
  noItemsMessage: _propTypes.default.string,
  rightFooter: _propTypes.default.node,
  selectedItems: _propTypes.default.arrayOf(_propTypes.default.exact({
    label: _propTypes.default.string.isRequired,
    value: _propTypes.default.string.isRequired,
    isActive: _propTypes.default.bool,
    type: _propTypes.default.string,
    expression: _propTypes.default.string
  })),
  onEDISave: _propTypes.default.func
};
ItemSelector.defaultProps = {
  selectedItems: []
};
var _default = exports.default = ItemSelector;