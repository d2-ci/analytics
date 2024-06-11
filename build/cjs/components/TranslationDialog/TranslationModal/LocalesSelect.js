"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LocalesSelect = void 0;
var _appRuntime = require("@dhis2/app-runtime");
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
var _ui = require("@dhis2/ui");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const query = {
  locales: {
    resource: 'locales/db'
  }
};
const LocalesSelect = _ref => {
  let {
    onChange,
    selected
  } = _ref;
  const {
    data,
    fetching
  } = (0, _appRuntime.useDataQuery)(query);
  return /*#__PURE__*/_react.default.createElement(_ui.SingleSelect, {
    prefix: selected ? _d2I18n.default.t('Translating to') : _d2I18n.default.t('Choose a locale'),
    onChange: _ref2 => {
      let {
        selected
      } = _ref2;
      return onChange(selected);
    },
    loading: fetching,
    selected: data && selected ? selected : '',
    dense: true
  }, data && data.locales
  // XXX remove duplicates ?! fr_SN - French (Senegal)
  .reduce((locales, _ref3) => {
    let {
      locale,
      name
    } = _ref3;
    if (!locales.find(entry => entry.locale === locale)) {
      locales.push({
        locale,
        name
      });
    }
    return locales;
  }, []).map(_ref4 => {
    let {
      locale,
      name
    } = _ref4;
    return /*#__PURE__*/_react.default.createElement(_ui.SingleSelectOption, {
      key: locale,
      value: locale,
      label: name
    });
  }));
};
exports.LocalesSelect = LocalesSelect;
LocalesSelect.propTypes = {
  onChange: _propTypes.default.func.isRequired,
  selected: _propTypes.default.string
};