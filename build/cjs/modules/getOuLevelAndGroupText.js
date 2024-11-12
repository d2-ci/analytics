"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOuLevelAndGroupText = void 0;
var _index = _interopRequireDefault(require("../locales/index.js"));
var _dimensionGetItems = require("./layout/dimensionGetItems.js");
var _dimensionIs = require("./layout/dimensionIs.js");
var _index2 = require("./ouIdHelper/index.js");
var _predefinedDimensions = require("./predefinedDimensions.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const getOuLevelAndGroupText = (filter, metaData) => {
  if (!(0, _dimensionIs.dimensionIs)(_predefinedDimensions.DIMENSION_ID_ORGUNIT)) {
    return '';
  }
  const items = (0, _dimensionGetItems.dimensionGetItems)(filter);
  const hasOuLevel = items.some(item => _index2.ouIdHelper.hasLevelPrefix(item.id));
  const hasOuGroup = items.some(item => _index2.ouIdHelper.hasGroupPrefix(item.id));
  const filterFragments = [];
  if (hasOuGroup) {
    filterFragments.push(getLevelAndGroupText(items, metaData, false));
  }
  if (hasOuLevel) {
    filterFragments.push(getLevelAndGroupText(items, metaData, true));
  }
  return filterFragments.join(' - ');
};
exports.getOuLevelAndGroupText = getOuLevelAndGroupText;
const getLevelAndGroupText = (items, metaData, isLevel) => {
  const getNameFromMetadata = id => metaData.items[id] ? metaData.items[id].name : id;
  const dynamicOuItems = items.filter(item => isLevel ? _index2.ouIdHelper.hasLevelPrefix(item.id) : _index2.ouIdHelper.hasGroupPrefix(item.id));
  const lastItem = dynamicOuItems.length > 1 ? dynamicOuItems.pop() : null;
  const dynamicOuNames = dynamicOuItems.map(item => getNameFromMetadata(_index2.ouIdHelper.removePrefix(item.id))).join(', ');
  let allDynamicOuNames;
  if (lastItem) {
    const lastOuName = getNameFromMetadata(_index2.ouIdHelper.removePrefix(lastItem.id));
    allDynamicOuNames = _index.default.t('{{dynamicOuNames}} and {{lastOuName}}', {
      dynamicOuNames,
      lastOuName
    });
  } else {
    allDynamicOuNames = dynamicOuNames;
  }
  const staticOuNames = items.filter(item => !_index2.ouIdHelper.hasGroupPrefix(item.id) && !_index2.ouIdHelper.hasLevelPrefix(item.id)).map(item => getNameFromMetadata(item.id)).join(', ');
  let ouLevelAndGroupText = '';
  if (!staticOuNames) {
    if (isLevel) {
      ouLevelAndGroupText = _index.default.t('{{allDynamicOuNames}} levels', {
        allDynamicOuNames
      });
    } else {
      ouLevelAndGroupText = _index.default.t('{{allDynamicOuNames}} groups', {
        allDynamicOuNames
      });
    }
  } else {
    if (isLevel) {
      ouLevelAndGroupText = _index.default.t('{{allDynamicOuNames}} levels in {{staticOuNames}}', {
        allDynamicOuNames,
        staticOuNames
      });
    } else {
      ouLevelAndGroupText = _index.default.t('{{allDynamicOuNames}} groups in {{staticOuNames}}', {
        allDynamicOuNames,
        staticOuNames
      });
    }
  }
  return ouLevelAndGroupText;
};