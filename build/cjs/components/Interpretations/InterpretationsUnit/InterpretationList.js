"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InterpretationList = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _appRuntime = require("@dhis2/app-runtime");

var _ui = require("@dhis2/ui");

var _moment = _interopRequireDefault(require("moment"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _index = require("../common/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const sortByCreatedDateDesc = (a, b) => {
  const dateA = a.created;
  const dateB = b.created;

  if (dateA < dateB) {
    return 1;
  }

  if (dateA > dateB) {
    return -1;
  }

  return 0;
};

const InterpretationList = _ref => {
  let {
    currentUser,
    interpretations,
    onInterpretationClick,
    onLikeToggled,
    onReplyIconClick,
    refresh,
    disabled
  } = _ref;
  const {
    fromServerDate
  } = (0, _appRuntime.useTimeZoneConversion)();
  const interpretationsByDate = interpretations.reduce((groupedInterpretations, interpretation) => {
    const date = interpretation.created.split('T')[0];

    if (date in groupedInterpretations) {
      groupedInterpretations[date].push(interpretation);
    } else {
      groupedInterpretations[date] = [interpretation];
    }

    return groupedInterpretations;
  }, {});
  return /*#__PURE__*/_react.default.createElement("ol", {
    "data-test": "interpretations-list",
    className: _style.default.dynamic([["4058400613", [_ui.spacers.dp8, _ui.spacers.dp8, _ui.spacers.dp16, _ui.colors.grey800, _ui.spacers.dp12, _ui.spacers.dp12, _ui.spacers.dp32, _ui.spacers.dp4]]]) + " " + "interpretation-groups"
  }, Object.keys(interpretationsByDate).sort().reverse().map(date => /*#__PURE__*/_react.default.createElement("li", {
    key: date,
    className: _style.default.dynamic([["4058400613", [_ui.spacers.dp8, _ui.spacers.dp8, _ui.spacers.dp16, _ui.colors.grey800, _ui.spacers.dp12, _ui.spacers.dp12, _ui.spacers.dp32, _ui.spacers.dp4]]])
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _style.default.dynamic([["4058400613", [_ui.spacers.dp8, _ui.spacers.dp8, _ui.spacers.dp16, _ui.colors.grey800, _ui.spacers.dp12, _ui.spacers.dp12, _ui.spacers.dp32, _ui.spacers.dp4]]]) + " " + "date-section"
  }, /*#__PURE__*/_react.default.createElement(_ui.IconCalendar24, {
    color: _ui.colors.grey600
  }), /*#__PURE__*/_react.default.createElement("time", {
    dateTime: date,
    className: _style.default.dynamic([["4058400613", [_ui.spacers.dp8, _ui.spacers.dp8, _ui.spacers.dp16, _ui.colors.grey800, _ui.spacers.dp12, _ui.spacers.dp12, _ui.spacers.dp32, _ui.spacers.dp4]]]) + " " + "date-header"
  }, (0, _moment.default)(fromServerDate(date)).format('ll'))), /*#__PURE__*/_react.default.createElement("ol", {
    className: _style.default.dynamic([["4058400613", [_ui.spacers.dp8, _ui.spacers.dp8, _ui.spacers.dp16, _ui.colors.grey800, _ui.spacers.dp12, _ui.spacers.dp12, _ui.spacers.dp32, _ui.spacers.dp4]]]) + " " + "interpretation-list"
  }, interpretationsByDate[date].sort(sortByCreatedDateDesc).map(interpretation => /*#__PURE__*/_react.default.createElement(_index.Interpretation, {
    key: interpretation.id,
    interpretation: interpretation,
    currentUser: currentUser,
    onClick: onInterpretationClick,
    onLikeToggled: onLikeToggled,
    onReplyIconClick: onReplyIconClick,
    onDeleted: refresh,
    onUpdated: refresh,
    disabled: disabled
  }))))), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: "4058400613",
    dynamic: [_ui.spacers.dp8, _ui.spacers.dp8, _ui.spacers.dp16, _ui.colors.grey800, _ui.spacers.dp12, _ui.spacers.dp12, _ui.spacers.dp32, _ui.spacers.dp4]
  }, [".date-section.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;gap:".concat(_ui.spacers.dp8, ";-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:").concat(_ui.spacers.dp8, ";}"), ".date-header.__jsx-style-dynamic-selector{font-size:14px;font-weight:500;line-height:".concat(_ui.spacers.dp16, ";color:").concat(_ui.colors.grey800, ";}"), ".interpretation-groups.__jsx-style-dynamic-selector{margin:0;padding:0;padding-top:".concat(_ui.spacers.dp12, ";list-style:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:").concat(_ui.spacers.dp12, ";}"), ".interpretation-list.__jsx-style-dynamic-selector{margin:0;padding-left:".concat(_ui.spacers.dp32, ";list-style:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:").concat(_ui.spacers.dp4, ";}")]));
};

exports.InterpretationList = InterpretationList;
InterpretationList.propTypes = {
  currentUser: _propTypes.default.object.isRequired,
  interpretations: _propTypes.default.array.isRequired,
  refresh: _propTypes.default.func.isRequired,
  onInterpretationClick: _propTypes.default.func.isRequired,
  onLikeToggled: _propTypes.default.func.isRequired,
  onReplyIconClick: _propTypes.default.func.isRequired,
  disabled: _propTypes.default.bool
};