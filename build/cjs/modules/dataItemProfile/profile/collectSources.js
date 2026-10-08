"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPeriodAggregationType = exports.collectSources = void 0;
var _dataSets = require("../../dataSets.js");
var _dataTypes = require("../../dataTypes.js");
var _constants = require("../constants.js");
var _expressionOperands = require("../expressionOperands.js");
var _sources = require("../sources.js");
var _sourceCollector = require("./sourceCollector.js");
/* How each aggregation type aggregates over time, when it differs from the
 * type itself (dhis2-core AnalyticsAggregationType.fromAggregationType) */
const PERIOD_AGGREGATION_BY_AGGREGATION_TYPE = {
  AVERAGE_SUM_ORG_UNIT: _constants.PERIOD_AGGREGATION_AVERAGE,
  LAST_AVERAGE_ORG_UNIT: _constants.PERIOD_AGGREGATION_LAST,
  LAST_LAST_ORG_UNIT: _constants.PERIOD_AGGREGATION_LAST,
  LAST_IN_PERIOD_AVERAGE_ORG_UNIT: 'LAST_IN_PERIOD',
  FIRST_AVERAGE_ORG_UNIT: _constants.PERIOD_AGGREGATION_FIRST,
  FIRST_FIRST_ORG_UNIT: _constants.PERIOD_AGGREGATION_FIRST,
  MAX_SUM_ORG_UNIT: 'MAX',
  MIN_SUM_ORG_UNIT: 'MIN'
};
const getPeriodAggregationType = aggregationType => {
  var _PERIOD_AGGREGATION_B;
  return (_PERIOD_AGGREGATION_B = PERIOD_AGGREGATION_BY_AGGREGATION_TYPE[aggregationType]) !== null && _PERIOD_AGGREGATION_B !== void 0 ? _PERIOD_AGGREGATION_B : aggregationType;
};

/* Each add* function adds the sources of an operand and gives its part of
 * the item's expression: `{ operand: key }` for an operand (sources.js keys),
 * `{ missingValueStrategy, parts }` for an expression, null when its metadata
 * is missing. */
exports.getPeriodAggregationType = getPeriodAggregationType;
const toPart = key => ({
  operand: key
});

/* A disaggregation (de.coc) is collected only by the data sets whose
 * category combo holds its option combo: others give the element another
 * combo. When either combo isn't known, every data set counts. */
const getCollectingDataSets = (dataSets, {
  operand,
  metadata
}) => {
  var _metadata$categoryOpt;
  const optionComboId = (0, _expressionOperands.getCategoryOptionComboId)(operand);
  const categoryComboId = optionComboId && ((_metadata$categoryOpt = metadata.categoryOptionCombos) === null || _metadata$categoryOpt === void 0 || (_metadata$categoryOpt = _metadata$categoryOpt[optionComboId]) === null || _metadata$categoryOpt === void 0 ? void 0 : _metadata$categoryOpt.categoryComboId);
  return categoryComboId ? dataSets.filter(dataSet => !dataSet.categoryComboId || dataSet.categoryComboId === categoryComboId) : dataSets;
};
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
    return null;
  }
  const aggregationType = aggregationTypeOverride !== null && aggregationTypeOverride !== void 0 ? aggregationTypeOverride : dataElement.aggregationType;
  const dataSets = getCollectingDataSets((_dataElement$dataSets = dataElement.dataSets) !== null && _dataElement$dataSets !== void 0 ? _dataElement$dataSets : [], {
    operand,
    metadata
  });
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
  return toPart((0, _sources.getElementOperandKey)(element));
};
const addReportingRate = (collector, metadata, dataSetId) => {
  var _metadata$dataSets;
  const periodType = (_metadata$dataSets = metadata.dataSets) === null || _metadata$dataSets === void 0 || (_metadata$dataSets = _metadata$dataSets[dataSetId]) === null || _metadata$dataSets === void 0 ? void 0 : _metadata$dataSets.periodType;
  if (!periodType) {
    (0, _sourceCollector.addReason)(collector, {
      code: _constants.PROFILE_REASON_MISSING_METADATA,
      id: dataSetId
    });
    return null;
  }
  (0, _sourceCollector.checkDataSetPeriodType)(collector, dataSetId, periodType);
  (0, _sourceCollector.getDataSetSource)(collector, {
    id: dataSetId,
    periodType
  }).reportingRate = true;
  return toPart((0, _sources.getReportingRateOperandKey)(dataSetId));
};
const toProgramPart = source => source ? toPart((0, _sources.getProgramOperandKey)(source)) : null;
const addProgramIndicator = (collector, metadata, id) => {
  var _metadata$programIndi;
  const programIndicator = (_metadata$programIndi = metadata.programIndicators) === null || _metadata$programIndi === void 0 ? void 0 : _metadata$programIndi[id];
  if (!(programIndicator !== null && programIndicator !== void 0 && programIndicator.program)) {
    (0, _sourceCollector.addReason)(collector, {
      code: _constants.PROFILE_REASON_MISSING_METADATA,
      id
    });
    return null;
  }
  return toProgramPart((0, _sourceCollector.getProgramSource)(collector, metadata, {
    id: programIndicator.program,
    orgUnitField: programIndicator.orgUnitField,
    missingPeriodBoundaries: programIndicator.hasPeriodBoundaries === false
  }));
};

