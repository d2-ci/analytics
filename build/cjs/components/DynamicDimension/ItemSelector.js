"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _ui = require("@dhis2/ui");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _GenericIcon = _interopRequireDefault(require("../../assets/DimensionItemIcons/GenericIcon.js"));
var _index = _interopRequireDefault(require("../../locales/index.js"));
var _dimensionSelectorHelper = require("../../modules/dimensionSelectorHelper.js");
var _utils = require("../../modules/utils.js");
var _DimensionSelectorStyle = _interopRequireDefault(require("../styles/DimensionSelector.style.js"));
var _TransferOption = require("../TransferOption.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const LeftHeader = _ref => {
  let {
    filter,
    setFilter
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_DimensionSelectorStyle.default.__hash}` + " " + "leftHeader"
  }, /*#__PURE__*/_react.default.createElement(_ui.InputField, {
    value: filter,
    onChange: _ref2 => {
      let {
        value
      } = _ref2;
      return setFilter(value);
    },
    placeholder: _index.default.t('Search'),
    initialFocus: true,
    type: 'search'
  })), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _DimensionSelectorStyle.default.__hash
  }, _DimensionSelectorStyle.default));
};
LeftHeader.propTypes = {
  filter: _propTypes.default.string,
  setFilter: _propTypes.default.func
};
const EmptySelection = () => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("p", {
  className: `jsx-${_DimensionSelectorStyle.default.__hash}` + " " + "emptyList"
}, _index.default.t('No items selected')), /*#__PURE__*/_react.default.createElement(_style.default, {
  id: _DimensionSelectorStyle.default.__hash
}, _DimensionSelectorStyle.default));
const RightHeader = () => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("p", {
  className: `jsx-${_DimensionSelectorStyle.default.__hash}` + " " + "rightHeader"
}, _index.default.t('Selected Items')), /*#__PURE__*/_react.default.createElement(_style.default, {
  id: _DimensionSelectorStyle.default.__hash
}, _DimensionSelectorStyle.default));
const SourceEmptyPlaceholder = _ref3 => {
  let {
    loading,
    filter,
    options,
    noItemsMessage
  } = _ref3;
  let message = '';
  if (!loading && !options.length && !filter) {
    message = noItemsMessage || _index.default.t('No data');
  } else if (!loading && !options.length && filter) {
    message = _index.default.t('Nothing found for {{- searchTerm}}', {
      searchTerm: filter
    });
  }
  return message && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("p", {
    className: `jsx-${_DimensionSelectorStyle.default.__hash}` + " " + "emptyList"
  }, message), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _DimensionSelectorStyle.default.__hash
  }, _DimensionSelectorStyle.default));
};
SourceEmptyPlaceholder.propTypes = {
  filter: _propTypes.default.string,
  loading: _propTypes.default.bool,
  noItemsMessage: _propTypes.default.string,
  options: _propTypes.default.array
};
const ItemSelector = _ref4 => {
  let {
    initialSelected,
    noItemsMessage,
    onFetch,
    onSelect,
    rightFooter,
    dataTest
  } = _ref4;
  const [state, setState] = (0, _react.useState)({
    filter: '',
    selected: initialSelected,
    // FIXME: keeping selected in state is redundant, use the initialSelected prop directly instead
    // The useCallback from onChange should be removed in favor of a regular fn as well
    options: [],
    loading: true,
    nextPage: null // FIXME: Selecting all 50 items from a page prevents the loading of more items.
    // Implement the solution found in the DataDimension/ItemSelector.js
  });
  const setFilter = filter => setState(state => ({
    ...state,
    filter
  }));
  const setSelected = selected => setState(state => ({
    ...state,
    selected
  }));
  const debouncedFilter = (0, _utils.useDebounce)(state.filter, 200);
  const fetchItems = async page => {
    var _result$dimensionItem;
    setState(state => ({
      ...state,
      loading: true
    }));
    const result = await onFetch(page, state.filter);
    const newOptions = (_result$dimensionItem = result.dimensionItems) === null || _result$dimensionItem === void 0 ? void 0 : _result$dimensionItem.map(_ref5 => {
      let {
        id,
        name,
        disabled
      } = _ref5;
      return {
        label: name,
        value: id,
        disabled
      };
    });
    setState(state => ({
      ...state,
      loading: false,
      options: page > 1 ? [...state.options, ...newOptions] : newOptions,
      nextPage: result.nextPage
    }));
  };
  (0, _react.useEffect)(() => {
    fetchItems(1);
  }, [debouncedFilter]);
  const onChange = (0, _react.useCallback)(newSelected => {
    const newSelectedWithLabel = newSelected.map(value => ({
      value,
      label: [...state.options, ...state.selected].find(item => item.value === value).label
    }));
    setSelected(newSelectedWithLabel);
    onSelect(newSelectedWithLabel);
  }, [state.options, state.selected]);
  const onEndReached = (0, _react.useCallback)(() => {
    if (state.nextPage) {
      fetchItems(state.nextPage);
    }
  }, [state.nextPage]);
  return /*#__PURE__*/_react.default.createElement(_ui.Transfer, {
    onChange: _ref6 => {
      let {
        selected
      } = _ref6;
      return onChange(selected);
    },
    selected: state.selected.map(item => item.value),
    options: [...state.options, ...state.selected],
    loading: state.loading,
    loadingPicked: state.loading,
    sourceEmptyPlaceholder: /*#__PURE__*/_react.default.createElement(SourceEmptyPlaceholder, {
      loading: state.loading,
      filter: debouncedFilter,
      options: state.options,
      noItemsMessage: noItemsMessage
    }),
    onEndReached: onEndReached,
    leftHeader: /*#__PURE__*/_react.default.createElement(LeftHeader, {
      filter: state.filter,
      setFilter: setFilter
    }),
    enableOrderChange: true,
    height: _dimensionSelectorHelper.TRANSFER_HEIGHT,
    optionsWidth: _dimensionSelectorHelper.TRANSFER_OPTIONS_WIDTH,
    selectedWidth: _dimensionSelectorHelper.TRANSFER_SELECTED_WIDTH,
    selectedEmptyComponent: /*#__PURE__*/_react.default.createElement(EmptySelection, null),
    rightHeader: /*#__PURE__*/_react.default.createElement(RightHeader, null),
    rightFooter: rightFooter,
    renderOption: props => /*#__PURE__*/_react.default.createElement(_TransferOption.TransferOption, _extends({}, props, {
      icon: _GenericIcon.default,
      dataTest: `${dataTest}-transfer-option`
    })),
    dataTest: `${dataTest}-transfer`
  });
};
ItemSelector.propTypes = {
  onFetch: _propTypes.default.func.isRequired,
  onSelect: _propTypes.default.func.isRequired,
  dataTest: _propTypes.default.string,
  initialSelected: _propTypes.default.arrayOf(_propTypes.default.exact({
    label: _propTypes.default.string.isRequired,
    value: _propTypes.default.string.isRequired
  })),
  noItemsMessage: _propTypes.default.string,
  rightFooter: _propTypes.default.node
};
ItemSelector.defaultProps = {
  initialSelected: []
};
var _default = exports.default = ItemSelector;