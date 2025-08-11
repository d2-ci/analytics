"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applyBooleanHandler = void 0;
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
var _numeric = require("./numeric.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const applyBooleanHandler = (response, headerIndex) => {
  const dimensionId = response.headers[headerIndex].name;
  const numericResponse = (0, _numeric.applyNumericHandler)(response, headerIndex);
  return {
    ...numericResponse,
    metaData: {
      ...numericResponse.metaData,
      items: {
        ...numericResponse.metaData.items,
        [(0, _numeric.getPrefixedValue)('0', dimensionId)]: {
          name: _d2I18n.default.t('No')
        },
        [(0, _numeric.getPrefixedValue)('1', dimensionId)]: {
          name: _d2I18n.default.t('Yes')
        }
      }
    }
  };
};
exports.applyBooleanHandler = applyBooleanHandler;