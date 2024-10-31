"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _ui = require("@dhis2/ui");
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _DynamicDimensionIcon = _interopRequireDefault(require("../../../assets/DynamicDimensionIcon.js"));
var _predefinedDimensions = require("../../../modules/predefinedDimensions.js");
var _OptionsButton = _interopRequireDefault(require("./OptionsButton.js"));
var _RecommendedIcon = _interopRequireDefault(require("./RecommendedIcon.js"));
var _DimensionItemStyle = _interopRequireDefault(require("./styles/DimensionItem.style.js"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
class DimensionItem extends _react.Component {
  constructor() {
    super(...arguments);
    _defineProperty(this, "state", {
      mouseOver: false
    });
    _defineProperty(this, "onOptionsClick", (id, ref) => event => this.props.onOptionsClick(event, id, ref));
    _defineProperty(this, "onMouseOver", () => {
      this.setState({
        mouseOver: true
      });
    });
    _defineProperty(this, "onMouseExit", () => {
      this.setState({
        mouseOver: false
      });
    });
    _defineProperty(this, "getDimensionIcon", () => {
      const Icon = (0, _predefinedDimensions.getPredefinedDimensionProp)(this.props.id, 'icon');
      return Icon ? /*#__PURE__*/_react.default.createElement(Icon, {
        className: "fixedDimensionIcon"
      }) : /*#__PURE__*/_react.default.createElement(_DynamicDimensionIcon.default, {
        className: "dynamic-dimension-icon"
      });
    });
    _defineProperty(this, "getDimensionType", () => {
      const {
        id,
        name
      } = this.props;
      return /*#__PURE__*/_react.default.createElement("span", {
        "data-dimensionid": id
      }, name);
    });
  }
  render() {
    const {
      id,
      isDeactivated,
      isSelected,
      isRecommended,
      isLocked,
      onClick,
      onOptionsClick,
      innerRef,
      dataTest,
      className,
      ...rest
    } = this.props;
    const Icon = this.getDimensionIcon();
    const Label = this.getDimensionType();
    const optionsRef = /*#__PURE__*/(0, _react.createRef)();
    const LockIcon = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
      className: `jsx-${_DimensionItemStyle.default.__hash}` + " " + "lockWrapper"
    }, /*#__PURE__*/_react.default.createElement("svg", {
      width: "7",
      height: "9",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: `jsx-${_DimensionItemStyle.default.__hash}`
    }, /*#__PURE__*/_react.default.createElement("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3.5 1A1.5 1.5 0 0 0 2 2.5V3h3v-.5A1.5 1.5 0 0 0 3.5 1ZM1 2.5V3H0v6h7V3H6v-.5a2.5 2.5 0 0 0-5 0ZM1 8V4h5v4H1Zm3-1V5H3v2h1Z",
      fill: "none",
      className: `jsx-${_DimensionItemStyle.default.__hash}`
    }))), /*#__PURE__*/_react.default.createElement(_style.default, {
      id: _DimensionItemStyle.default.__hash
    }, _DimensionItemStyle.default));
    const onLabelClick = () => {
      if (!isDeactivated && !(0, _predefinedDimensions.getPredefinedDimensionProp)(id, _predefinedDimensions.DIMENSION_PROP_NO_ITEMS)) {
        onClick(id);
      }
    };
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_ui.CssVariables, {
      colors: true
    }), /*#__PURE__*/_react.default.createElement("li", _extends({
      onMouseOver: this.onMouseOver,
      onMouseLeave: this.onMouseExit,
      ref: innerRef,
      "data-test": dataTest,
      onClick: onLabelClick
    }, rest, {
      className: `jsx-${_DimensionItemStyle.default.__hash}` + " " + (rest && rest.className != null && rest.className || (0, _classnames.default)('item', {
        deactivated: isDeactivated,
        selected: isSelected && !isDeactivated
      }, className) || "")
    }), /*#__PURE__*/_react.default.createElement("div", {
      tabIndex: 0,
      "data-test": `${dataTest}-button-${id}`,
      className: `jsx-${_DimensionItemStyle.default.__hash}` + " " + "label"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: `jsx-${_DimensionItemStyle.default.__hash}` + " " + "iconWrapper"
    }, Icon), /*#__PURE__*/_react.default.createElement("div", {
      className: `jsx-${_DimensionItemStyle.default.__hash}` + " " + "labelWrapper"
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: `jsx-${_DimensionItemStyle.default.__hash}` + " " + "labelText"
    }, Label), /*#__PURE__*/_react.default.createElement(_RecommendedIcon.default, {
      isRecommended: isRecommended,
      dataTest: `${dataTest}-recommended-icon`
    }))), onOptionsClick && !isDeactivated && !isLocked ? /*#__PURE__*/_react.default.createElement("div", {
      ref: optionsRef,
      "data-test": `${dataTest}-menu-${id}`,
      className: `jsx-${_DimensionItemStyle.default.__hash}` + " " + "optionsWrapper"
    }, this.state.mouseOver ? /*#__PURE__*/_react.default.createElement(_OptionsButton.default, {
      onClick: this.onOptionsClick(id, optionsRef)
    }) : null) : null, isLocked && LockIcon), /*#__PURE__*/_react.default.createElement(_style.default, {
      id: _DimensionItemStyle.default.__hash
    }, _DimensionItemStyle.default));
  }
}
DimensionItem.propTypes = {
  id: _propTypes.default.string.isRequired,
  isSelected: _propTypes.default.bool.isRequired,
  // XXX
  name: _propTypes.default.string.isRequired,
  className: _propTypes.default.string,
  dataTest: _propTypes.default.string,
  innerRef: _propTypes.default.func,
  isDeactivated: _propTypes.default.bool,
  isLocked: _propTypes.default.bool,
  isRecommended: _propTypes.default.bool,
  onClick: _propTypes.default.func,
  onOptionsClick: _propTypes.default.func
};
DimensionItem.defaultProps = {
  isDeactivated: false,
  isRecommended: false,
  isSelected: false,
  isLocked: false,
  onClick: Function.prototype,
  innerRef: Function.prototype,
  style: {}
};
var _default = DimensionItem;
exports.default = _default;