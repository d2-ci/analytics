"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommentDeleteButton = void 0;

var _appRuntime = require("@dhis2/app-runtime");

var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));

var _ui = require("@dhis2/ui");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _index = require("../common/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const mutation = {
  resource: 'interpretations',
  id: _ref => {
    let {
      interpretationId,
      commentId
    } = _ref;
    return "".concat(interpretationId, "/comments/").concat(commentId);
  },
  type: 'delete'
};

const CommentDeleteButton = _ref2 => {
  let {
    commentId,
    interpretationId,
    onComplete
  } = _ref2;
  const [remove, {
    loading
  }] = (0, _appRuntime.useDataMutation)(mutation, {
    onComplete,
    variables: {
      commentId,
      interpretationId
    }
  });
  return /*#__PURE__*/_react.default.createElement(_index.MessageIconButton, {
    tooltipContent: _d2I18n.default.t('Delete'),
    iconComponent: _ui.IconDelete16,
    onClick: remove,
    disabled: loading
  });
};

exports.CommentDeleteButton = CommentDeleteButton;
CommentDeleteButton.propTypes = {
  commentId: _propTypes.default.string.isRequired,
  interpretationId: _propTypes.default.string.isRequired,
  onComplete: _propTypes.default.func.isRequired
};