import i18n from '@dhis2/d2-i18n';
export const FILE_TYPE_EVENT_REPORT = 'eventReport';
export const FILE_TYPE_VISUALIZATION = 'visualization';
export const FILE_TYPE_MAP = 'map';
export const FILE_TYPE_EVENT_VISUALIZATION = 'eventVisualization';
export const supportedFileTypes = [FILE_TYPE_EVENT_REPORT, FILE_TYPE_VISUALIZATION, FILE_TYPE_MAP, FILE_TYPE_EVENT_VISUALIZATION];
export const endpointFromFileType = fileType => "".concat(fileType, "s");
export const labelForFileType = fileType => {
  switch (fileType) {
    case FILE_TYPE_EVENT_REPORT:
      return i18n.t('event report');

    case FILE_TYPE_EVENT_VISUALIZATION:
      return i18n.t('line list');

    case FILE_TYPE_MAP:
      return i18n.t('map');

    case FILE_TYPE_VISUALIZATION:
      return i18n.t('visualization');

    default:
      return fileType;
  }
};
export const appPathFor = (fileType, id) => {
  switch (fileType) {
    case FILE_TYPE_VISUALIZATION:
      return "dhis-web-data-visualizer/#/".concat(id);

    case FILE_TYPE_MAP:
      return "dhis-web-maps/index.html?id=".concat(id);

    default:
      return "".concat(window.location.search).concat(window.location.hash);
  }
};