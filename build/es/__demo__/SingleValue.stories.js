import { storiesOf } from '@storybook/react';
import React, { useCallback } from 'react';
import { createVisualization } from '../index.js';
const constainerStyle = {
  width: 400,
  height: 400,
  border: '1px solid magenta',
  marginBottom: 14
};
const data = [{
  response: {
    headers: [{
      name: 'dx',
      column: 'Data',
      valueType: 'TEXT',
      type: 'java.lang.String',
      hidden: false,
      meta: true
    }, {
      name: 'value',
      column: 'Value',
      valueType: 'NUMBER',
      type: 'java.lang.Double',
      hidden: false,
      meta: false
    }],
    metaData: {
      items: {
        202308: {
          uid: '202308',
          code: '202308',
          name: 'August 2023',
          dimensionItemType: 'PERIOD',
          valueType: 'TEXT',
          totalAggregationType: 'SUM',
          startDate: '2023-08-01T00:00:00.000',
          endDate: '2023-08-31T00:00:00.000'
        },
        202309: {
          uid: '202309',
          code: '202309',
          name: 'September 2023',
          dimensionItemType: 'PERIOD',
          valueType: 'TEXT',
          totalAggregationType: 'SUM',
          startDate: '2023-09-01T00:00:00.000',
          endDate: '2023-09-30T00:00:00.000'
        },
        202310: {
          uid: '202310',
          code: '202310',
          name: 'October 2023',
          dimensionItemType: 'PERIOD',
          valueType: 'TEXT',
          totalAggregationType: 'SUM',
          startDate: '2023-10-01T00:00:00.000',
          endDate: '2023-10-31T00:00:00.000'
        },
        202311: {
          uid: '202311',
          code: '202311',
          name: 'November 2023',
          dimensionItemType: 'PERIOD',
          valueType: 'TEXT',
          totalAggregationType: 'SUM',
          startDate: '2023-11-01T00:00:00.000',
          endDate: '2023-11-30T00:00:00.000'
        },
        202312: {
          uid: '202312',
          code: '202312',
          name: 'December 2023',
          dimensionItemType: 'PERIOD',
          valueType: 'TEXT',
          totalAggregationType: 'SUM',
          startDate: '2023-12-01T00:00:00.000',
          endDate: '2023-12-31T00:00:00.000'
        },
        202401: {
          uid: '202401',
          code: '202401',
          name: 'January 2024',
          dimensionItemType: 'PERIOD',
          valueType: 'TEXT',
          totalAggregationType: 'SUM',
          startDate: '2024-01-01T00:00:00.000',
          endDate: '2024-01-31T00:00:00.000'
        },
        202402: {
          uid: '202402',
          code: '202402',
          name: 'February 2024',
          dimensionItemType: 'PERIOD',
          valueType: 'TEXT',
          totalAggregationType: 'SUM',
          startDate: '2024-02-01T00:00:00.000',
          endDate: '2024-02-29T00:00:00.000'
        },
        202403: {
          uid: '202403',
          code: '202403',
          name: 'March 2024',
          dimensionItemType: 'PERIOD',
          valueType: 'TEXT',
          totalAggregationType: 'SUM',
          startDate: '2024-03-01T00:00:00.000',
          endDate: '2024-03-31T00:00:00.000'
        },
        202404: {
          uid: '202404',
          code: '202404',
          name: 'April 2024',
          dimensionItemType: 'PERIOD',
          valueType: 'TEXT',
          totalAggregationType: 'SUM',
          startDate: '2024-04-01T00:00:00.000',
          endDate: '2024-04-30T00:00:00.000'
        },
        202405: {
          uid: '202405',
          code: '202405',
          name: 'May 2024',
          dimensionItemType: 'PERIOD',
          valueType: 'TEXT',
          totalAggregationType: 'SUM',
          startDate: '2024-05-01T00:00:00.000',
          endDate: '2024-05-31T00:00:00.000'
        },
        202406: {
          uid: '202406',
          code: '202406',
          name: 'June 2024',
          dimensionItemType: 'PERIOD',
          valueType: 'TEXT',
          totalAggregationType: 'SUM',
          startDate: '2024-06-01T00:00:00.000',
          endDate: '2024-06-30T00:00:00.000'
        },
        202407: {
          uid: '202407',
          code: '202407',
          name: 'July 2024',
          dimensionItemType: 'PERIOD',
          valueType: 'TEXT',
          totalAggregationType: 'SUM',
          startDate: '2024-07-01T00:00:00.000',
          endDate: '2024-07-31T00:00:00.000'
        },
        ou: {
          uid: 'ou',
          name: 'Organisation unit',
          dimensionType: 'ORGANISATION_UNIT'
        },
        O6uvpzGd5pu: {
          uid: 'O6uvpzGd5pu',
          code: 'OU_264',
          name: 'Bo',
          dimensionItemType: 'ORGANISATION_UNIT',
          valueType: 'TEXT',
          totalAggregationType: 'SUM'
        },
        LAST_12_MONTHS: {
          name: 'Last 12 months'
        },
        dx: {
          uid: 'dx',
          name: 'Data',
          dimensionType: 'DATA_X'
        },
        pe: {
          uid: 'pe',
          name: 'Period',
          dimensionType: 'PERIOD'
        },
        FnYCr2EAzWS: {
          uid: 'FnYCr2EAzWS',
          code: 'IN_52493',
          name: 'BCG Coverage <1y',
          legendSet: 'BtxOoQuLyg1',
          dimensionItemType: 'INDICATOR',
          valueType: 'NUMBER',
          totalAggregationType: 'AVERAGE',
          indicatorType: {
            name: 'Per cent',
            displayName: 'Per cent',
            factor: 100,
            number: false
          }
        }
      },
      dimensions: {
        dx: ['FnYCr2EAzWS'],
        pe: ['202308', '202309', '202310', '202311', '202312', '202401', '202402', '202403', '202404', '202405', '202406', '202407'],
        ou: ['O6uvpzGd5pu'],
        co: []
      }
    },
    rowContext: {},
    rows: [['FnYCr2EAzWS', '34.19']],
    width: 2,
    height: 1,
    headerWidth: 2
  },
  headers: [{
    name: 'dx',
    column: 'Data',
    valueType: 'TEXT',
    type: 'java.lang.String',
    hidden: false,
    meta: true,
    isPrefix: false,
    isCollect: false,
    index: 0
  }, {
    name: 'value',
    column: 'Value',
    valueType: 'NUMBER',
    type: 'java.lang.Double',
    hidden: false,
    meta: false,
    isPrefix: false,
    isCollect: false,
    index: 1
  }],
  rows: [['FnYCr2EAzWS', '34.19']],
  metaData: {
    items: {
      202308: {
        uid: '202308',
        code: '202308',
        name: 'August 2023',
        dimensionItemType: 'PERIOD',
        valueType: 'TEXT',
        totalAggregationType: 'SUM',
        startDate: '2023-08-01T00:00:00.000',
        endDate: '2023-08-31T00:00:00.000'
      },
      202309: {
        uid: '202309',
        code: '202309',
        name: 'September 2023',
        dimensionItemType: 'PERIOD',
        valueType: 'TEXT',
        totalAggregationType: 'SUM',
        startDate: '2023-09-01T00:00:00.000',
        endDate: '2023-09-30T00:00:00.000'
      },
      202310: {
        uid: '202310',
        code: '202310',
        name: 'October 2023',
        dimensionItemType: 'PERIOD',
        valueType: 'TEXT',
        totalAggregationType: 'SUM',
        startDate: '2023-10-01T00:00:00.000',
        endDate: '2023-10-31T00:00:00.000'
      },
      202311: {
        uid: '202311',
        code: '202311',
        name: 'November 2023',
        dimensionItemType: 'PERIOD',
        valueType: 'TEXT',
        totalAggregationType: 'SUM',
        startDate: '2023-11-01T00:00:00.000',
        endDate: '2023-11-30T00:00:00.000'
      },
      202312: {
        uid: '202312',
        code: '202312',
        name: 'December 2023',
        dimensionItemType: 'PERIOD',
        valueType: 'TEXT',
        totalAggregationType: 'SUM',
        startDate: '2023-12-01T00:00:00.000',
        endDate: '2023-12-31T00:00:00.000'
      },
      202401: {
        uid: '202401',
        code: '202401',
        name: 'January 2024',
        dimensionItemType: 'PERIOD',
        valueType: 'TEXT',
        totalAggregationType: 'SUM',
        startDate: '2024-01-01T00:00:00.000',
        endDate: '2024-01-31T00:00:00.000'
      },
      202402: {
        uid: '202402',
        code: '202402',
        name: 'February 2024',
        dimensionItemType: 'PERIOD',
        valueType: 'TEXT',
        totalAggregationType: 'SUM',
        startDate: '2024-02-01T00:00:00.000',
        endDate: '2024-02-29T00:00:00.000'
      },
      202403: {
        uid: '202403',
        code: '202403',
        name: 'March 2024',
        dimensionItemType: 'PERIOD',
        valueType: 'TEXT',
        totalAggregationType: 'SUM',
        startDate: '2024-03-01T00:00:00.000',
        endDate: '2024-03-31T00:00:00.000'
      },
      202404: {
        uid: '202404',
        code: '202404',
        name: 'April 2024',
        dimensionItemType: 'PERIOD',
        valueType: 'TEXT',
        totalAggregationType: 'SUM',
        startDate: '2024-04-01T00:00:00.000',
        endDate: '2024-04-30T00:00:00.000'
      },
      202405: {
        uid: '202405',
        code: '202405',
        name: 'May 2024',
        dimensionItemType: 'PERIOD',
        valueType: 'TEXT',
        totalAggregationType: 'SUM',
        startDate: '2024-05-01T00:00:00.000',
        endDate: '2024-05-31T00:00:00.000'
      },
      202406: {
        uid: '202406',
        code: '202406',
        name: 'June 2024',
        dimensionItemType: 'PERIOD',
        valueType: 'TEXT',
        totalAggregationType: 'SUM',
        startDate: '2024-06-01T00:00:00.000',
        endDate: '2024-06-30T00:00:00.000'
      },
      202407: {
        uid: '202407',
        code: '202407',
        name: 'July 2024',
        dimensionItemType: 'PERIOD',
        valueType: 'TEXT',
        totalAggregationType: 'SUM',
        startDate: '2024-07-01T00:00:00.000',
        endDate: '2024-07-31T00:00:00.000'
      },
      ou: {
        uid: 'ou',
        name: 'Organisation unit',
        dimensionType: 'ORGANISATION_UNIT'
      },
      O6uvpzGd5pu: {
        uid: 'O6uvpzGd5pu',
        code: 'OU_264',
        name: 'Bo',
        dimensionItemType: 'ORGANISATION_UNIT',
        valueType: 'TEXT',
        totalAggregationType: 'SUM'
      },
      LAST_12_MONTHS: {
        name: 'Last 12 months'
      },
      dx: {
        uid: 'dx',
        name: 'Data',
        dimensionType: 'DATA_X'
      },
      pe: {
        uid: 'pe',
        name: 'Period',
        dimensionType: 'PERIOD'
      },
      FnYCr2EAzWS: {
        uid: 'FnYCr2EAzWS',
        code: 'IN_52493',
        name: 'BCG Coverage <1y',
        legendSet: 'BtxOoQuLyg1',
        dimensionItemType: 'INDICATOR',
        valueType: 'NUMBER',
        totalAggregationType: 'AVERAGE',
        indicatorType: {
          name: 'Per cent',
          displayName: 'Per cent',
          factor: 100,
          number: false
        }
      }
    },
    dimensions: {
      dx: ['FnYCr2EAzWS'],
      pe: ['202308', '202309', '202310', '202311', '202312', '202401', '202402', '202403', '202404', '202405', '202406', '202407'],
      ou: ['O6uvpzGd5pu'],
      co: []
    }
  }
}];
const layout = {
  name: 'BCG coverage last 12 months - Bo',
  created: '2013-10-16T19:50:52.464',
  lastUpdated: '2021-07-06T12:53:57.296',
  translations: [],
  favorites: [],
  lastUpdatedBy: {
    id: 'xE7jOejl9FI',
    code: null,
    name: 'John Traore',
    displayName: 'John Traore',
    username: 'admin'
  },
  regressionType: 'NONE',
  displayDensity: 'NORMAL',
  fontSize: 'NORMAL',
  sortOrder: 0,
  topLimit: 0,
  hideEmptyRows: false,
  showHierarchy: false,
  completedOnly: false,
  skipRounding: false,
  dataDimensionItems: [{
    indicator: {
      name: 'BCG Coverage <1y',
      dimensionItemType: 'INDICATOR',
      displayName: 'BCG Coverage <1y',
      access: {
        manage: true,
        externalize: true,
        write: true,
        read: true,
        update: true,
        delete: true
      },
      displayShortName: 'BCG Coverage <1y',
      id: 'FnYCr2EAzWS'
    },
    dataDimensionItemType: 'INDICATOR'
  }],
  subscribers: [],
  aggregationType: 'DEFAULT',
  digitGroupSeparator: 'SPACE',
  hideEmptyRowItems: 'NONE',
  noSpaceBetweenColumns: false,
  cumulativeValues: false,
  percentStackedValues: false,
  showData: true,
  colTotals: false,
  rowTotals: false,
  rowSubTotals: false,
  colSubTotals: false,
  hideTitle: false,
  hideSubtitle: false,
  showDimensionLabels: false,
  interpretations: [],
  type: 'SINGLE_VALUE',
  reportingParams: {
    grandParentOrganisationUnit: false,
    parentOrganisationUnit: false,
    organisationUnit: false,
    reportingPeriod: false
  },
  numberType: 'VALUE',
  fontStyle: {},
  colorSet: 'DEFAULT',
  yearlySeries: [],
  regression: false,
  hideEmptyColumns: false,
  fixColumnHeaders: false,
  fixRowHeaders: false,
  filters: [{
    items: [{
      name: 'Bo',
      dimensionItemType: 'ORGANISATION_UNIT',
      displayShortName: 'Bo',
      displayName: 'Bo',
      access: {
        manage: true,
        externalize: true,
        write: true,
        read: true,
        update: true,
        delete: true
      },
      id: 'O6uvpzGd5pu'
    }],
    dimension: 'ou'
  }, {
    items: [{
      name: 'LAST_12_MONTHS',
      dimensionItemType: 'PERIOD',
      displayShortName: 'LAST_12_MONTHS',
      displayName: 'LAST_12_MONTHS',
      access: {
        manage: true,
        externalize: true,
        write: true,
        read: true,
        update: true,
        delete: true
      },
      id: 'LAST_12_MONTHS'
    }],
    dimension: 'pe'
  }],
  parentGraphMap: {
    O6uvpzGd5pu: 'ImspTQPwCqd'
  },
  columns: [{
    items: [{
      name: 'BCG Coverage <1y',
      dimensionItemType: 'INDICATOR',
      displayName: 'BCG Coverage <1y',
      access: {
        manage: true,
        externalize: true,
        write: true,
        read: true,
        update: true,
        delete: true
      },
      displayShortName: 'BCG Coverage <1y',
      id: 'FnYCr2EAzWS'
    }],
    dimension: 'dx'
  }],
  rows: [],
  subscribed: false,
  displayName: 'BCG coverage last 12 months - Bo',
  access: {
    manage: true,
    externalize: true,
    write: true,
    read: true,
    update: true,
    delete: true
  },
  favorite: false,
  user: {
    id: 'xE7jOejl9FI',
    code: null,
    name: 'John Traore',
    displayName: 'John Traore',
    username: 'admin'
  },
  href: 'http://localhost:8080/api/41/visualizations/mYMnDl5Z9oD',
  id: 'mYMnDl5Z9oD',
  legend: {
    showKey: false
  },
  sorting: [],
  series: [],
  icons: [],
  seriesKey: {
    hidden: false
  },
  axes: []
};
const extraOptions = {
  dashboard: false,
  animation: 200,
  legendSets: []
};
storiesOf('SingleValue', module).add('default', () => {
  const onOldContainerMounted = useCallback(el => {
    createVisualization(data, layout, el, extraOptions, undefined, undefined, 'dhis');
  }, []);
  const onNewContainerMounted = useCallback(el => {
    createVisualization(data, layout, el, extraOptions, undefined, undefined, 'singleValue');
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: constainerStyle,
    ref: onOldContainerMounted
  }), /*#__PURE__*/React.createElement("div", {
    style: constainerStyle,
    ref: onNewContainerMounted
  }));
});