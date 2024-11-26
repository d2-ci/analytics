import _JSXStyle from "styled-jsx/style";
import { useDataMutation, useDataEngine } from '@dhis2/app-runtime';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import { validateProgramIndicatorExpressionMutation } from '../../../api/expression.js';
import i18n from '../../../locales/index.js';
import { getCommonFields, sentenceCaseText, InfoTable } from './InfoTable.js';
import styles from './styles/InfoPopover.style.js';
const dataElementQuery = {
  dataElement: {
    resource: 'dataElements',
    id: _ref => {
      let {
        id
      } = _ref;
      return id;
    },
    params: _ref2 => {
      let {
        displayNameProp
      } = _ref2;
      return {
        fields: `${displayNameProp}~rename(displayName)`
      };
    }
  }
};
const programIndicatorQuery = {
  programIndicator: {
    resource: 'programIndicators',
    id: _ref3 => {
      let {
        id
      } = _ref3;
      return id;
    },
    params: _ref4 => {
      let {
        displayNameProp
      } = _ref4;
      return {
        fields: `${getCommonFields(displayNameProp)},aggregationType,analyticsPeriodBoundaries[analyticsPeriodBoundaryType,boundaryTarget,id,offsetPeriodType,offsetPeriods],analyticsType,decimals,expression,filter,legendSets[id,displayName],program[displayName,programStages[id,displayName]]`
      };
    }
  }
};
const trackedEntityAttributeQuery = {
  trackedEntityAttribute: {
    resource: 'trackedEntityAttributes',
    id: _ref5 => {
      let {
        id
      } = _ref5;
      return id;
    },
    params: _ref6 => {
      let {
        displayNameProp
      } = _ref6;
      return {
        fields: `${displayNameProp}~rename(displayName)`
      };
    }
  }
};
export const ProgramIndicatorInfo = _ref7 => {
  let {
    id,
    displayNameProp
  } = _ref7;
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const engine = useDataEngine();
  const [getHumanReadableExpression] = useDataMutation(validateProgramIndicatorExpressionMutation, {
    onError: setError
  });
  const fetchData = useCallback(async () => {
    const {
      programIndicator
    } = await engine.query(programIndicatorQuery, {
      variables: {
        id,
        displayNameProp
      },
      onError: setError
    });
    if (programIndicator.expression) {
      const result = await getHumanReadableExpression({
        expression: programIndicator.expression
      });
      if (result !== null && result !== void 0 && result.description) {
        programIndicator.humanReadableExpression = result.description;
      }
    }
    if (programIndicator.filter) {
      const result = await getHumanReadableExpression({
        expression: programIndicator.filter
      });
      if (result !== null && result !== void 0 && result.description) {
        programIndicator.humanReadableFilter = result.description;
      }
    }

    // this loop need to work with await (forEach does not)
    for (let i = 0; i < programIndicator.analyticsPeriodBoundaries.length; i++) {
      const {
        boundaryTarget
      } = programIndicator.analyticsPeriodBoundaries[i];
      let match;
      let formattedBoundaryTarget = boundaryTarget;
      if (['ENROLLMENT_DATE', 'EVENT_DATE', 'INCIDENT_DATE'].includes(boundaryTarget)) {
        formattedBoundaryTarget = sentenceCaseText(boundaryTarget);
      } else if (match = boundaryTarget.match(/^PS_EVENTDATE:(\w+)$/)) {
        console.log('PS_EVENTDATE', match[1]);
        formattedBoundaryTarget = i18n.t('Event in {{ stageName }}', {
          stageName: programIndicator.program.programStages.find(_ref8 => {
            let {
              id
            } = _ref8;
            return id === match[1];
          }).displayName
        });
      } else if (match = boundaryTarget.match(/^A{(\w+)}$/)) {
        console.log('A', match[1]);
        const {
          trackedEntityAttribute
        } = await engine.query(trackedEntityAttributeQuery, {
          variables: {
            id: match[1],
            displayNameProp
          },
          onError: setError
        });
        formattedBoundaryTarget = trackedEntityAttribute.displayName;
      } else if (match = boundaryTarget.match(/^#{(\w+)\.(\w+)}$/)) {
        console.log('id', match[1], match[2]);
        const {
          dataElement
        } = await engine.query(dataElementQuery, {
          variables: {
            id: match[2],
            displayNameProp
          },
          onError: setError
        });
        formattedBoundaryTarget = `${programIndicator.program.programStages.find(_ref9 => {
          let {
            id
          } = _ref9;
          return id === match[1];
        }).displayName}, ${dataElement.displayName}`;
      }
      console.log('formatted', formattedBoundaryTarget);
      programIndicator.analyticsPeriodBoundaries[i].boundaryTarget = formattedBoundaryTarget;
    }
    setData({
      programIndicator
    });
    setLoading(false);
  }, [displayNameProp, engine, id, getHumanReadableExpression]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(InfoTable, {
    data: data === null || data === void 0 ? void 0 : data.programIndicator,
    loading: loading,
    error: error
  }, /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('Program')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, data === null || data === void 0 ? void 0 : data.programIndicator.program.displayName)), /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('Analytics type')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, (data === null || data === void 0 ? void 0 : data.programIndicator.analyticsType) === 'ENROLLMENT' ? i18n.t('Enrollment') : i18n.t('Event'))), /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('Analytics period boundaries')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "content-wrap"
  }, /*#__PURE__*/React.createElement("ul", {
    className: `jsx-${styles.__hash}`
  }, data === null || data === void 0 ? void 0 : data.programIndicator.analyticsPeriodBoundaries.map(_ref10 => {
    let {
      analyticsPeriodBoundaryType,
      boundaryTarget,
      id,
      offsetPeriodType,
      offsetPeriods
    } = _ref10;
    return /*#__PURE__*/React.createElement("li", {
      key: id,
      className: `jsx-${styles.__hash}`
    }, /*#__PURE__*/React.createElement("span", {
      className: `jsx-${styles.__hash}`
    }, /*#__PURE__*/React.createElement("span", {
      className: `jsx-${styles.__hash}` + " " + "label"
    }, i18n.t('Type:'), "\xA0"), sentenceCaseText(analyticsPeriodBoundaryType)), /*#__PURE__*/React.createElement("br", {
      className: `jsx-${styles.__hash}`
    }), /*#__PURE__*/React.createElement("span", {
      className: `jsx-${styles.__hash}`
    }, /*#__PURE__*/React.createElement("span", {
      className: `jsx-${styles.__hash}` + " " + "label"
    }, i18n.t('Target:'), "\xA0"), boundaryTarget), Boolean(offsetPeriods) && Boolean(offsetPeriodType) && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("br", {
      className: `jsx-${styles.__hash}`
    }), /*#__PURE__*/React.createElement("span", {
      className: `jsx-${styles.__hash}`
    }, /*#__PURE__*/React.createElement("span", {
      className: `jsx-${styles.__hash}` + " " + "label"
    }, i18n.t('Offset:'), "\xA0"), i18n.t('{{ offsetPeriodType }} × {{ offsetPeriods }}', {
      offsetPeriodType,
      offsetPeriods
    }))));
  }))))), /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('Expression')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, data !== null && data !== void 0 && data.programIndicator.humanReadableExpression ? /*#__PURE__*/React.createElement("span", {
    className: `jsx-${styles.__hash}` + " " + "code"
  }, data.programIndicator.humanReadableExpression) : /*#__PURE__*/React.createElement("span", {
    className: `jsx-${styles.__hash}` + " " + "none"
  }, i18n.t('None')))), /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('Filter')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, data !== null && data !== void 0 && data.programIndicator.humanReadableFilter ? /*#__PURE__*/React.createElement("span", {
    className: `jsx-${styles.__hash}` + " " + "code"
  }, data.programIndicator.humanReadableFilter) : /*#__PURE__*/React.createElement("span", {
    className: `jsx-${styles.__hash}` + " " + "none"
  }, i18n.t('None')))), /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('Aggregation type')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, data === null || data === void 0 ? void 0 : data.programIndicator.aggregationType)), (data === null || data === void 0 ? void 0 : data.programIndicator) && 'decimals' in data.programIndicator && /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('Decimals in output')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, data.programIndicator.decimals)), Boolean(data === null || data === void 0 ? void 0 : data.programIndicator.legendSets.length) && /*#__PURE__*/React.createElement("tr", {
    className: `jsx-${styles.__hash}`
  }, /*#__PURE__*/React.createElement("th", {
    className: `jsx-${styles.__hash}`
  }, i18n.t('Legend set(s)')), /*#__PURE__*/React.createElement("td", {
    className: `jsx-${styles.__hash}`
  }, data.programIndicator.legendSets.length === 1 ? data.programIndicator.legendSets[0].displayName : /*#__PURE__*/React.createElement("div", {
    className: `jsx-${styles.__hash}` + " " + "content-wrap"
  }, /*#__PURE__*/React.createElement("ul", {
    className: `jsx-${styles.__hash}`
  }, data.programIndicator.legendSets.map(_ref11 => {
    let {
      id,
      displayName
    } = _ref11;
    return /*#__PURE__*/React.createElement("li", {
      key: id,
      className: `jsx-${styles.__hash}`
    }, displayName);
  })))))), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: styles.__hash
  }, styles));
};
ProgramIndicatorInfo.propTypes = {
  displayNameProp: PropTypes.string,
  id: PropTypes.string
};