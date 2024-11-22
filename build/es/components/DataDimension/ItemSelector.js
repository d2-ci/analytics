import _JSXStyle from "styled-jsx/style";
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { useDataEngine } from '@dhis2/app-runtime';
import { Transfer, InputField, IconInfo16, Button, IconAdd24 } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { apiFetchOptions } from '../../api/dimensions.js';
import i18n from '../../locales/index.js';
import { DATA_SETS_CONSTANTS, REPORTING_RATE } from '../../modules/dataSets.js';
import { DIMENSION_TYPE_ALL, DIMENSION_TYPE_DATA_ELEMENT, DIMENSION_TYPE_DATA_SET, DIMENSION_TYPE_EVENT_DATA_ITEM, DIMENSION_TYPE_PROGRAM_INDICATOR, DIMENSION_TYPE_INDICATOR, TOTALS, DIMENSION_TYPE_EXPRESSION_DIMENSION_ITEM } from '../../modules/dataTypes.js';
import { getIcon, getTooltipText } from '../../modules/dimensionListItem.js';
import { TRANSFER_HEIGHT, TRANSFER_OPTIONS_WIDTH, TRANSFER_SELECTED_WIDTH } from '../../modules/dimensionSelectorHelper.js';
import { useDebounce, useDidUpdateEffect } from '../../modules/utils.js';
import styles from '../styles/DimensionSelector.style.js';
import { TransferOption } from '../TransferOption.js';
import CalculationModal from './Calculation/CalculationModal.js';
import DataTypeSelector from './DataTypeSelector.js';
import GroupSelector from './GroupSelector.js';
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
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "leftHeader"
  }, /*#__PURE__*/React.createElement(InputField, {
    value: searchTerm,
    onChange: _ref2 => {
      let {
        value
      } = _ref2;
      return setSearchTerm(value);
    },
    placeholder: i18n.t('Search by data item name'),
    dataTest: `${dataTest}-filter-input-field`,
    dense: true,
    initialFocus: true,
    type: 'search'
  }), /*#__PURE__*/React.createElement(DataTypeSelector, {
    currentDataType: dataType,
    onChange: setDataType,
    dataTest: `${dataTest}-data-types-select-field`,
    dataTypes: dataTypes
  }), ![DIMENSION_TYPE_EXPRESSION_DIMENSION_ITEM, DIMENSION_TYPE_ALL].includes(dataType) && /*#__PURE__*/React.createElement(GroupSelector, {
    dataType: dataType,
    displayNameProp: displayNameProp,
    currentGroup: group,
    onGroupChange: setGroup,
    currentSubGroup: subGroup,
    onSubGroupChange: setSubGroup,
    dataTest: dataTest
  })), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
};
LeftHeader.propTypes = {
  dataTest: PropTypes.string,
  dataType: PropTypes.string,
  dataTypes: PropTypes.array,
  displayNameProp: PropTypes.string,
  group: PropTypes.string,
  searchTerm: PropTypes.string,
  setDataType: PropTypes.func,
  setGroup: PropTypes.func,
  setSearchTerm: PropTypes.func,
  setSubGroup: PropTypes.func,
  subGroup: PropTypes.string
};
const EmptySelection = () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
  className: `jsx-${styles.__hash}` + " " + "emptyList"
}, i18n.t('No items selected')), /*#__PURE__*/React.createElement(_JSXStyle, {
  id: styles.__hash
}, styles));
const RightHeader = _ref3 => {
  let {
    infoBoxMessage
  } = _ref3;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    className: `jsx-${styles.__hash}` + " " + "rightHeader"
  }, i18n.t('Selected Items')), infoBoxMessage && /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "info-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement(IconInfo16, null)), /*#__PURE__*/React.createElement("span", {
    className: `jsx-${styles.__hash}` + " " + "info-text"
  }, infoBoxMessage)), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
};
RightHeader.propTypes = {
  infoBoxMessage: PropTypes.string
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
        case DIMENSION_TYPE_INDICATOR:
          message = i18n.t('No indicators found');
          break;
        case DIMENSION_TYPE_DATA_ELEMENT:
          message = i18n.t('No data elements found');
          break;
        case DIMENSION_TYPE_DATA_SET:
          message = i18n.t('No data sets found');
          break;
        case DIMENSION_TYPE_EVENT_DATA_ITEM:
          message = i18n.t('No event data items found');
          break;
        case DIMENSION_TYPE_PROGRAM_INDICATOR:
          message = i18n.t('No program indicators found');
          break;
        case DIMENSION_TYPE_EXPRESSION_DIMENSION_ITEM:
          message = i18n.t('No calculations found');
          break;
        default:
          message = i18n.t('No data');
          break;
      }
    }
  } else if (!loading && !options.length && searchTerm) {
    switch (dataType) {
      case DIMENSION_TYPE_INDICATOR:
        message = i18n.t('No indicators found for "{{- searchTerm}}"', {
          searchTerm
        });
        break;
      case DIMENSION_TYPE_DATA_ELEMENT:
        message = i18n.t('No data elements found for "{{- searchTerm}}"', {
          searchTerm
        });
        break;
      case DIMENSION_TYPE_DATA_SET:
        message = i18n.t('No data sets found for "{{- searchTerm}}"', {
          searchTerm
        });
        break;
      case DIMENSION_TYPE_EVENT_DATA_ITEM:
        message = i18n.t('No event data items found for "{{- searchTerm}}"', {
          searchTerm
        });
        break;
      case DIMENSION_TYPE_PROGRAM_INDICATOR:
        message = i18n.t('No program indicators found for "{{- searchTerm}}"', {
          searchTerm
        });
        break;
      case DIMENSION_TYPE_EXPRESSION_DIMENSION_ITEM:
        message = i18n.t('No calculations found for "{{- searchTerm}}"', {
          searchTerm
        });
        break;
      default:
        message = i18n.t('Nothing found for "{{- searchTerm}}"', {
          searchTerm
        });
        break;
    }
  }
  return message && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    "data-test": dataTest,
    className: `jsx-${styles.__hash}` + " " + "emptyList"
  }, message), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
};
SourceEmptyPlaceholder.propTypes = {
  dataTest: PropTypes.string,
  dataType: PropTypes.string,
  loading: PropTypes.bool,
  noItemsMessage: PropTypes.string,
  options: PropTypes.array,
  searchTerm: PropTypes.string
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
  const [state, setState] = useState({
    searchTerm: '',
    dataTypes,
    filter: {
      dataType: dataTypes.length === 1 ? dataTypes[0].id : DIMENSION_TYPE_ALL,
      group: null,
      subGroup: dataTypes.length === 1 && dataTypes[0].id === DIMENSION_TYPE_DATA_ELEMENT ? TOTALS : null
    },
    options: [],
    loading: true,
    nextPage: 1,
    supportsEDI: dataTypes.map(_ref6 => {
      let {
        id
      } = _ref6;
      return id;
    }).includes(DIMENSION_TYPE_EXPRESSION_DIMENSION_ITEM)
  });
  const [currentCalculation, setCurrentCalculation] = useState();
  const dataEngine = useDataEngine();
  const setSearchTerm = searchTerm => setState(state => ({
    ...state,
    searchTerm
  }));
  const debouncedSearchTerm = useDebounce(state.searchTerm, 500);
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
      if (item.dimensionItemType === REPORTING_RATE) {
        if (state.filter.subGroup && state.filter.subGroup !== DIMENSION_TYPE_ALL) {
          const metric = DATA_SETS_CONSTANTS.find(item => item.id === state.filter.subGroup);
          newOptions.push({
            label: `${item.name} - ${metric.getName()}`,
            value: `${item.id}.${metric.id}`,
            disabled: item.disabled,
            type: item.dimensionItemType,
            expression: item.expression
          });
        } else {
          DATA_SETS_CONSTANTS.forEach(metric => {
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
  useDidUpdateEffect(() => {
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
      type: DIMENSION_TYPE_EXPRESSION_DIMENSION_ITEM
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
        type: DIMENSION_TYPE_EXPRESSION_DIMENSION_ITEM
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
      subGroup: dataType === DIMENSION_TYPE_DATA_ELEMENT ? TOTALS : null
    }
  }));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Transfer, {
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
    sourceEmptyPlaceholder: /*#__PURE__*/React.createElement(SourceEmptyPlaceholder, {
      loading: state.loading,
      searchTerm: debouncedSearchTerm,
      options: state.options,
      noItemsMessage: noItemsMessage,
      dataType: state.filter.dataType,
      dataTest: `${dataTest}-empty-source`
    }),
    onEndReached: onEndReached,
    leftHeader: /*#__PURE__*/React.createElement(LeftHeader, {
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
    leftFooter: state.supportsEDI ? /*#__PURE__*/React.createElement("div", {
      className: `jsx-${styles.__hash}` + " " + "calculation-button"
    }, /*#__PURE__*/React.createElement(Button, {
      icon: /*#__PURE__*/React.createElement(IconAdd24, null),
      onClick: () => setCurrentCalculation({}),
      small: true
    }, i18n.t('Calculation'))) : undefined,
    enableOrderChange: true,
    height: TRANSFER_HEIGHT,
    optionsWidth: TRANSFER_OPTIONS_WIDTH,
    selectedWidth: TRANSFER_SELECTED_WIDTH,
    selectedEmptyComponent: /*#__PURE__*/React.createElement(EmptySelection, null),
    rightHeader: /*#__PURE__*/React.createElement(RightHeader, {
      infoBoxMessage: infoBoxMessage
    }),
    rightFooter: rightFooter,
    renderOption: props => {
      var _props$access;
      return /*#__PURE__*/React.createElement(TransferOption
      /* eslint-disable react/prop-types */, _extends({}, props, {
        active: isActive(props.value),
        icon: getIcon(getItemType(props.value)),
        tooltipText: getTooltipText({
          type: getItemType(props.value),
          expression: props.expression
        }),
        dataTest: `${dataTest}-transfer-option`,
        onEditClick: getItemType(props.value) === DIMENSION_TYPE_EXPRESSION_DIMENSION_ITEM && !(((_props$access = props.access) === null || _props$access === void 0 ? void 0 : _props$access.write) === false) && state.supportsEDI ? () => setCurrentCalculation({
          id: props.value,
          name: props.label,
          expression: props.expression
        }) : undefined
        /* eslint-enable react/prop-types */
      }));
    },
    dataTest: `${dataTest}-transfer`
  }), currentCalculation && state.supportsEDI && /*#__PURE__*/React.createElement(CalculationModal, {
    calculation: currentCalculation,
    onSave: onSaveCalculation,
    onClose: () => setCurrentCalculation(),
    onDelete: onDeleteCalculation,
    displayNameProp: displayNameProp
  }), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
};
ItemSelector.propTypes = {
  displayNameProp: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  dataTest: PropTypes.string,
  dataTypes: PropTypes.array,
  infoBoxMessage: PropTypes.string,
  noItemsMessage: PropTypes.string,
  rightFooter: PropTypes.node,
  selectedItems: PropTypes.arrayOf(PropTypes.exact({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    isActive: PropTypes.bool,
    type: PropTypes.string,
    expression: PropTypes.string
  })),
  onEDISave: PropTypes.func
};
ItemSelector.defaultProps = {
  selectedItems: []
};
export default ItemSelector;