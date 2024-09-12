export const validateExpressionMutation = {
  type: 'create',
  resource: 'indicators/expression/description',
  data: _ref => {
    let {
      expression
    } = _ref;
    return expression;
  }
};
export const createCalculationMutation = {
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
export const updateCalculationMutation = {
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
export const deleteCalculationMutation = {
  type: 'delete',
  resource: 'expressionDimensionItems',
  id: _ref5 => {
    let {
      id
    } = _ref5;
    return id;
  }
};