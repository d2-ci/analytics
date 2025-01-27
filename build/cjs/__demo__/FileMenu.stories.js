"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.WithReadonlyAo = exports.WithAo = exports.Simple = void 0;
var _appRuntime = require("@dhis2/app-runtime");
var _react = _interopRequireDefault(require("react"));
var _FileMenu = require("../components/FileMenu/FileMenu.js");
var _index = require("../components/Toolbar/index.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
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
  displayDescription: 'some _italic (10%)_ and some *bold (10%)*',
  displayName: 'ANC: 1-3 dropout rate Yearly',
  description: 'some _italic (10%)_ and some *bold (10%)*',
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
  translations: []
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
var _default = exports.default = {
  title: 'FileMenu'
};
const Simple = () => /*#__PURE__*/_react.default.createElement(_appRuntime.Provider, {
  config: configMock
}, /*#__PURE__*/_react.default.createElement(_index.HoverMenuBar, null, /*#__PURE__*/_react.default.createElement(_FileMenu.FileMenu, {
  currentUser: user,
  fileType: "visualization"
})));
exports.Simple = Simple;
const WithAo = () => /*#__PURE__*/_react.default.createElement(_appRuntime.Provider, {
  config: configMock
}, /*#__PURE__*/_react.default.createElement(_index.HoverMenuBar, null, /*#__PURE__*/_react.default.createElement(_FileMenu.FileMenu, {
  currentUser: user,
  fileType: "visualization",
  fileObject: visObject
})));
exports.WithAo = WithAo;
WithAo.story = {
  name: 'With AO'
};
const WithReadonlyAo = () => /*#__PURE__*/_react.default.createElement(_appRuntime.Provider, {
  config: configMock
}, /*#__PURE__*/_react.default.createElement(_index.HoverMenuBar, null, /*#__PURE__*/_react.default.createElement(_FileMenu.FileMenu, {
  currentUser: user,
  fileType: "visualization",
  fileObject: visReadonlyObject
})));
exports.WithReadonlyAo = WithReadonlyAo;
WithReadonlyAo.story = {
  name: 'With readonly AO'
};