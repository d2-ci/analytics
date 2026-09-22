"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertOuLevelsToUids = void 0;
var _dimensionGetItems = require("../layout/dimensionGetItems.js");
var _layoutGetDimension = require("../layout/layoutGetDimension.js");
var _layoutReplaceDimension = require("../layout/layoutReplaceDimension.js");
var _index = require("../ouIdHelper/index.js");
var _predefinedDimensions = require("../predefinedDimensions.js");
const isOuLevelIntId = id => _index.ouIdHelper.hasLevelPrefix(id) ? Number.isInteger(parseInt(_index.ouIdHelper.removePrefix(id), 10)) : false;
const replaceNumericOuLevelWithUid = ouLevels => item => {
  var _ouLevels$find;
  if (!isOuLevelIntId(item.id)) {
    return item;
  }
  const ouIntId = parseInt(_index.ouIdHelper.removePrefix(item.id), 10);
  const ouUid = (_ouLevels$find = ouLevels.find(l => parseInt(l.level, 10) === ouIntId)) === null || _ouLevels$find === void 0 ? void 0 : _ouLevels$find.id;
  return ouUid ? Object.assign({}, item, {
    id: _index.ouIdHelper.addLevelPrefix(ouUid)
  }) : item;
};
const convertOuLevelsToUids = (ouLevels, layout) => {
  const ouDimension = (0, _layoutGetDimension.layoutGetDimension)(layout, _predefinedDimensions.DIMENSION_ID_ORGUNIT);
  const hasNumericOuLevels = ouDimension && (0, _dimensionGetItems.dimensionGetItems)(ouDimension).some(item => isOuLevelIntId(item.id));
  if (hasNumericOuLevels) {
    const replaceNumericOuLevel = replaceNumericOuLevelWithUid(ouLevels);
    const updatedOuItems = (0, _dimensionGetItems.dimensionGetItems)(ouDimension).map(replaceNumericOuLevel);
    return (0, _layoutReplaceDimension.layoutReplaceDimension)(layout, _predefinedDimensions.DIMENSION_ID_ORGUNIT, updatedOuItems);
  }
  return layout;
};
exports.convertOuLevelsToUids = convertOuLevelsToUids;