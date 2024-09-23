"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateExpressionMutation = exports.updateCalculationMutation = exports.deleteCalculationMutation = exports.createCalculationMutation = void 0;
const validateExpressionMutation = {
  type: 'create',
  resource: 'indicators/expression/description',
  data: _ref => {
    let {
      expression
    } = _ref;
    return expression;
  }
};
exports.validateExpressionMutation = validateExpressionMutation;
const createCalculationMutation = {
  type: 'create',
  resource: 'expressionDimensionItems',
  data: _ref2 => {
    let {
      name,
      expression
    } = _ref2;
    return {
      name,
      shortName: name,
      expression
    };
  }
};
exports.createCalculationMutation = createCalculationMutation;
const updateCalculationMutation = {
  type: 'json-patch',
  resource: 'expressionDimensionItems',
  id: _ref3 => {
    let {
      id
    } = _ref3;
    return id;
  },
  data: _ref4 => {
    let {
      name,
      expression
    } = _ref4;
    return [{
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
    }];
  }
};
exports.updateCalculationMutation = updateCalculationMutation;
const deleteCalculationMutation = {
  type: 'delete',
  resource: 'expressionDimensionItems',
  id: _ref5 => {
    let {
      id
    } = _ref5;
    return id;
  }
};
exports.deleteCalculationMutation = deleteCalculationMutation;