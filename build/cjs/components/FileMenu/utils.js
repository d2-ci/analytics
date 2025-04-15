"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.supportedFileTypes = exports.preparePayloadForSaveAs = exports.preparePayloadForSave = exports.labelForFileType = exports.endpointFromFileType = exports.appPathFor = exports.FILE_TYPE_VISUALIZATION = exports.FILE_TYPE_MAP = exports.FILE_TYPE_EVENT_VISUALIZATION = exports.FILE_TYPE_EVENT_REPORT = void 0;
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
var _visTypes = require("../../modules/visTypes.js");
var _utils = require("../AboutAOUnit/utils.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const FILE_TYPE_EVENT_REPORT = exports.FILE_TYPE_EVENT_REPORT = 'eventReport';
const FILE_TYPE_VISUALIZATION = exports.FILE_TYPE_VISUALIZATION = 'visualization';
const FILE_TYPE_MAP = exports.FILE_TYPE_MAP = 'map';
const FILE_TYPE_EVENT_VISUALIZATION = exports.FILE_TYPE_EVENT_VISUALIZATION = 'eventVisualization';
const supportedFileTypes = exports.supportedFileTypes = [FILE_TYPE_EVENT_REPORT, FILE_TYPE_VISUALIZATION, FILE_TYPE_MAP, FILE_TYPE_EVENT_VISUALIZATION];
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
const appPathFor = (fileType, id, apiVersion) => {
  switch (fileType) {
    case FILE_TYPE_VISUALIZATION:
      return `dhis-web-data-visualizer/#/${id}`;
    case FILE_TYPE_MAP:
      return `dhis-web-maps/#/${id}`;
    case FILE_TYPE_EVENT_VISUALIZATION:
      // VERSION-TOGGLE: remove when 42 is the lowest supported version
      return apiVersion >= 42 ? `dhis-web-line-listing/#/${id}` : `api/apps/line-listing/#/${id}`;
    default:
      return `${window.location.search}${window.location.hash}`;
  }
};
exports.appPathFor = appPathFor;
const preparePayloadForSaveAs = _ref => {
  let {
    visualization,
    name,
    description
  } = _ref;
  delete visualization.id;
  delete visualization.created;
  delete visualization.createdBy;
  delete visualization.user;
  visualization.name = name || visualization.name || _d2I18n.default.t('Untitled {{visualizationType}} visualization, {{date}}', {
    visualizationType: (0, _visTypes.getDisplayNameByVisType)(visualization.type),
    date: new Date().toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: '2-digit'
    })
  });
  visualization.description = description !== undefined ? description : visualization.description;
  return visualization;
};
exports.preparePayloadForSaveAs = preparePayloadForSaveAs;
const getSubscriberQuery = type => ({
  ao: {
    resource: (0, _visTypes.getApiEndpointByVisType)(type),
    id: _ref2 => {
      let {
        id
      } = _ref2;
      return id;
    },
    params: {
      fields: 'subscribed,subscribers'
    }
  }
});
const apiFetchAOSubscribers = (dataEngine, id, type) => {
  return dataEngine.query(getSubscriberQuery(type), {
    variables: {
      id
    }
  });
};
const preparePayloadForSave = async _ref3 => {
  let {
    visualization,
    name,
    description,
    engine
  } = _ref3;
  console.log('jj AA');
  const {
    visualization: vis
  } = await apiFetchAOSubscribers(engine, visualization.id, visualization.type);
  console.log('jj BB', vis);
  visualization.subscribers = vis.subscribers;
  visualization.subscribed = vis.subscribed;
  console.log('jj CC');
  visualization.name = name || visualization.name || _d2I18n.default.t('Untitled {{visualizationType}}, {{date}}', {
    visualizationType: (0, _visTypes.getDisplayNameByVisType)(visualization.type),
    date: new Date().toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: '2-digit'
    })
  });
  console.log('jj DD');
  visualization.description = description !== undefined ? description : visualization.description;
  console.log('jj EE');
  return visualization;
};
exports.preparePayloadForSave = preparePayloadForSave;