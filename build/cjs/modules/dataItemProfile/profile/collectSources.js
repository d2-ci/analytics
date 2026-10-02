"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPeriodAggregationType = exports.collectSources = void 0;
var _dataTypes = require("../../dataTypes.js");
var _constants = require("../constants.js");
var _expressionOperands = require("../expressionOperands.js");
var _sourceCollector = require("./sourceCollector.js");
/* How each aggregation type aggregates over time, when it differs from the
 * type itself (dhis2-core AnalyticsAggregationType.fromAggregationType) */
const PERIOD_AGGREGATION_BY_AGGREGATION_TYPE = {
  AVERAGE_SUM_ORG_UNIT: 'AVERAGE',
  LAST_AVERAGE_ORG_UNIT: 'LAST',
  LAST_LAST_ORG_UNIT: 'LAST',
  LAST_IN_PERIOD_AVERAGE_ORG_UNIT: 'LAST_IN_PERIOD',
  FIRST_AVERAGE_ORG_UNIT: 'FIRST',
  FIRST_FIRST_ORG_UNIT: 'FIRST',
  MAX_SUM_ORG_UNIT: 'MAX',
  MIN_SUM_ORG_UNIT: 'MIN'
};
const getPeriodAggregationType = aggregationType => {
  var _PERIOD_AGGREGATION_B;
  return (_PERIOD_AGGREGATION_B = PERIOD_AGGREGATION_BY_AGGREGATION_TYPE[aggregationType]) !== null && _PERIOD_AGGREGATION_B !== void 0 ? _PERIOD_AGGREGATION_B : aggregationType;
};
exports.getPeriodAggregationType = getPeriodAggregationType;
const addDataElement = (collector, metadata, {
  id,
  operand,
  aggregationType: aggregationTypeOverride
}) => {
  var _metadata$dataElement, _dataElement$dataSets, _dataElement$aggregat;
  const dataElement = (_metadata$dataElement = metadata.dataElements) === null || _metadata$dataElement === void 0 ? void 0 : _metadata$dataElement[id];
  if (!dataElement) {
    (0, _sourceCollector.addReason)(collector, {
      code: _constants.PROFILE_REASON_MISSING_METADATA,
      id
    });
    return;
  }
  const aggregationType = aggregationTypeOverride !== null && aggregationTypeOverride !== void 0 ? aggregationTypeOverride : dataElement.aggregationType;
  const dataSets = (_dataElement$dataSets = dataElement.dataSets) !== null && _dataElement$dataSets !== void 0 ? _dataElement$dataSets : [];
  /* `operand`: the disaggregation analytics is asked for (de.coc), if any.
   * `aggregationLevels`: the org unit levels values from lower levels stop at */
  const element = {
    id,
    ...(operand && {
      operand
    }),
    aggregationType,
    periodAggregationType: getPeriodAggregationType(aggregationType),
    ...(((_dataElement$aggregat = dataElement.aggregationLevels) === null || _dataElement$aggregat === void 0 ? void 0 : _dataElement$aggregat.length) && {
      aggregationLevels: dataElement.aggregationLevels
    })
  };
  if (_constants.NOT_AGGREGATABLE_AGGREGATION_TYPES.has(aggregationType)) {
    (0, _sourceCollector.addReason)(collector, {
      code: _constants.PROFILE_REASON_NOT_AGGREGATABLE,
      id
    });
  }
  if (!dataSets.length) {
    (0, _sourceCollector.addReason)(collector, {
      code: _constants.PROFILE_REASON_NO_DATA_SET,
      id
    });
    (0, _sourceCollector.addElementToSource)((0, _sourceCollector.getUnassignedElementSource)(collector, id), element);
  }
  dataSets.forEach(dataSet => {
    (0, _sourceCollector.checkDataSetPeriodType)(collector, id, dataSet.periodType);
    (0, _sourceCollector.addElementToSource)((0, _sourceCollector.getDataSetSource)(collector, dataSet), element);
  });
};
const addReportingRate = (collector, metadata, dataSetId) => {
  var _metadata$dataSets;
  const periodType = (_metadata$dataSets = metadata.dataSets) === null || _metadata$dataSets === void 0 || (_metadata$dataSets = _metadata$dataSets[dataSetId]) === null || _metadata$dataSets === void 0 ? void 0 : _metadata$dataSets.periodType;
  if (!periodType) {
    (0, _sourceCollector.addReason)(collector, {
      code: _constants.PROFILE_REASON_MISSING_METADATA,
      id: dataSetId
    });
    return;
  }
  (0, _sourceCollector.checkDataSetPeriodType)(collector, dataSetId, periodType);
  (0, _sourceCollector.getDataSetSource)(collector, {
    id: dataSetId,
    periodType
  }).reportingRate = true;
};
const addProgramIndicator = (collector, metadata, id) => {
  var _metadata$programIndi;
  const programIndicator = (_metadata$programIndi = metadata.programIndicators) === null || _metadata$programIndi === void 0 ? void 0 : _metadata$programIndi[id];
  if (!(programIndicator !== null && programIndicator !== void 0 && programIndicator.program)) {
    (0, _sourceCollector.addReason)(collector, {
      code: _constants.PROFILE_REASON_MISSING_METADATA,
      id
    });
    return;
  }
  (0, _sourceCollector.getProgramSource)(collector, metadata, {
    id: programIndicator.program,
    orgUnitField: programIndicator.orgUnitField,
    missingPeriodBoundaries: programIndicator.hasPeriodBoundaries === false
  });
};

