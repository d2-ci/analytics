import _JSXStyle from "styled-jsx/style";
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { Transfer } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import GenericIcon from '../../assets/DimensionItemIcons/GenericIcon.js';
import i18n from '../../locales/index.js';
import { TRANSFER_HEIGHT, TRANSFER_OPTIONS_WIDTH, TRANSFER_SELECTED_WIDTH } from '../../modules/dimensionSelectorHelper.js';
import { useDebounce, useDidUpdateEffect } from '../../modules/utils.js';
import { SelectedEmptyPlaceholder } from '../DataDimension/SelectedEmptyPlaceholder.js';
import { SourceEmptyPlaceholder } from '../DataDimension/SourceEmptyPlaceholder.js';
import styles from '../styles/DimensionSelector.style.js';
import { TransferOption } from '../TransferOption.js';
const SELECTED_ITEMS_PROP_DEFAULT = [];
const ItemSelector = ({
  selectedItems = SELECTED_ITEMS_PROP_DEFAULT,
  noItemsMessage,
  onFetch,
  onSelect,
  rightFooter,
  dataTest
}) => {
  const [state, setState] = useState({
    searchTerm: '',
    options: [],
    loading: true,
    nextPage: 1
  });
  const debouncedSearchTerm = useDebounce(state.searchTerm, 500);
  const setSearchTerm = searchTerm => setState(state => ({
    ...state,
    searchTerm
  }));
  const fetchItems = async page => {
    var _result$dimensionItem;
    setState(state => ({
      ...state,
      nextPage: page === 1 ? 1 : state.nextPage,
      loading: true
    }));
    const result = await onFetch(page, state.searchTerm);
    const newOptions = (_result$dimensionItem = result.dimensionItems) === null || _result$dimensionItem === void 0 ? void 0 : _result$dimensionItem.map(({
      id,
      name,
      disabled
    }) => ({
      label: name,
      value: id,
      disabled
    }));
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
  useDidUpdateEffect(() => {
    fetchItems(1);
  }, [debouncedSearchTerm]);
  const onChange = selectedIds => {
    const newSelectedWithLabel = selectedIds.map(id => ({
      value: id,
      label: [...state.options, ...selectedItems].find(item => item.value === id).label
    }));
    onSelect(newSelectedWithLabel);
  };
  const onEndReached = () => {
    if (state.nextPage) {
      fetchItems(state.nextPage);
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Transfer, {
    onChange: ({
      selected
    }) => onChange(selected),
    selected: selectedItems.map(item => item.value),
    options: [...state.options, ...selectedItems],
    loading: state.loading,
    loadingPicked: state.loading,
    sourceEmptyPlaceholder: /*#__PURE__*/React.createElement(SourceEmptyPlaceholder, {
      loading: state.loading,
      searchTerm: debouncedSearchTerm,
      options: state.options,
      noItemsMessage: noItemsMessage
    }),
    onEndReached: onEndReached,
    filterable: true,
    filterPlaceholder: i18n.t('Search'),
    filterablePicked: false,
    searchTerm: state.searchTerm,
    onFilterChange: ({
      value
    }) => setSearchTerm(value),
    enableOrderChange: true,
    height: TRANSFER_HEIGHT,
    optionsWidth: TRANSFER_OPTIONS_WIDTH,
    selectedWidth: TRANSFER_SELECTED_WIDTH,
    selectedEmptyComponent: /*#__PURE__*/React.createElement(SelectedEmptyPlaceholder, null),
    rightHeader: /*#__PURE__*/React.createElement("p", {
      className: `jsx-${styles.__hash}` + " " + "rightHeader"
    }, i18n.t('Selected Items')),
    rightFooter: rightFooter,
    renderOption: props => /*#__PURE__*/React.createElement(TransferOption, _extends({}, props, {
      icon: GenericIcon,
      dataTest: `${dataTest}-transfer-option`
    })),
    dataTest: `${dataTest}-transfer`
  }), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
};
ItemSelector.propTypes = {
  onFetch: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  dataTest: PropTypes.string,
  noItemsMessage: PropTypes.string,
  rightFooter: PropTypes.node,
  selectedItems: PropTypes.arrayOf(PropTypes.exact({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  }))
};
export default ItemSelector;