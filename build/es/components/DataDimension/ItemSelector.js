import _JSXStyle from "styled-jsx/style";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { useDataEngine } from '@dhis2/app-runtime';
import { Transfer, InputField, IconInfo16, IconDimensionDataSet16, IconDimensionIndicator16, IconDimensionEventDataItem16, IconDimensionProgramIndicator16 } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { apiFetchOptions } from '../../api/dimensions.js';
import DataElementIcon from '../../assets/DimensionItemIcons/DataElementIcon.js';
import GenericIcon from '../../assets/DimensionItemIcons/GenericIcon.js';
import i18n from '../../locales/index.js';
import { DATA_SETS_CONSTANTS, REPORTING_RATE } from '../../modules/dataSets.js';
import { dataTypeMap as dataTypes, DIMENSION_TYPE_ALL, DIMENSION_TYPE_DATA_ELEMENT, DIMENSION_TYPE_DATA_ELEMENT_OPERAND, DIMENSION_TYPE_DATA_SET, DIMENSION_TYPE_EVENT_DATA_ITEM, DIMENSION_TYPE_PROGRAM_INDICATOR, DIMENSION_TYPE_INDICATOR, TOTALS, DIMENSION_TYPE_PROGRAM_DATA_ELEMENT, DIMENSION_TYPE_PROGRAM_ATTRIBUTE } from '../../modules/dataTypes.js';
import { TRANSFER_HEIGHT, TRANSFER_OPTIONS_WIDTH, TRANSFER_SELECTED_WIDTH } from '../../modules/dimensionSelectorHelper.js';
import { useDebounce, useDidUpdateEffect } from '../../modules/utils.js';
import styles from '../styles/DimensionSelector.style.js';
import { TransferOption } from '../TransferOption.js';
import DataTypeSelector from './DataTypeSelector.js';
import GroupSelector from './GroupSelector.js';

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
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "leftHeader"
  }, /*#__PURE__*/React.createElement(InputField, {
    value: searchTerm,
    onChange: _ref2 => {
      let {
        value
      } = _ref2;
      return setSearchTerm(value);
    },
    placeholder: i18n.t('Search by data item name'),
    dataTest: "".concat(dataTest, "-filter-input-field"),
    dense: true,
    initialFocus: true,
    type: 'search'
  }), /*#__PURE__*/React.createElement(DataTypeSelector, {
    currentDataType: dataType,
    onChange: setDataType,
    dataTest: "".concat(dataTest, "-data-types-select-field")
  }), dataTypes[dataType] && /*#__PURE__*/React.createElement(GroupSelector, {
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
  className: "jsx-".concat(styles.__hash) + " " + "emptyList"
}, i18n.t('No items selected')), /*#__PURE__*/React.createElement(_JSXStyle, {
  id: styles.__hash
}, styles));

const RightHeader = _ref3 => {
  let {
    infoText
  } = _ref3;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    className: "jsx-".concat(styles.__hash) + " " + "rightHeader"
  }, i18n.t('Selected Items')), infoText && /*#__PURE__*/React.createElement("div", {
    className: "jsx-".concat(styles.__hash) + " " + "info-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "jsx-".concat(styles.__hash)
  }, /*#__PURE__*/React.createElement(IconInfo16, null)), /*#__PURE__*/React.createElement("span", {
    className: "jsx-".concat(styles.__hash) + " " + "info-text"
  }, infoText)), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
};

