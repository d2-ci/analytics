"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAxisStringFromId = void 0;
const AXIS_ID_PREFIX = 'AXIS_';

const getAxisStringFromId = id => "".concat(AXIS_ID_PREFIX).concat(id);

exports.getAxisStringFromId = getAxisStringFromId;