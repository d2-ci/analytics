"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.PaginationControls = void 0;

var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));

var _ui = require("@dhis2/ui");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PaginationControls = _ref => {
  let {
    page,
    pager,
    onPageChange
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_ui.Pagination, {
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
      return _d2I18n.default.t('{{firstItemIndex}}-{{lastItemIndex}} of {{totalNumberOfItems}}', {
        firstItemIndex,
        lastItemIndex,
        totalNumberOfItems
      });
    }
  });
};

exports.PaginationControls = PaginationControls;
PaginationControls.propTypes = {
  page: _propTypes.default.number,
  pager: _propTypes.default.object,
  onPageChange: _propTypes.default.func
};
var _default = PaginationControls;
exports.default = _default;