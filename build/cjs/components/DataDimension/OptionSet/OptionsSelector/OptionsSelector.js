"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OptionsSelector = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _appRuntime = require("@dhis2/app-runtime");
var _ui = require("@dhis2/ui");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _index = _interopRequireDefault(require("../../../../locales/index.js"));
var _utils = require("../../../../modules/utils.js");
var _EmptySelection = require("./EmptySelection.js");
var _SourceEmptyPlaceholder = require("./SourceEmptyPlaceholder.js");
var _OptionsSelectorStyle = _interopRequireDefault(require("./styles/OptionsSelector.style.js"));
var _TransferOption = require("./TransferOption.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const optionSetOptionsQuery = {
  options: {
    resource: 'options/gist',
    params: _ref => {
      let {
        displayNameProp,
        optionSetId,
        page,
        searchTerm
      } = _ref;
      const filters = [`optionSet.id:eq:${optionSetId}`];
      if (searchTerm) {
        filters.push(`name:ilike:${searchTerm}`);
      }
      return {
        fields: `id,${displayNameProp}~rename(name)`,
        filter: filters,
        paging: true,
        page
      };
    }
  }
};
const OptionsSelector = _ref2 => {
  let {
    displayNameProp,
    optionSetId,
    selectedOptions,
    onSelect,
    dataTest
  } = _ref2;
  const [state, setState] = (0, _react.useState)({
    searchTerm: '',
    options: [],
    loading: true,
    nextPage: undefined
  });
  const debouncedSearchTerm = (0, _utils.useDebounce)(state.searchTerm, 500);
  const {
    data,
    refetch
  } = (0, _appRuntime.useDataQuery)(optionSetOptionsQuery, {
    variables: {
      optionSetId,
      displayNameProp,
      page: state.nextPage || 1,
      searchTerm: state.searchTerm
    }
  });
  const setSearchTerm = searchTerm => {
    setState(state => ({
      ...state,
      searchTerm
    }));
  };
  const fetchOptions = page => {
    setState(state => ({
      ...state,
      nextPage: page === 1 ? undefined : state.nextPage,
      loading: true
    }));
    refetch({
      optionSetId,
      displayNameProp,
      page,
      searchTerm: state.searchTerm
    });
  };
  (0, _utils.useDidUpdateEffect)(() => {
    fetchOptions(1);
  }, [debouncedSearchTerm]);
  (0, _react.useEffect)(() => {
    if (data !== null && data !== void 0 && data.options) {
      setState(state => ({
        ...state,
        loading: false,
        options: data.options.options.map(_ref3 => {
          let {
            id,
            name
          } = _ref3;
          return {
            value: id,
            label: name
          };
        }),
        nextPage: data.options.pager.nextPage
      }));
    }
  }, [data]);
  const onEndReached = () => {
    if (state.nextPage) {
      fetchOptions(state.nextPage);
    }
  };
  const displayOptions = [...state.options, ...selectedOptions.filter(selectedOption => !state.options.find(option => option.value === selectedOption.value))];
  return /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_OptionsSelectorStyle.default.__hash}`
  }, /*#__PURE__*/_react.default.createElement(_ui.Transfer, {
    height: "260px",
    loading: state.loading,
    loadingPicked: state.loading,
    options: displayOptions,
    sourceEmptyPlaceholder: /*#__PURE__*/_react.default.createElement(_SourceEmptyPlaceholder.SourceEmptyPlaceholder, {
      loading: state.loading,
      searchTerm: debouncedSearchTerm,
      options: state.options,
      dataTest: `${dataTest}-empty-source`
    }),
    selected: selectedOptions.map(_ref4 => {
      let {
        value
      } = _ref4;
      return value;
    }),
    selectedEmptyComponent: /*#__PURE__*/_react.default.createElement(_EmptySelection.EmptySelection, null),
    renderOption: props => /*#__PURE__*/_react.default.createElement(_TransferOption.TransferOption, props),
    enableOrderChange: true,
    filterable: true,
    filterPlaceholder: _index.default.t('Search by option name'),
    filterablePicked: false,
    searchTerm: state.searchTerm,
    onFilterChange: _ref5 => {
      let {
        value
      } = _ref5;
      return setSearchTerm(value);
    },
    rightHeader: /*#__PURE__*/_react.default.createElement("p", {
      className: `jsx-${_OptionsSelectorStyle.default.__hash}` + " " + "right-header"
    }, _index.default.t('Selected options')),
    onEndReached: onEndReached,
    onChange: _ref6 => {
      let {
        selected
      } = _ref6;
      console.log('transfer change', selected);
      const selectedOptions = displayOptions.filter(_ref7 => {
        let {
          value
        } = _ref7;
        return selected.includes(value);
      });
      onSelect(selectedOptions);
    }
  }), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _OptionsSelectorStyle.default.__hash
  }, _OptionsSelectorStyle.default));
};
exports.OptionsSelector = OptionsSelector;
OptionsSelector.propTypes = {
  displayNameProp: _propTypes.default.string.isRequired,
  optionSetId: _propTypes.default.string.isRequired,
  dataTest: _propTypes.default.string,
  selectedOptions: _propTypes.default.array,
  onSelect: _propTypes.default.func
};