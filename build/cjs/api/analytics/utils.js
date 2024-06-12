"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.customEncodeURIComponent = void 0;
// Define our very own special list of characters that we don't want to encode in the URI
const whitelistURI = ',&$=/;:';
const whitelistURICodes = whitelistURI.split('').map(c => encodeURIComponent(c));
const whitelistRegExp = new RegExp("(?:".concat(whitelistURICodes.join('|'), ")"), 'g');

const customEncodeURIComponent = uri => encodeURIComponent(uri).replace(whitelistRegExp, decodeURIComponent);

exports.customEncodeURIComponent = customEncodeURIComponent;