RightHeader.propTypes = {
  infoText: PropTypes.string
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

        default:
          message = i18n.t('No data');
          break;
      }
    }
  } else if (!loading && !options.length && searchTerm) {
    switch (dataType) {
      case DIMENSION_TYPE_INDICATOR:
        message = i18n.t('No indicators found for "{{- searchTerm}}"', {
          searchTerm: searchTerm
        });
        break;

      case DIMENSION_TYPE_DATA_ELEMENT:
        message = i18n.t('No data elements found for "{{- searchTerm}}"', {
          searchTerm: searchTerm
        });
        break;

      case DIMENSION_TYPE_DATA_SET:
        message = i18n.t('No data sets found for "{{- searchTerm}}"', {
          searchTerm: searchTerm
        });
        break;

      case DIMENSION_TYPE_EVENT_DATA_ITEM:
        message = i18n.t('No event data items found for "{{- searchTerm}}"', {
          searchTerm: searchTerm
        });
        break;

      case DIMENSION_TYPE_PROGRAM_INDICATOR:
        message = i18n.t('No program indicators found for "{{- searchTerm}}"', {
          searchTerm: searchTerm
        });
        break;

      default:
        message = i18n.t('Nothing found for "{{- searchTerm}}"', {
          searchTerm: searchTerm
        });
        break;
    }
  }

  return message && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    "data-test": dataTest,
    className: "jsx-".concat(styles.__hash) + " " + "emptyList"
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
    dataTest
  } = _ref5;
  const [state, setState] = useState({
    searchTerm: '',
    filter: {
      dataType: DIMENSION_TYPE_ALL
    },
    options: [],
    loading: true,
    nextPage: 1
  });
  const dataEngine = useDataEngine();

  const setSearchTerm = searchTerm => setState(state => ({ ...state,
    searchTerm
  }));

  const setFilter = filter => setState(state => ({ ...state,
    filter
  }));

  const debouncedSearchTerm = useDebounce(state.searchTerm, 200);

  const fetchItems = async page => {
    var _result$dimensionItem;

    setState(state => ({ ...state,
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
            label: "".concat(item.name, " - ").concat(metric.getName()),
            value: "".concat(item.id, ".").concat(metric.id),
            disabled: item.disabled,
            type: item.dimensionItemType
          });
        } else {
          DATA_SETS_CONSTANTS.forEach(metric => {
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

  useDidUpdateEffect(() => {
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
      case DIMENSION_TYPE_DATA_ELEMENT_OPERAND:
        return dataTypes[DIMENSION_TYPE_DATA_ELEMENT].getItemName();

      case REPORTING_RATE:
        return dataTypes[DIMENSION_TYPE_DATA_SET].getItemName();

      case DIMENSION_TYPE_PROGRAM_DATA_ELEMENT:
      case DIMENSION_TYPE_PROGRAM_ATTRIBUTE:
        return dataTypes[DIMENSION_TYPE_EVENT_DATA_ITEM].getItemName();

      default:
        return (_dataTypes$itemType = dataTypes[itemType]) === null || _dataTypes$itemType === void 0 ? void 0 : _dataTypes$itemType.getItemName();
    }
  };

  const getIcon = itemType => {
    switch (itemType) {
      case DIMENSION_TYPE_INDICATOR:
        return /*#__PURE__*/React.createElement(IconDimensionIndicator16, null);

      case DIMENSION_TYPE_DATA_ELEMENT_OPERAND:
      case DIMENSION_TYPE_DATA_ELEMENT:
        return DataElementIcon;

      case REPORTING_RATE:
        return /*#__PURE__*/React.createElement(IconDimensionDataSet16, null);

      case DIMENSION_TYPE_EVENT_DATA_ITEM:
      case DIMENSION_TYPE_PROGRAM_DATA_ELEMENT:
      case DIMENSION_TYPE_PROGRAM_ATTRIBUTE:
        return /*#__PURE__*/React.createElement(IconDimensionEventDataItem16, null);

      case DIMENSION_TYPE_PROGRAM_INDICATOR:
        return /*#__PURE__*/React.createElement(IconDimensionProgramIndicator16, null);

      default:
        return GenericIcon;
    }
  };

  return /*#__PURE__*/React.createElement(Transfer, {
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
    sourceEmptyPlaceholder: /*#__PURE__*/React.createElement(SourceEmptyPlaceholder, {
      loading: state.loading,
      searchTerm: debouncedSearchTerm,
      options: state.options,
      noItemsMessage: noItemsMessage,
      dataType: state.filter.dataType,
      dataTest: "".concat(dataTest, "-empty-source")
    }),
    onEndReached: onEndReached,
    leftHeader: /*#__PURE__*/React.createElement(LeftHeader, {
      dataType: state.filter.dataType,
      setDataType: dataType => {
        setFilter({ ...state.filter,
          dataType,
          group: null,
          subGroup: dataType === DIMENSION_TYPE_DATA_ELEMENT ? TOTALS : null
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
    height: TRANSFER_HEIGHT,
    optionsWidth: TRANSFER_OPTIONS_WIDTH,
    selectedWidth: TRANSFER_SELECTED_WIDTH,
    selectedEmptyComponent: /*#__PURE__*/React.createElement(EmptySelection, null),
    rightHeader: /*#__PURE__*/React.createElement(RightHeader, {
      infoText: infoBoxMessage
    }),
    rightFooter: rightFooter,
    renderOption: props => /*#__PURE__*/React.createElement(TransferOption, _extends({}, props, {
      active: isActive(props.value
      /* eslint-disable-line react/prop-types */
      ),
      icon: getIcon(getItemType(props.value
      /* eslint-disable-line react/prop-types */
      )),
      tooltipText: state.filter.dataType === DIMENSION_TYPE_ALL ? getTooltipText(getItemType(props.value
      /* eslint-disable-line react/prop-types */
      )) : undefined,
      dataTest: "".concat(dataTest, "-transfer-option")
    })),
    dataTest: "".concat(dataTest, "-transfer")
  });
};

ItemSelector.propTypes = {
  displayNameProp: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  dataTest: PropTypes.string,
  infoBoxMessage: PropTypes.string,
  noItemsMessage: PropTypes.string,
  rightFooter: PropTypes.node,
  selectedItems: PropTypes.arrayOf(PropTypes.exact({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    isActive: PropTypes.bool,
    type: PropTypes.string
  }))
};
ItemSelector.defaultProps = {
  selectedItems: []
};
export default ItemSelector;