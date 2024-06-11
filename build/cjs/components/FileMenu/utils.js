"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.supportedFileTypes = exports.preparePayloadForSaveAs = exports.labelForFileType = exports.endpointFromFileType = exports.appPathFor = exports.FILE_TYPE_VISUALIZATION = exports.FILE_TYPE_MAP = exports.FILE_TYPE_EVENT_VISUALIZATION = exports.FILE_TYPE_EVENT_REPORT = void 0;
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const FILE_TYPE_EVENT_REPORT = 'eventReport';
exports.FILE_TYPE_EVENT_REPORT = FILE_TYPE_EVENT_REPORT;
const FILE_TYPE_VISUALIZATION = 'visualization';
exports.FILE_TYPE_VISUALIZATION = FILE_TYPE_VISUALIZATION;
const FILE_TYPE_MAP = 'map';
exports.FILE_TYPE_MAP = FILE_TYPE_MAP;
const FILE_TYPE_EVENT_VISUALIZATION = 'eventVisualization';
exports.FILE_TYPE_EVENT_VISUALIZATION = FILE_TYPE_EVENT_VISUALIZATION;
const supportedFileTypes = [FILE_TYPE_EVENT_REPORT, FILE_TYPE_VISUALIZATION, FILE_TYPE_MAP, FILE_TYPE_EVENT_VISUALIZATION];
exports.supportedFileTypes = supportedFileTypes;
const endpointFromFileType = fileType => `${fileType}s`;
exports.endpointFromFileType = endpointFromFileType;
const labelForFileType = fileType => {
  switch (fileType) {
    case FILE_TYPE_EVENT_REPORT:
      return _d2I18n.default.t('event report');
    case FILE_TYPE_EVENT_VISUALIZATION:
      return _d2I18n.default.t('line list');
    case FILE_TYPE_MAP:
      return _d2I18n.default.t('map');
    case FILE_TYPE_VISUALIZATION:
      return _d2I18n.default.t('visualization');
    default:
      return fileType;
  }
};
exports.labelForFileType = labelForFileType;
const appPathFor = (fileType, id) => {
  switch (fileType) {
    case FILE_TYPE_VISUALIZATION:
      return `dhis-web-data-visualizer/#/${id}`;
    case FILE_TYPE_MAP:
      return `dhis-web-maps/index.html?id=${id}`;
    case FILE_TYPE_EVENT_VISUALIZATION:
      return `api/apps/line-listing/#/${id}`;
    default:
      return `${window.location.search}${window.location.hash}`;
  }
};
exports.appPathFor = appPathFor;
const preparePayloadForSaveAs = _ref => {
  let {
    ...visualization
  } = _ref;
  delete visualization.id;
  delete visualization.created;
  delete visualization.createdBy;
  delete visualization.user;
  return visualization;
};
exports.preparePayloadForSaveAs = preparePayloadForSaveAs;