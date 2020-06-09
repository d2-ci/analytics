"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Select = _interopRequireDefault(require("@material-ui/core/Select"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _InputLabel = _interopRequireDefault(require("@material-ui/core/InputLabel"));

var _Detail = require("./Detail");

var _dataTypes = require("../../modules/dataTypes");

var _Groups = require("./styles/Groups.style");

var Groups = function Groups(props) {
  var handleChange = function handleChange(event) {
    props.onGroupChange(event.target.value);
  };

  var renderDropDownItems = function renderDropDownItems() {
    var optionItems = props.groups;

    if (_dataTypes.dataTypes[props.dataType].defaultGroup) {
      var _dataTypes$props$data = _dataTypes.dataTypes[props.dataType].defaultGroup,
          id = _dataTypes$props$data.id,
          name = _dataTypes$props$data.name;
      var defaultGroup = {
        id: id,
        name: name()
      };
      optionItems = [defaultGroup].concat((0, _toConsumableArray2.default)(optionItems));
    }

    return optionItems.map(function (item) {
      return /*#__PURE__*/_react.default.createElement(_MenuItem.default, {
        key: item.id,
        value: item.id
      }, item.name);
    });
  };

  var groupDetail = _dataTypes.dataTypes[props.dataType].groupDetail;
  var havePlaceholder = Boolean(!props.groupId && _dataTypes.dataTypes[props.dataType].placeholder);
  return /*#__PURE__*/_react.default.createElement("div", {
    style: _Groups.styles.container
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: _Groups.styles.groupContainer
  }, /*#__PURE__*/_react.default.createElement(_InputLabel.default, {
    style: _Groups.styles.titleText
  }, _dataTypes.dataTypes[props.dataType].groupLabel()), /*#__PURE__*/_react.default.createElement(_Select.default, {
    value: props.groupId,
    onChange: handleChange,
    renderValue: havePlaceholder ? _dataTypes.dataTypes[props.dataType].placeholder : null,
    displayEmpty: havePlaceholder,
    disableUnderline: true,
    SelectDisplayProps: havePlaceholder ? {
      style: _Groups.styles.placeholder
    } : {
      style: _Groups.styles.dropDown
    }
  }, renderDropDownItems())), groupDetail && /*#__PURE__*/_react.default.createElement(_Detail.Detail, {
    value: props.detailValue,
    onChange: props.onDetailChange
  }));
};

Groups.propTypes = {
  dataType: _propTypes.default.string.isRequired,
  detailValue: _propTypes.default.string.isRequired,
  groupId: _propTypes.default.string.isRequired,
  groups: _propTypes.default.array.isRequired,
  onDetailChange: _propTypes.default.func.isRequired,
  onGroupChange: _propTypes.default.func.isRequired
};
var _default = Groups;
exports.default = _default;