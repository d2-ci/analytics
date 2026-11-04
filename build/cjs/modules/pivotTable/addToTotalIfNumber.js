"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addToTotalIfNumber = void 0;
const addToTotalIfNumber = (value, total) => typeof value === 'number' && Number.isFinite(value) ? (total !== null && total !== void 0 ? total : 0) + value : total;
exports.addToTotalIfNumber = addToTotalIfNumber;