var _baseExtraOptions$ico;
import React, { useState, useMemo, useRef, useEffect } from 'react';
import fixtures from '../__fixtures__/SingleValue/index.js';
import { createVisualization } from '../index.js';
const ID = 'FnYCr2EAzWS';
const {
  baseDataObj,
  layout,
  baseExtraOptions
} = fixtures[ID];
const icon = (_baseExtraOptions$ico = baseExtraOptions.icon) !== null && _baseExtraOptions$ico !== void 0 ? _baseExtraOptions$ico : '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="blue" /></svg>';
const constainerStyleBase = {
  width: 800,
  height: 800,
  border: '1px solid magenta',
  marginBottom: 14
};
const innerContainerStyle = {
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  height: '100%'
};
const numberIndicatorType = {
  name: 'Plain',
  number: true
};
const subtextIndicatorType = {
  name: 'Custom',
  displayName: 'Custom subtext',
  number: true
};
const percentIndicatorType = {
  name: 'Per cent',
  displayName: 'Per cent',
  factor: 100,
  number: false
};
const indicatorTypes = ['plain', 'percent', 'subtext'];
export default {
  title: 'SingleValue'
};
export const Default = () => {
  const newChartRef = useRef(null);
  const newContainerRef = useRef(null);
  const [dashboard, setDashboard] = useState(false);
  const [showIcon, setShowIcon] = useState(true);
  const [indicatorType, setIndicatorType] = useState('plain');
  const [width, setWidth] = useState(constainerStyleBase.width);
  const [height, setHeight] = useState(constainerStyleBase.height);
  const containerStyle = useMemo(() => ({
    ...constainerStyleBase,
    width,
    height
  }), [width, height]);
  useEffect(() => {
    if (newContainerRef.current) {
      requestAnimationFrame(() => {
        const extraOptions = {
          ...baseExtraOptions,
          dashboard,
          icon: showIcon ? icon : undefined
        };
        const dataObj = {
          ...baseDataObj
        };
        if (indicatorType === 'plain') {
          dataObj.metaData.items[ID].indicatorType = numberIndicatorType;
        }
        if (indicatorType === 'percent') {
          dataObj.metaData.items[ID].indicatorType = percentIndicatorType;
        }
        if (indicatorType === 'subtext') {
          dataObj.metaData.items[ID].indicatorType = subtextIndicatorType;
        }
        const newVisualization = createVisualization([dataObj], layout, newContainerRef.current, extraOptions, undefined, undefined, 'highcharts');
        newChartRef.current = newVisualization.visualization;
      });
    }
  }, [containerStyle, dashboard, showIcon, indicatorType]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginBottom: 20,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "width"
  }, "Width"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    name: "width",
    id: "width",
    min: "1",
    step: "5",
    onChange: event => setWidth(parseInt(event.target.value)),
    value: width.toString()
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "height"
  }, "Height"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    name: "height",
    id: "height",
    min: "1",
    step: "5",
    onChange: event => setHeight(parseInt(event.target.value)),
    value: height.toString()
  })), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
    checked: dashboard,
    onChange: () => setDashboard(!dashboard),
    type: "checkbox"
  }), "\xA0Dashboard view"), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
    checked: showIcon,
    onChange: () => setShowIcon(!showIcon),
    type: "checkbox"
  }), "\xA0Show icon"), /*#__PURE__*/React.createElement("label", null, "Indicator type\xA0", /*#__PURE__*/React.createElement("select", {
    onChange: event => setIndicatorType(event.target.value)
  }, indicatorTypes.map((type, index) => {
    return /*#__PURE__*/React.createElement("option", {
      key: index
    }, type);
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: containerStyle
  }, /*#__PURE__*/React.createElement("div", {
    ref: newContainerRef,
    style: innerContainerStyle
  }))));
};
Default.story = {
  name: 'default'
};