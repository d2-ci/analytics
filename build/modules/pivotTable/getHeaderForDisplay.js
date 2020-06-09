"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHeaderForDisplay = void 0;

var headerStacksAreEqual = function headerStacksAreEqual(a, b, limit) {
  for (var i = 0; i <= limit; ++i) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
};

var getHeaderForDisplay = function getHeaderForDisplay(_ref) {
  var start = _ref.start,
      count = _ref.count,
      index = _ref.index,
      dimensionLevel = _ref.dimensionLevel,
      getHeader = _ref.getHeader,
      showHierarchy = _ref.showHierarchy;
  var header = getHeader(index);
  var showHeader = index === start || !headerStacksAreEqual(header, getHeader(index - 1), dimensionLevel);

  if (!showHeader) {
    return null;
  }

  var span = 1;

  for (var i = index + 1; i < start + count; ++i) {
    if (!headerStacksAreEqual(getHeader(i), header, dimensionLevel)) {
      break;
    }

    ++span;
  }

  var currentHeader = header[dimensionLevel];
  var includesHierarchy = showHierarchy && (currentHeader === null || currentHeader === void 0 ? void 0 : currentHeader.hierarchy);
  var label = includesHierarchy ? currentHeader.hierarchy.join(' / ') : currentHeader === null || currentHeader === void 0 ? void 0 : currentHeader.name;
  return {
    span: span,
    label: label,
    includesHierarchy: includesHierarchy
  };
};

exports.getHeaderForDisplay = getHeaderForDisplay;