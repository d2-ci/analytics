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
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
var _default = exports.default = DimensionItem;