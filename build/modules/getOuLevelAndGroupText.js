"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOuLevelAndGroupText = void 0;

var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));

var _ouIdHelper = require("./ouIdHelper");

var _dimensionIs = require("./layout/dimensionIs");

var _dimensionGetItems = require("./layout/dimensionGetItems");

var _predefinedDimensions = require("./predefinedDimensions");

var getOuLevelAndGroupText = function getOuLevelAndGroupText(filter, metaData) {
  if (!(0, _dimensionIs.dimensionIs)(_predefinedDimensions.DIMENSION_ID_ORGUNIT)) {
    return '';
  }

  var items = (0, _dimensionGetItems.dimensionGetItems)(filter);
  var hasOuLevel = items.some(function (item) {
    return _ouIdHelper.ouIdHelper.hasLevelPrefix(item.id);
  });
  var hasOuGroup = items.some(function (item) {
    return _ouIdHelper.ouIdHelper.hasGroupPrefix(item.id);
  });
  var filterFragments = [];

  if (hasOuGroup) {
    filterFragments.push(getLevelAndGroupText(items, metaData, false));
  }

  if (hasOuLevel) {
    filterFragments.push(getLevelAndGroupText(items, metaData, true));
  }

  return filterFragments.join(' - ');
};

exports.getOuLevelAndGroupText = getOuLevelAndGroupText;

var getLevelAndGroupText = function getLevelAndGroupText(items, metaData, isLevel) {
  var getNameFromMetadata = function getNameFromMetadata(id) {
    return metaData.items[id] ? metaData.items[id].name : id;
  };

  var dynamicOuItems = items.filter(function (item) {
    return isLevel ? _ouIdHelper.ouIdHelper.hasLevelPrefix(item.id) : _ouIdHelper.ouIdHelper.hasGroupPrefix(item.id);
  });
  var lastItem = dynamicOuItems.length > 1 ? dynamicOuItems.pop() : null;
  var dynamicOuNames = dynamicOuItems.map(function (item) {
    return getNameFromMetadata(_ouIdHelper.ouIdHelper.removePrefix(item.id));
  }).join(', ');
  var allDynamicOuNames;

  if (lastItem) {
    var lastOuName = getNameFromMetadata(_ouIdHelper.ouIdHelper.removePrefix(lastItem.id));
    allDynamicOuNames = _d2I18n.default.t('{{dynamicOuNames}} and {{lastOuName}}', {
      dynamicOuNames: dynamicOuNames,
      lastOuName: lastOuName
    });
  } else {
    allDynamicOuNames = dynamicOuNames;
  }

  var staticOuNames = items.filter(function (item) {
    return !_ouIdHelper.ouIdHelper.hasGroupPrefix(item.id) && !_ouIdHelper.ouIdHelper.hasLevelPrefix(item.id);
  }).map(function (item) {
    return getNameFromMetadata(item.id);
  }).join(', ');
  var ouLevelAndGroupText = '';

  if (!staticOuNames) {
    if (isLevel) {
      ouLevelAndGroupText = _d2I18n.default.t('{{allDynamicOuNames}} levels', {
        allDynamicOuNames: allDynamicOuNames
      });
    } else {
      ouLevelAndGroupText = _d2I18n.default.t('{{allDynamicOuNames}} groups', {
        allDynamicOuNames: allDynamicOuNames
      });
    }
  } else {
    if (isLevel) {
      ouLevelAndGroupText = _d2I18n.default.t('{{allDynamicOuNames}} levels in {{staticOuNames}}', {
        allDynamicOuNames: allDynamicOuNames,
        staticOuNames: staticOuNames
      });
    } else {
      ouLevelAndGroupText = _d2I18n.default.t('{{allDynamicOuNames}} groups in {{staticOuNames}}', {
        allDynamicOuNames: allDynamicOuNames,
        staticOuNames: staticOuNames
      });
    }
  }

  return ouLevelAndGroupText;
};