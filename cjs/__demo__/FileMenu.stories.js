"use strict";

var _appRuntime = require("@dhis2/app-runtime");
var _react = require("@storybook/react");
var _react2 = _interopRequireDefault(require("react"));
var _FileMenu = require("../components/FileMenu/FileMenu.js");
var _index = require("../components/Toolbar/index.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const configMock = {
  baseUrl: 'http://localhost:8080',
  apiVersion: 33
};
const user = {
  displayName: 'John Traore',
  id: 'xE7jOejl9FI',
  username: 'admin'
};
const visObject = {
  lastUpdated: '2020-10-12T09:44:46.194',
  href: 'http://localhost:8080/api/32/visualizations/a8LrqsBQlHP',
  id: 'a8LrqsBQlHP',
  created: '2012-11-05T09:17:23.388',
  name: 'ANC: 1-3 dropout rate Yearly',
  publicAccess: '--------',
  displayDescription: 'some _italic (10%)_ and some *bold (10%)*',
  displayName: 'ANC: 1-3 dropout rate Yearly',
  description: 'some _italic (10%)_ and some *bold (10%)*',
  externalAccess: false,
  access: {
    read: true,
    update: true,
    externalize: true,
    delete: true,
    write: true,
    manage: true
  },
  lastUpdatedBy: user,
  user,
  translations: [],
  userAccesses: [{
    access: 'rw------',
    displayName: 'John Barnes',
    id: 'DXyJmlo9rge',
    userUid: 'DXyJmlo9rge'
  }]
};
const visReadonlyObject = {
  ...visObject,
  access: {
    read: true,
    update: false,
    externalize: false,
    delete: false,
    write: false,
    manage: false
  }
};
(0, _react.storiesOf)('FileMenu', module).add('Simple', () => /*#__PURE__*/_react2.default.createElement(_appRuntime.Provider, {
  config: configMock
}, /*#__PURE__*/_react2.default.createElement(_index.HoverMenuBar, null, /*#__PURE__*/_react2.default.createElement(_FileMenu.FileMenu, {
  currentUser: user,
  fileType: "visualization"
})))).add('With AO', () => /*#__PURE__*/_react2.default.createElement(_appRuntime.Provider, {
  config: configMock
}, /*#__PURE__*/_react2.default.createElement(_index.HoverMenuBar, null, /*#__PURE__*/_react2.default.createElement(_FileMenu.FileMenu, {
  currentUser: user,
  fileType: "visualization",
  fileObject: visObject
})))).add('With readonly AO', () => /*#__PURE__*/_react2.default.createElement(_appRuntime.Provider, {
  config: configMock
}, /*#__PURE__*/_react2.default.createElement(_index.HoverMenuBar, null, /*#__PURE__*/_react2.default.createElement(_FileMenu.FileMenu, {
  currentUser: user,
  fileType: "visualization",
  fileObject: visReadonlyObject
}))));