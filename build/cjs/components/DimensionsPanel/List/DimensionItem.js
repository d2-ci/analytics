"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ui = require("@dhis2/ui");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _DynamicDimensionIcon = _interopRequireDefault(require("../../../assets/DynamicDimensionIcon.js"));

var _predefinedDimensions = require("../../../modules/predefinedDimensions.js");

var _OptionsButton = _interopRequireDefault(require("./OptionsButton.js"));

var _RecommendedIcon = _interopRequireDefault(require("./RecommendedIcon.js"));

var _DimensionItemStyle = require("./styles/DimensionItem.style.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
        style: _DimensionItemStyle.styles.fixedDimensionIcon
      }) : /*#__PURE__*/_react.default.createElement(_DynamicDimensionIcon.default, {
        style: _DimensionItemStyle.styles.dynamicDimensionIcon
      });
    });

    _defineProperty(this, "getDimensionType", () => {
      const {
        id,
        name,
        isDeactivated
      } = this.props;
      return /*#__PURE__*/_react.default.createElement("span", {
        "data-dimensionid": id,
        style: { ..._DimensionItemStyle.styles.text,
          ...(isDeactivated ? _DimensionItemStyle.styles.textDeactivated : {})
        }
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
      style,
      dataTest,
      ...rest
    } = this.props;
    const Icon = this.getDimensionIcon();
    const Label = this.getDimensionType();
    const itemStyle = isSelected && !isDeactivated ? { ..._DimensionItemStyle.styles.item,
      ..._DimensionItemStyle.styles.selected
    } : _DimensionItemStyle.styles.item;
    const optionsRef = /*#__PURE__*/(0, _react.createRef)();

    const onLabelClick = () => {
      if (!isDeactivated && !(0, _predefinedDimensions.getPredefinedDimensionProp)(id, _predefinedDimensions.DIMENSION_PROP_NO_ITEMS)) {
        onClick(id);
      }
    };

    return /*#__PURE__*/_react.default.createElement("li", _extends({
      onMouseOver: this.onMouseOver,
      onMouseLeave: this.onMouseExit,
      ref: innerRef,
      style: Object.assign({}, itemStyle, style, !isDeactivated && _DimensionItemStyle.styles.clickable),
      "data-test": dataTest,
      onClick: onLabelClick
    }, rest), /*#__PURE__*/_react.default.createElement("div", {
      className: "label",
      tabIndex: 0,
      style: _DimensionItemStyle.styles.label,
      "data-test": "".concat(dataTest, "-button-").concat(id)
    }, /*#__PURE__*/_react.default.createElement("div", {
      style: _DimensionItemStyle.styles.iconWrapper
    }, Icon), /*#__PURE__*/_react.default.createElement("div", {
      style: _DimensionItemStyle.styles.labelWrapper
    }, Label, /*#__PURE__*/_react.default.createElement(_RecommendedIcon.default, {
      isRecommended: isRecommended,
      dataTest: "".concat(dataTest, "-recommended-icon")
    })), isLocked && /*#__PURE__*/_react.default.createElement("div", {
      style: _DimensionItemStyle.styles.iconWrapper
    }, /*#__PURE__*/_react.default.createElement(_ui.IconLock16, null))), onOptionsClick ? /*#__PURE__*/_react.default.createElement("div", {
      style: _DimensionItemStyle.styles.optionsWrapper,
      ref: optionsRef,
      "data-test": "".concat(dataTest, "-menu-").concat(id)
    }, this.state.mouseOver && !isDeactivated && !isLocked ? /*#__PURE__*/_react.default.createElement(_OptionsButton.default, {
      style: _DimensionItemStyle.styles.optionsButton,
      onClick: this.onOptionsClick(id, optionsRef)
    }) : null) : null);
  }

}

DimensionItem.propTypes = {
  id: _propTypes.default.string.isRequired,
  isSelected: _propTypes.default.bool.isRequired,
  // XXX
  name: _propTypes.default.string.isRequired,
  dataTest: _propTypes.default.string,
  innerRef: _propTypes.default.func,
  isDeactivated: _propTypes.default.bool,
  isLocked: _propTypes.default.bool,
  isRecommended: _propTypes.default.bool,
  style: _propTypes.default.object,
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