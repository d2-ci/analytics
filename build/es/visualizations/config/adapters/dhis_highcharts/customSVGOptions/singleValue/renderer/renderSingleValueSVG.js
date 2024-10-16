import { addIconElement } from './addIconElement.js';
import { checkIfFitsWithinContainer } from './checkIfFitsWithinContainer.js';
import { getAvailableSpace } from './getAvailableSpace.js';
import { positionElements } from './positionElements.js';
import { DynamicStyles } from './styles.js';
export function renderSingleValueSVG() {
  var _this$userOptions;
  const {
    formattedValue,
    icon,
    subText,
    fontColor
  } = this.userOptions.customSVGOptions;
  const dynamicStyles = new DynamicStyles((_this$userOptions = this.userOptions) === null || _this$userOptions === void 0 ? void 0 : _this$userOptions.isPdfExport);
  const valueElement = this.renderer.text(formattedValue).css({
    color: fontColor,
    visibility: 'hidden'
  }).add();
  const subTextElement = subText ? this.renderer.text(subText).css({
    color: fontColor,
    visibility: 'hidden'
  }).add() : null;
  const iconElement = icon ? addIconElement.call(this, icon, fontColor) : null;
  let fitsWithinContainer = false;
  let styles = {};
  while (!fitsWithinContainer && dynamicStyles.hasNext()) {
    styles = dynamicStyles.next();
    valueElement.css(styles.value);
    subTextElement === null || subTextElement === void 0 ? void 0 : subTextElement.css(styles.subText);
    fitsWithinContainer = checkIfFitsWithinContainer(getAvailableSpace.call(this, styles.spacing.valueTop), valueElement, subTextElement, icon, subText, styles.spacing);
  }
  positionElements.call(this, valueElement, subTextElement, iconElement, styles.spacing);
  valueElement.css({
    visibility: 'visible'
  });
  iconElement === null || iconElement === void 0 ? void 0 : iconElement.css({
    visibility: 'visible'
  });
  subTextElement === null || subTextElement === void 0 ? void 0 : subTextElement.css({
    visibility: 'visible'
  });
}