// An event or tracker item named by its program: program.element, program.attribute…
const addProgramItem = (collector, metadata, id) => {
  if (!id.includes('.')) {
    (0, _sourceCollector.addReason)(collector, {
      code: _constants.PROFILE_REASON_MISSING_PROGRAM,
      id
    });
    return;
  }
  (0, _sourceCollector.getProgramSource)(collector, metadata, {
    id: id.split('.')[0]
  });
};
const addExpression = (collector, metadata, expression) => (0, _expressionOperands.parseExpressionOperands)(expression).forEach(operand => {
  switch (operand.type) {
    case _dataTypes.DIMENSION_TYPE_DATA_ELEMENT:
      addDataElement(collector, metadata, operand);
      break;
    case _constants.DIMENSION_TYPE_REPORTING_RATE:
      addReportingRate(collector, metadata, operand.id);
      break;
    case _dataTypes.DIMENSION_TYPE_INDICATOR:
      addIndicator(collector, metadata, operand.id);
      break;
    case _dataTypes.DIMENSION_TYPE_PROGRAM_INDICATOR:
      addProgramIndicator(collector, metadata, operand.id);
      break;
    case _dataTypes.DIMENSION_TYPE_PROGRAM_DATA_ELEMENT:
    case _dataTypes.DIMENSION_TYPE_PROGRAM_ATTRIBUTE:
      addProgramItem(collector, metadata, operand.id);
      break;
    case _constants.OPERAND_TYPE_UNKNOWN:
      (0, _sourceCollector.addReason)(collector, {
        code: _constants.PROFILE_REASON_UNKNOWN_OPERAND,
        token: operand.token
      });
      break;
    default:
    // Constants, org unit groups and [days] have no source
  }
});
const addIndicator = (collector, metadata, id) => {
  var _metadata$indicators;
  // Nested indicators (N{}) can refer to each other
  if (collector.visitedIndicators.has(id)) {
    return;
  }
  collector.visitedIndicators.add(id);
  const indicator = (_metadata$indicators = metadata.indicators) === null || _metadata$indicators === void 0 ? void 0 : _metadata$indicators[id];
  if (!indicator) {
    (0, _sourceCollector.addReason)(collector, {
      code: _constants.PROFILE_REASON_MISSING_METADATA,
      id
    });
    return;
  }
  addExpression(collector, metadata, indicator.numerator);
  addExpression(collector, metadata, indicator.denominator);
};
const addExpressionDimensionItem = (collector, metadata, id) => {
  var _metadata$expressionD;
  const expression = (_metadata$expressionD = metadata.expressionDimensionItems) === null || _metadata$expressionD === void 0 || (_metadata$expressionD = _metadata$expressionD[id]) === null || _metadata$expressionD === void 0 ? void 0 : _metadata$expressionD.expression;
  if (expression === undefined) {
    (0, _sourceCollector.addReason)(collector, {
      code: _constants.PROFILE_REASON_MISSING_METADATA,
      id
    });
    return;
  }
  addExpression(collector, metadata, expression);
};

/**
 * The sources of a data item ({ id, dimensionItemType }), from its metadata
 * (fetchDataItemProfileMetadata), with the reasons the profile can't be told
 * or should note.
 */
const collectSources = ({
  id,
  dimensionItemType
}, metadata) => {
  const collector = (0, _sourceCollector.createCollector)();
  switch (dimensionItemType) {
    case _dataTypes.DIMENSION_TYPE_DATA_ELEMENT:
    case _dataTypes.DIMENSION_TYPE_DATA_ELEMENT_OPERAND:
      addDataElement(collector, metadata, {
        id: id.split('.')[0],
        ...(id.includes('.') && {
          operand: id
        })
      });
      break;
    case _constants.DIMENSION_TYPE_REPORTING_RATE:
      addReportingRate(collector, metadata, id.split('.')[0]);
      break;
    case _dataTypes.DIMENSION_TYPE_INDICATOR:
      addIndicator(collector, metadata, id);
      break;
    case _dataTypes.DIMENSION_TYPE_EXPRESSION_DIMENSION_ITEM:
      addExpressionDimensionItem(collector, metadata, id);
      break;
    case _dataTypes.DIMENSION_TYPE_PROGRAM_INDICATOR:
      addProgramIndicator(collector, metadata, id);
      break;
    case _dataTypes.DIMENSION_TYPE_PROGRAM_DATA_ELEMENT:
    case _dataTypes.DIMENSION_TYPE_PROGRAM_DATA_ELEMENT_OPTION:
    case _dataTypes.DIMENSION_TYPE_PROGRAM_ATTRIBUTE:
    case _dataTypes.DIMENSION_TYPE_PROGRAM_ATTRIBUTE_OPTION:
    case _dataTypes.DIMENSION_TYPE_EVENT_DATA_ITEM:
      addProgramItem(collector, metadata, id);
      break;
    default:
      (0, _sourceCollector.addReason)(collector, {
        code: _constants.PROFILE_REASON_UNSUPPORTED_ITEM_TYPE,
        id,
        dimensionItemType
      });
  }
  return {
    sources: [...collector.sources.values()],
    reasons: collector.reasons
  };
};
exports.collectSources = collectSources;