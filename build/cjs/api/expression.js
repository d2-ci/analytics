"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateProgramIndicatorFilterMutation = exports.validateProgramIndicatorExpressionMutation = exports.validateIndicatorExpressionMutation = exports.updateCalculationMutation = exports.deleteCalculationMutation = exports.createCalculationMutation = void 0;
const validateIndicatorExpressionMutation = exports.validateIndicatorExpressionMutation = {
  type: 'create',
  resource: 'indicators/expression/description',
  data: ({
    expression
  }) => expression
};
const validateProgramIndicatorExpressionMutation = exports.validateProgramIndicatorExpressionMutation = {
  type: 'create',
  resource: 'programIndicators/expression/description',
  data: ({
    expression
  }) => expression
};
const validateProgramIndicatorFilterMutation = exports.validateProgramIndicatorFilterMutation = {
  type: 'create',
  resource: 'programIndicators/filter/description',
  data: ({
    filter
  }) => filter
};
const createCalculationMutation = exports.createCalculationMutation = {
  type: 'create',
  resource: 'expressionDimensionItems',
  data: ({
    name,
    expression
  }) => ({
    name,
    shortName: name,
    expression
  })
};
const updateCalculationMutation = exports.updateCalculationMutation = {
  type: 'json-patch',
  resource: 'expressionDimensionItems',
  id: ({
    id
  }) => id,
  data: ({
    name,
    expression
  }) => [{
    op: 'add',
    path: '/name',
    value: name
  }, {
    op: 'add',
    path: '/shortName',
    value: name
  }, {
    op: 'add',
    path: '/expression',
    value: expression
  }]
};
const deleteCalculationMutation = exports.deleteCalculationMutation = {
  type: 'delete',
  resource: 'expressionDimensionItems',
  id: ({
    id
  }) => id
};