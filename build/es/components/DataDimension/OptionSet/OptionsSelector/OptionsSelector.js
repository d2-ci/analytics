import _JSXStyle from "styled-jsx/style";
import { useDataQuery } from '@dhis2/app-runtime';
import { Transfer } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import i18n from '../../../../locales/index.js';
import { useDebounce, useDidUpdateEffect } from '../../../../modules/utils.js';
import { EmptySelection } from './EmptySelection.js';
import { SourceEmptyPlaceholder } from './SourceEmptyPlaceholder.js';
import styles from './styles/OptionsSelector.style.js';
import { TransferOption } from './TransferOption.js';
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
export const OptionsSelector = _ref2 => {
  let {
    displayNameProp,
    optionSetId,
    selectedOptions,
    onSelect,
    dataTest
  } = _ref2;
  const [state, setState] = useState({
    searchTerm: '',
    options: [],
    loading: true,
    nextPage: undefined
  });
  const debouncedSearchTerm = useDebounce(state.searchTerm, 500);
  const {
    data,
    refetch
  } = useDataQuery(optionSetOptionsQuery, {
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
  useDidUpdateEffect(() => {
    fetchOptions(1);
  }, [debouncedSearchTerm]);
  useEffect(() => {
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
  return /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement(Transfer, {
    height: "260px",
    loading: state.loading,
    loadingPicked: state.loading,
    options: displayOptions,
    sourceEmptyPlaceholder: /*#__PURE__*/React.createElement(SourceEmptyPlaceholder, {
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
    selectedEmptyComponent: /*#__PURE__*/React.createElement(EmptySelection, null),
    renderOption: props => /*#__PURE__*/React.createElement(TransferOption, props),
    enableOrderChange: true,
    filterable: true,
    filterPlaceholder: i18n.t('Search by option name'),
    filterablePicked: false,
    searchTerm: state.searchTerm,
    onFilterChange: _ref5 => {
      let {
        value
      } = _ref5;
      return setSearchTerm(value);
    },
    rightHeader: /*#__PURE__*/React.createElement("p", {
      className: `jsx-${styles.__hash}` + " " + "right-header"
    }, i18n.t('Selected options')),
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
  }), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
};
OptionsSelector.propTypes = {
  displayNameProp: PropTypes.string.isRequired,
  optionSetId: PropTypes.string.isRequired,
  dataTest: PropTypes.string,
  selectedOptions: PropTypes.array,
  onSelect: PropTypes.func
};