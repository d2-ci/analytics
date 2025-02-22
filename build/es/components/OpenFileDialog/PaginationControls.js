import i18n from '@dhis2/d2-i18n';
import { Pagination } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React from 'react';
export const PaginationControls = _ref => {
  let {
    page,
    pager,
    onPageChange
  } = _ref;
  return /*#__PURE__*/React.createElement(Pagination, {
    page: page,
    pageCount: pager.pageCount,
    pageSize: pager.pageSize,
    total: pager.total,
    onPageChange: onPageChange,
    onPageSizeChange: Function.prototype,
    hidePageSizeSelect: true,
    pageSummaryText: _ref2 => {
      let {
        firstItem: firstItemIndex,
        lastItem: lastItemIndex,
        total: totalNumberOfItems
      } = _ref2;
      return i18n.t('{{firstItemIndex}}-{{lastItemIndex}} of {{totalNumberOfItems}}', {
        firstItemIndex,
        lastItemIndex,
        totalNumberOfItems
      });
    }
  });
};
PaginationControls.propTypes = {
  page: PropTypes.number,
  pager: PropTypes.object,
  onPageChange: PropTypes.func
};
export default PaginationControls;