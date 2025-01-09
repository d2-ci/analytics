export const validateIndicatorExpressionMutation = {
  type: 'create',
  resource: 'indicators/expression/description',
  data: _ref => {
    let {
      expression
    } = _ref;
    return expression;
  }
};
export const validateProgramIndicatorExpressionMutation = {
  type: 'create',
  resource: 'programIndicators/expression/description',
  data: _ref2 => {
    let {
      expression
    } = _ref2;
    return expression;
  }
};
export const createCalculationMutation = {
  type: 'create',
  resource: 'expressionDimensionItems',
  data: _ref3 => {
    let {
      name,
      expression
    } = _ref3;
    return {
      name,
      shortName: name,
      expression
    };
  }
};
export const updateCalculationMutation = {
  type: 'json-patch',
  resource: 'expressionDimensionItems',
  id: _ref4 => {
    let {
      id
    } = _ref4;
    return id;
  },
  data: _ref5 => {
    let {
      name,
      expression
    } = _ref5;
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
export const deleteCalculationMutation = {
  type: 'delete',
  resource: 'expressionDimensionItems',
  id: _ref6 => {
    let {
      id
    } = _ref6;
    return id;
  }
};