// An event or tracker item named by its program: program.element, program.attribute…
const addProgramItem = (collector, metadata, id) => {
  if (!id.includes('.')) {
    (0, _sourceCollector.addReason)(collector, {
      code: _constants.PROFILE_REASON_MISSING_PROGRAM,
      id
    });
    return null;
  }
  return toProgramPart((0, _sourceCollector.getProgramSource)(collector, metadata, {
    id: id.split('.')[0]
  }));
};
const addOperand = (collector, metadata, operand) => {
  switch (operand.type) {
    case _dataTypes.DIMENSION_TYPE_DATA_ELEMENT:
      return addDataElement(collector, metadata, operand);
    case _dataSets.REPORTING_RATE:
      return addReportingRate(collector, metadata, operand.id);
    case _dataTypes.DIMENSION_TYPE_INDICATOR:
      return addIndicator(collector, metadata, operand.id);
    case _dataTypes.DIMENSION_TYPE_PROGRAM_INDICATOR:
      return addProgramIndicator(collector, metadata, operand.id);
    case _dataTypes.DIMENSION_TYPE_PROGRAM_DATA_ELEMENT:
    case _dataTypes.DIMENSION_TYPE_PROGRAM_ATTRIBUTE:
      return addProgramItem(collector, metadata, operand.id);
    case _constants.OPERAND_TYPE_UNKNOWN:
      (0, _sourceCollector.addReason)(collector, {
        code: _constants.PROFILE_REASON_UNKNOWN_OPERAND,
        token: operand.token
      });
      return null;
    default:
      // Constants, org unit groups and [days] have no source, and never miss
      return null;
  }
};
const addExpression = (collector, metadata, {
  expression,
  missingValueStrategy
}) => ({
  missingValueStrategy,
  parts: (0, _expressionOperands.parseExpressionOperands)(expression).map(operand => addOperand(collector, metadata, operand)).filter(Boolean)
});

// Each side skips only when all its values are missing; the indicator needs both
const addIndicator = (collector, metadata, id) => {
  var _metadata$indicators;
  const indicator = (_metadata$indicators = metadata.indicators) === null || _metadata$indicators === void 0 ? void 0 : _metadata$indicators[id];
  if (!indicator) {
    (0, _sourceCollector.addReason)(collector, {
      code: _constants.PROFILE_REASON_MISSING_METADATA,
      id
    });
    return null;
  }

  // Nested indicators (N{}) can refer to each other, which analytics refuses
  if (collector.indicatorsInProgress.has(id)) {
    return null;
  }
  collector.indicatorsInProgress.add(id);
  const sides = [indicator.numerator, indicator.denominator].map(side => addExpression(collector, metadata, {
    expression: side,
    missingValueStrategy: _constants.SKIP_IF_ALL_VALUES_MISSING
  }));
  collector.indicatorsInProgress.delete(id);
  return {
    missingValueStrategy: _constants.SKIP_IF_ANY_VALUE_MISSING,
    parts: sides
  };
};

