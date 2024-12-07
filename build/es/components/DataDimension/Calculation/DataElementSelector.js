import _JSXStyle from "styled-jsx/style";
import { useDataEngine } from '@dhis2/app-runtime';
import { CircularLoader, InputField, IntersectionDetector, SingleSelectField, SingleSelectOption } from '@dhis2/ui';
import { useSortable } from '@dnd-kit/sortable';
import { useDebounceCallback } from '@react-hook/debounce';
import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import { apiFetchOptions, apiFetchGroups } from '../../../api/dimensions.js';
import i18n from '../../../locales/index.js';
import { TOTALS, DETAIL, DIMENSION_TYPE_ALL, DIMENSION_TYPE_DATA_ELEMENT, dataTypeMap as dataTypes } from '../../../modules/dataTypes.js';
import DataElementOption from './DataElementOption.js';
import styles from './styles/DataElementSelector.style.js';
const getOptions = () => ({
  [TOTALS]: i18n.t('Totals only'),
  [DETAIL]: i18n.t('Details only')
});
const GroupSelector = _ref => {
  var _dataTypes$DIMENSION_;
  let {
    currentValue,
    onChange,
    displayNameProp
  } = _ref;
  const dataEngine = useDataEngine();
  const [loading, setLoading] = useState(true);
  const [groups, setGroups] = useState([]);
  const defaultGroup = (_dataTypes$DIMENSION_ = dataTypes[DIMENSION_TYPE_DATA_ELEMENT]) === null || _dataTypes$DIMENSION_ === void 0 ? void 0 : _dataTypes$DIMENSION_.defaultGroup;
  useEffect(() => {
    const fetchGroups = async () => {
      setLoading(true);
      const result = await apiFetchGroups(dataEngine, DIMENSION_TYPE_DATA_ELEMENT, displayNameProp);
      setGroups(result);
      setLoading(false);
    };
    fetchGroups();
  }, [dataEngine, displayNameProp]);
  return /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "group-select"
  }, /*#__PURE__*/React.createElement(SingleSelectField, {
    selected: currentValue,
    onChange: ref => onChange(ref.selected),
    dense: true,
    loading: loading,
    loadingText: i18n.t('Loading'),
    dataTest: 'data-element-group-select'
  }, defaultGroup ? /*#__PURE__*/React.createElement(SingleSelectOption, {
    value: defaultGroup.id,
    key: defaultGroup.id,
    label: defaultGroup.getName(),
    dataTest: `data-element-group-select-option-${defaultGroup.id}`
  }) : null, !loading ? groups.map(group => /*#__PURE__*/React.createElement(SingleSelectOption, {
    value: group.id,
    key: group.id,
    label: group.name,
    dataTest: `data-element-group-select-option-${group.id}`
  })) : null), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
};
GroupSelector.propTypes = {
  currentValue: PropTypes.string.isRequired,
  displayNameProp: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
const DisaggregationSelector = _ref2 => {
  let {
    currentValue,
    onChange
  } = _ref2;
  const options = getOptions();
  return /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "group-select"
  }, /*#__PURE__*/React.createElement(SingleSelectField, {
    selected: currentValue,
    onChange: ref => onChange(ref.selected),
    dense: true,
    dataTest: 'data-element-disaggregation-select'
  }, Object.entries(options).map(option => /*#__PURE__*/React.createElement(SingleSelectOption, {
    value: option[0],
    key: option[0],
    label: option[1],
    dataTest: `data-element-disaggregation-select-option-${option[0]}`
  }))), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
};
DisaggregationSelector.propTypes = {
  currentValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
const DataElementSelector = _ref3 => {
  let {
    displayNameProp,
    onDoubleClick
  } = _ref3;
  const dataEngine = useDataEngine();
  const [searchTerm, setSearchTerm] = useState('');
  const [group, setGroup] = useState(DIMENSION_TYPE_ALL);
  const [subGroup, setSubGroup] = useState(TOTALS);
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const {
    isSorting
  } = useSortable({});
  const rootRef = useRef();
  const hasNextPageRef = useRef(false);
  const searchTermRef = useRef(searchTerm);
  const pageRef = useRef(0);
  const filterRef = useRef({
    dataType: DIMENSION_TYPE_DATA_ELEMENT,
    group,
    subGroup
  });
  const fetchData = async scrollToTop => {
    try {
      setLoading(true);
      const result = await apiFetchOptions({
        dataEngine,
        nameProp: displayNameProp,
        filter: filterRef.current,
        searchTerm: searchTermRef.current,
        page: pageRef.current
      });
      if (result !== null && result !== void 0 && result.dimensionItems) {
        const newOptions = result.dimensionItems.map(item => ({
          label: item.name,
          value: item.id,
          type: item.dimensionItemType,
          expression: item.expression
        }));
        setOptions(prevOptions => pageRef.current > 1 ? [...prevOptions, ...newOptions] : newOptions);
        setLoading(false);
      }
      hasNextPageRef.current = result !== null && result !== void 0 && result.nextPage ? true : false;
    } catch (error) {
      // TODO handle errors
      console.log('apiFetchOptions error: ', error);
    } finally {
      if (scrollToTop) {
        rootRef.current.scrollTo({
          top: 0
        });
      }
    }
  };
  const debouncedFetchData = useDebounceCallback(newSearchTerm => {
    hasNextPageRef.current = false;
    pageRef.current = 1;
    searchTermRef.current = newSearchTerm;
    fetchData(true);
  }, 500);
  const onSearchChange = _ref4 => {
    let {
      value
    } = _ref4;
    const newSearchTerm = value;
    setSearchTerm(newSearchTerm);

    // debounce the fetch
    debouncedFetchData(newSearchTerm);
  };
  const onFilterChange = newFilter => {
    if (newFilter.group) {
      setGroup(newFilter.group);
      filterRef.current.group = newFilter.group;
    }
    if (newFilter.subGroup) {
      setSubGroup(newFilter.subGroup);
      filterRef.current.subGroup = newFilter.subGroup;
    }
    hasNextPageRef.current = false;
    pageRef.current = 1;
    fetchData(true);
  };
  const onEndReached = _ref5 => {
    let {
      isIntersecting
    } = _ref5;
    if (isIntersecting) {
      // if hasNextPage is set it means at least 1 request already happened and there is
      // another page, fetch the next page
      if (hasNextPageRef.current) {
        pageRef.current += 1;
        fetchData();
      } else if (pageRef.current === 0) {
        // this is for fetching the initial page
        pageRef.current = 1;
        fetchData();
      }
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "filter-wrapper"
  }, /*#__PURE__*/React.createElement("h4", {
    className: `jsx-${styles.__hash}` + " " + "sub-header"
  }, i18n.t('Data elements')), /*#__PURE__*/React.createElement(InputField, {
    value: searchTerm,
    onChange: onSearchChange,
    placeholder: i18n.t('Search by data element name'),
    dense: true,
    type: 'search',
    dataTest: 'data-element-search'
  }), /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "selector-wrapper"
  }, /*#__PURE__*/React.createElement(GroupSelector, {
    currentValue: group,
    onChange: group => onFilterChange({
      group
    }),
    displayNameProp: displayNameProp
  }), /*#__PURE__*/React.createElement(DisaggregationSelector, {
    currentValue: subGroup,
    onChange: subGroup => onFilterChange({
      subGroup
    })
  }))), /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "dimension-list-container"
  }, loading && /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "dimension-list-overlay"
  }, /*#__PURE__*/React.createElement(CircularLoader, null)), /*#__PURE__*/React.createElement("div", {
    ref: rootRef,
    onScroll: () => {
      if (isSorting) {
        rootRef.current.scrollTo({
          top: 0
        });
      }
    },
    className: `jsx-${styles.__hash}` + " " + "dimension-list-scrollbox"
  }, /*#__PURE__*/React.createElement("div", {
    "data-test": "dimension-list",
    className: `jsx-${styles.__hash}` + " " + (cx('dimension-list-scroller', {
      loading
    }) || "")
  }, Boolean(options.length) && options.map(_ref6 => {
    let {
      label,
      value
    } = _ref6;
    return /*#__PURE__*/React.createElement(DataElementOption, {
      key: value,
      label: label,
      value: value,
      onDoubleClick: onDoubleClick
    });
  }), !loading && !options.length && /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "empty-list"
  }, searchTermRef.current ? i18n.t('No data elements found for "{{- searchTerm}}"', {
    searchTerm: searchTermRef.current
  }) : i18n.t('No data elements found')), /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "scroll-detector"
  }, /*#__PURE__*/React.createElement(IntersectionDetector, {
    onChange: onEndReached,
    rootRef: rootRef
  }))))), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
};
DataElementSelector.propTypes = {
  displayNameProp: PropTypes.string.isRequired,
  onDoubleClick: PropTypes.func.isRequired
};
export default DataElementSelector;