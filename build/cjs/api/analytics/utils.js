"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatRequestPath = exports.formatDimension = exports.customEncodeURIComponent = void 0;
// Define our very own special list of characters that we don't want to encode in the URI
const whitelistURI = ',&$=/;:';
const whitelistURICodes = whitelistURI.split('').map(c => encodeURIComponent(c));
const whitelistRegExp = new RegExp(`(?:${whitelistURICodes.join('|')})`, 'g');
const customEncodeURIComponent = uri => encodeURIComponent(uri).replace(whitelistRegExp, decodeURIComponent);
exports.customEncodeURIComponent = customEncodeURIComponent;
const formatRequestPath = _ref => {
  let {
    path,
    program,
    trackedEntityType
  } = _ref;
  return [path, program, trackedEntityType].filter(Boolean).join('/');
};
exports.formatRequestPath = formatRequestPath;
const formatDimension = _ref2 => {
  let {
    outputType,
    programId,
    programStageId,
    dimension
  } = _ref2;
  return [outputType === 'TRACKED_ENTITY_INSTANCE' ? programId : undefined, programStageId, dimension].filter(Boolean).join('.');
};
exports.formatDimension = formatDimension;