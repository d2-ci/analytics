"use strict";

var _getOuLevelAndGroupText = require("../getOuLevelAndGroupText");

describe('getOuLevelAndGroupText', function () {
  var filter = {};
  var metaData = {
    dimensions: {
      ou: ['LEVEL-2nd-floor', 'OU_GROUP-fruit', 'OU_GROUP-veggies', '_SierraLeone_']
    },
    items: {
      _SierraLeone_: {
        name: 'Sierra Leone',
        uid: '_SierraLeone_'
      },
      fruit: {
        name: 'Fruit',
        uid: 'fruit'
      },
      veggies: {
        name: 'Veggies',
        uid: 'veggies'
      },
      '2nd-floor': {
        name: 'Second floor',
        uid: '2nd-floor'
      }
    }
  };
  beforeEach(function () {
    filter = {
      dimension: 'ou'
    };
  });
  it('summarizes ou levels and groups', function () {
    filter.items = [{
      id: 'LEVEL-2nd-floor'
    }, {
      id: 'OU_GROUP-fruit'
    }, {
      id: 'OU_GROUP-veggies'
    }, {
      id: '_SierraLeone_'
    }];
    expect((0, _getOuLevelAndGroupText.getOuLevelAndGroupText)(filter, metaData)).toEqual('Fruit and Veggies groups in Sierra Leone - Second floor levels in Sierra Leone');
  });
  it('summarizes ou levels and groups when no root ou', function () {
    filter.items = [{
      id: 'LEVEL-2nd-floor'
    }, {
      id: 'OU_GROUP-fruit'
    }, {
      id: 'OU_GROUP-veggies'
    }];
    expect((0, _getOuLevelAndGroupText.getOuLevelAndGroupText)(filter, metaData)).toEqual('Fruit and Veggies groups - Second floor levels');
  });
});