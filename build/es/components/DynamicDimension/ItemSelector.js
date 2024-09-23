import _JSXStyle from "styled-jsx/style";
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import { Transfer, InputField } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React, { useState, useEffect, useCallback } from 'react';
import GenericIcon from '../../assets/DimensionItemIcons/GenericIcon.js';
import i18n from '../../locales/index.js';
import { TRANSFER_HEIGHT, TRANSFER_OPTIONS_WIDTH, TRANSFER_SELECTED_WIDTH } from '../../modules/dimensionSelectorHelper.js';
import { useDebounce } from '../../modules/utils.js';
import styles from '../styles/DimensionSelector.style.js';
import { TransferOption } from '../TransferOption.js';
const LeftHeader = _ref => {
  let {
    filter,
    setFilter
  } = _ref;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "leftHeader"
  }, /*#__PURE__*/React.createElement(InputField, {
    value: filter,
    onChange: _ref2 => {
      let {
        value
      } = _ref2;
      return setFilter(value);
    },
    placeholder: i18n.t('Search'),
    initialFocus: true,
    type: 'search'
  })), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
};
LeftHeader.propTypes = {
  filter: PropTypes.string,
  setFilter: PropTypes.func
};
const EmptySelection = () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
  className: `jsx-${styles.__hash}` + " " + "emptyList"
}, i18n.t('No items selected')), /*#__PURE__*/React.createElement(_JSXStyle, {
  id: styles.__hash
}, styles));
const RightHeader = () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
  className: `jsx-${styles.__hash}` + " " + "rightHeader"
}, i18n.t('Selected Items')), /*#__PURE__*/React.createElement(_JSXStyle, {
  id: styles.__hash
}, styles));
const SourceEmptyPlaceholder = _ref3 => {
  let {
    loading,
    filter,
    options,
    noItemsMessage
  } = _ref3;
  let message = '';
  if (!loading && !options.length && !filter) {
    message = noItemsMessage || i18n.t('No data');
  } else if (!loading && !options.length && filter) {
    message = i18n.t('Nothing found for {{- searchTerm}}', {
      searchTerm: filter
    });
  }
  return message && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    className: `jsx-${styles.__hash}` + " " + "emptyList"
  }, message), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
};
SourceEmptyPlaceholder.propTypes = {
  filter: PropTypes.string,
  loading: PropTypes.bool,
  noItemsMessage: PropTypes.string,
  options: PropTypes.array
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
  const [state, setState] = useState({
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
  const debouncedFilter = useDebounce(state.filter, 200);
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
  useEffect(() => {
    fetchItems(1);
  }, [debouncedFilter]);
  const onChange = useCallback(newSelected => {
    const newSelectedWithLabel = newSelected.map(value => ({
      value,
      label: [...state.options, ...state.selected].find(item => item.value === value).label
    }));
    setSelected(newSelectedWithLabel);
    onSelect(newSelectedWithLabel);
  }, [state.options, state.selected]);
  const onEndReached = useCallback(() => {
    if (state.nextPage) {
      fetchItems(state.nextPage);
    }
  }, [state.nextPage]);
  return /*#__PURE__*/React.createElement(Transfer, {
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
    sourceEmptyPlaceholder: /*#__PURE__*/React.createElement(SourceEmptyPlaceholder, {
      loading: state.loading,
      filter: debouncedFilter,
      options: state.options,
      noItemsMessage: noItemsMessage
    }),
    onEndReached: onEndReached,
    leftHeader: /*#__PURE__*/React.createElement(LeftHeader, {
      filter: state.filter,
      setFilter: setFilter
    }),
    enableOrderChange: true,
    height: TRANSFER_HEIGHT,
    optionsWidth: TRANSFER_OPTIONS_WIDTH,
    selectedWidth: TRANSFER_SELECTED_WIDTH,
    selectedEmptyComponent: /*#__PURE__*/React.createElement(EmptySelection, null),
    rightHeader: /*#__PURE__*/React.createElement(RightHeader, null),
    rightFooter: rightFooter,
    renderOption: props => /*#__PURE__*/React.createElement(TransferOption, _extends({}, props, {
      icon: GenericIcon,
      dataTest: `${dataTest}-transfer-option`
    })),
    dataTest: `${dataTest}-transfer`
  });
};
ItemSelector.propTypes = {
  onFetch: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  dataTest: PropTypes.string,
  initialSelected: PropTypes.arrayOf(PropTypes.exact({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  })),
  noItemsMessage: PropTypes.string,
  rightFooter: PropTypes.node
};
ItemSelector.defaultProps = {
  initialSelected: []
};
export default ItemSelector;