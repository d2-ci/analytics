"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inDataSets = void 0;
// Data sets for a test data element, one per period type: `${periodType}Form`
const inDataSets = periodTypes => periodTypes.map(periodType => ({
  id: `${periodType}Form`,
  periodType
}));
exports.inDataSets = inDataSets;