/* Analytics evaluates an expression dimension item with
 * SKIP_IF_ALL_VALUES_MISSING, whatever strategy it is saved with: a missing
 * operand counts as 0, and no value comes back only when all are missing,
 * even with NEVER_SKIP (checked by the test tool on 2.40 to 2.44) */
const addExpressionDimensionItem = (collector, metadata, id) => {
  var _metadata$expressionD;
  const expression = (_metadata$expressionD = metadata.expressionDimensionItems) === null || _metadata$expressionD === void 0 || (_metadata$expressionD = _metadata$expressionD[id]) === null || _metadata$expressionD === void 0 ? void 0 : _metadata$expressionD.expression;
  if (expression === undefined) {
    (0, _sourceCollector.addReason)(collector, {
      code: _constants.PROFILE_REASON_MISSING_METADATA,
      id
    });
    return null;
  }
  return addExpression(collector, metadata, {
    expression,
    missingValueStrategy: _constants.SKIP_IF_ALL_VALUES_MISSING
  });
};
const addItem = (collector, metadata, {
  id,
  dimensionItemType
}) => {
  switch (dimensionItemType) {
    case _dataTypes.DIMENSION_TYPE_DATA_ELEMENT:
    case _dataTypes.DIMENSION_TYPE_DATA_ELEMENT_OPERAND:
      return addDataElement(collector, metadata, {
        id: id.split('.')[0],
        ...(id.includes('.') && {
          operand: id
        })
      });
    case _dataSets.REPORTING_RATE:
      return addReportingRate(collector, metadata, id.split('.')[0]);
    case _dataTypes.DIMENSION_TYPE_INDICATOR:
      return addIndicator(collector, metadata, id);
    case _dataTypes.DIMENSION_TYPE_EXPRESSION_DIMENSION_ITEM:
      return addExpressionDimensionItem(collector, metadata, id);
    case _dataTypes.DIMENSION_TYPE_PROGRAM_INDICATOR:
      return addProgramIndicator(collector, metadata, id);
    case _dataTypes.DIMENSION_TYPE_PROGRAM_DATA_ELEMENT:
    case _dataTypes.DIMENSION_TYPE_PROGRAM_DATA_ELEMENT_OPTION:
    case _dataTypes.DIMENSION_TYPE_PROGRAM_ATTRIBUTE:
    case _dataTypes.DIMENSION_TYPE_PROGRAM_ATTRIBUTE_OPTION:
    case _dataTypes.DIMENSION_TYPE_EVENT_DATA_ITEM:
      return addProgramItem(collector, metadata, id);
    default:
      (0, _sourceCollector.addReason)(collector, {
        code: _constants.PROFILE_REASON_UNSUPPORTED_ITEM_TYPE,
        id,
        dimensionItemType
      });
      return null;
  }
};

/**
 * The sources of a data item ({ id, dimensionItemType }), from its metadata
 * (fetchDataItemProfileMetadata), with the reasons the profile can't be told
 * or should note, and for an indicator or expression dimension item its
 * `expression`: how its operands combine.
 */
const collectSources = (item, metadata) => {
  const collector = (0, _sourceCollector.createCollector)();
  const part = addItem(collector, metadata, item);
  return {
    sources: [...collector.sources.values()],
    reasons: collector.reasons,
    ...((part === null || part === void 0 ? void 0 : part.parts) && {
      expression: part
    })
  };
};
exports.collectSources = collectSources;