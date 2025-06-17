import _JSXStyle from "styled-jsx/style";
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { useDataEngine } from '@dhis2/app-runtime';
import { Button, IconArrowLeft16, Transfer } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { apiFetchOptions } from '../../../api/dimensions.js';
import i18n from '../../../locales/index.js';
import { DIMENSION_TYPE_PROGRAM_DATA_ELEMENT, DIMENSION_TYPE_PROGRAM_ATTRIBUTE_OPTION, DIMENSION_TYPE_PROGRAM_DATA_ELEMENT_OPTION, DIMENSION_TYPE_PROGRAM_ATTRIBUTE } from '../../../modules/dataTypes.js';
import { getIcon, getDimensionType } from '../../../modules/dimensionListItem.js';
import { TRANSFER_HEIGHT, TRANSFER_OPTIONS_WIDTH, TRANSFER_SELECTED_WIDTH } from '../../../modules/dimensionSelectorHelper.js';
import { useDebounce, useDidUpdateEffect } from '../../../modules/utils.js';
import styles from '../../styles/DimensionSelector.style.js';
import { SelectedEmptyPlaceholder } from '../SelectedEmptyPlaceholder.js';
import { SourceEmptyPlaceholder } from '../SourceEmptyPlaceholder.js';
import { TransferOption } from '../TransferOption.js';
import itemOptionSelectorStyles from './styles/ItemOptionSelector.style.js';
const formatOptionsFilters = (dataItemType, dataItemId) => {
  const optionsFilters = {
    dataItemId
  };
  if (dataItemType === DIMENSION_TYPE_PROGRAM_DATA_ELEMENT) {
    optionsFilters.dataType = DIMENSION_TYPE_PROGRAM_DATA_ELEMENT_OPTION;
  } else if (dataItemType === DIMENSION_TYPE_PROGRAM_ATTRIBUTE) {
    optionsFilters.dataType = DIMENSION_TYPE_PROGRAM_ATTRIBUTE_OPTION;
  }
  return optionsFilters;
};
export const ItemOptionsSelector = ({
  id: dataItemId,
  name: dataItemName,
  type: dataItemType,
  selectedItems,
  infoDataItem,
  setInfoDataItem,
  displayNameProp,
  itemsRef,
  onEditClick,
  onSelect,
  onClose,
  dataTest
}) => {
  var _state$filter;
  const [state, setState] = useState({
    searchTerm: '',
    filter: formatOptionsFilters(dataItemType, dataItemId),
    options: [],
    loading: true,
    nextPage: 1
  });
  const debouncedSearchTerm = useDebounce(state.searchTerm, 500);
  const dataEngine = useDataEngine();
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
    const result = await apiFetchOptions({
      dataEngine,
      nameProp: displayNameProp,
      page,
      filter: state.filter,
      searchTerm: state.searchTerm
    });
    const newOptions = [];
    (_result$dimensionItem = result.dimensionItems) === null || _result$dimensionItem === void 0 ? void 0 : _result$dimensionItem.forEach(item => {
      newOptions.push({
        label: item.name,
        value: item.id,
        disabled: item.disabled,
        // XXX is this returned by the api?!
        type: item.dimensionItemType,
        expression: item.expression,
        optionSetId: item.optionSetId
      });
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
  useEffect(() => {
    setState(state => ({
      ...state,
      filter: {
        ...state.filter,
        ...formatOptionsFilters(dataItemType, dataItemId)
      }
    }));
  }, [dataItemId, dataItemType]);
  useDidUpdateEffect(() => {
    fetchItems(1);
  }, [debouncedSearchTerm, (_state$filter = state.filter) === null || _state$filter === void 0 ? void 0 : _state$filter.dataItemId]);
  const onChange = selectedIds => {
    const newSelectedItems = selectedIds.map(id => {
      const matchingItem = [...state.options, ...selectedItems].find(item => item.value === id);
      return {
        value: id,
        label: matchingItem.label,
        type: matchingItem.type,
        optionSetId: matchingItem.optionSetId,
        ...(matchingItem.expression ? {
          expression: matchingItem.expression
        } : {})
      };
    });
    onSelect(newSelectedItems);
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
  return /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash} jsx-${itemOptionSelectorStyles.__hash}` + " " + "transfer-container"
  }, /*#__PURE__*/React.createElement(Transfer, {
    onChange: ({
      selected
    }) => onChange(selected),
    selected: selectedItems.map(item => item.value),
    options: [...state.options,
    // remove items already in the options list
    ...selectedItems.filter(selectedItem => {
      var _state$options;
      return !((_state$options = state.options) !== null && _state$options !== void 0 && _state$options.find(option => option.value === selectedItem.value));
    })],
    loading: state.loading,
    loadingPicked: state.loading,
    sourceEmptyPlaceholder: /*#__PURE__*/React.createElement(SourceEmptyPlaceholder, {
      loading: state.loading,
      searchTerm: debouncedSearchTerm,
      options: state.options,
      allItemsSelectedMessage: state.options.every(sourceItem => Boolean(selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.find(selectedItem => sourceItem.value === selectedItem.value))) && !state.nextPage ? i18n.t('All available options are already selected') : '',
      noItemsMessage: i18n.t('No available options for this item'),
      dataType: state.filter.dataType,
      dataTest: `${dataTest}-empty-source`
    }),
    onEndReached: onEndReached,
    filterable: true,
    filterPlaceholder: i18n.t('Search by option name'),
    filterablePicked: false,
    searchTerm: state.searchTerm,
    onFilterChange: ({
      value
    }) => setSearchTerm(value),
    leftHeader: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: `jsx-${styles.__hash} jsx-${itemOptionSelectorStyles.__hash}` + " " + "option-set-back-button"
    }, /*#__PURE__*/React.createElement(Button, {
      onClick: onClose,
      icon: /*#__PURE__*/React.createElement(IconArrowLeft16, null),
      small: true,
      dataTest: `${dataTest}-option-set-back-button`
    }, i18n.t('Back to all items'))), /*#__PURE__*/React.createElement("div", {
      className: `jsx-${styles.__hash} jsx-${itemOptionSelectorStyles.__hash}` + " " + "option-set-name"
    }, dataItemName, ": ", i18n.t('Options'))),
    rightHeader: /*#__PURE__*/React.createElement("p", {
      className: `jsx-${styles.__hash} jsx-${itemOptionSelectorStyles.__hash}` + " " + "rightHeader"
    }, i18n.t('Selected items')),
    enableOrderChange: true,
    height: TRANSFER_HEIGHT,
    optionsWidth: TRANSFER_OPTIONS_WIDTH,
    selectedWidth: TRANSFER_SELECTED_WIDTH,
    selectedEmptyComponent: /*#__PURE__*/React.createElement(SelectedEmptyPlaceholder, null),
    renderOption: props => {
      return /*#__PURE__*/React.createElement(TransferOption
      /* eslint-disable react/prop-types */, _extends({}, props, {
        active: isActive(props.value),
        showingInfo: (infoDataItem === null || infoDataItem === void 0 ? void 0 : infoDataItem.id) === props.value,
        icon: getIcon(props.type),
        dataItemType: props.type,
        dimensionType: getDimensionType({
          type: props.type,
          expression: props.expression
        }),
        dataTest: `${dataTest}-transfer-option`,
        itemsRef: itemsRef,
        onEditClick: () => onEditClick(props),
        onInfoClick: () => setInfoDataItem({
          id: props.value,
          type: props.type
        })
        /* eslint-enable react/prop-types */
      }));
    },
    dataTest: `${dataTest}-option-view-mode-transfer`
  }), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: itemOptionSelectorStyles.__hash
  }, itemOptionSelectorStyles));
};
ItemOptionsSelector.propTypes = {
  displayNameProp: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  dataTest: PropTypes.string,
  infoDataItem: PropTypes.object,
  itemsRef: PropTypes.object,
  selectedItems: PropTypes.arrayOf(PropTypes.exact({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    access: PropTypes.object,
    isActive: PropTypes.bool,
    type: PropTypes.string,
    expression: PropTypes.string,
    optionSetId: PropTypes.string
  })),
  setInfoDataItem: PropTypes.func,
  onEditClick: PropTypes.func
};
ItemOptionsSelector.defaultProps = {
  selectedItems: []
};