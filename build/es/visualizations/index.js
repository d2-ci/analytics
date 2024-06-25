import isArray from 'd2-utilizr/lib/isArray';
import Config from './config/index.js';
import Store from './store/index.js';

const defaultError = error => {
  throw new Error(error);
};

const defaultWarning = warning => {
  console.log(warning);
};

function createVisualization(data, layout, el, extraOptions) {
  let error = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultError;
  let warning = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultWarning;
  let outputFormat = arguments.length > 6 ? arguments[6] : undefined;

  const _data = isArray(data) ? data : [data];

  const store = new Store({
    data: _data,
    error,
    warning,
    outputFormat
  });
  const config = new Config({
    store,
    layout,
    el,
    outputFormat,
    extraOptions,
    error,
    warning
  });
  return {
    store,
    config,
    visualization: config.createVisualization()
  };
}

export { Store, Config, createVisualization };
export default createVisualization;