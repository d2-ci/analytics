import { colors } from '@dhis2/ui';
import { svgNS, LETTER_SPACING_MAX_THRESHOLD, LETTER_SPACING_MIN_THRESHOLD, LETTER_SPACING_TEXT_SIZE_FACTOR, SUB_TEXT_SIZE_FACTOR, SUB_TEXT_SIZE_MAX_THRESHOLD, SUB_TEXT_SIZE_MIN_THRESHOLD } from './constants.js';
import { getIconPadding, getTextHeightForNumbers, getTextSize, getTextWidth } from './textSize.js';
const parser = new DOMParser();
export const generateValueSVG = _ref => {
  let {
    renderer,
    formattedValue,
    subText,
    valueColor,
    textColor,
    icon,
    noData,
    containerWidth,
    containerHeight,
    topMargin = 0
  } = _ref;
  const showIcon = icon && formattedValue !== noData.text;
  const group = renderer.g('value').css({
    transform: 'scale(0.5) translate(100%, 100%)'
  }).add();
  const textSize = getTextSize(formattedValue, containerWidth, containerHeight, showIcon);
  const textWidth = getTextWidth(formattedValue, `${textSize}px Roboto`);
  const iconSize = textSize;
  const subTextSize = textSize * SUB_TEXT_SIZE_FACTOR > SUB_TEXT_SIZE_MAX_THRESHOLD ? SUB_TEXT_SIZE_MAX_THRESHOLD : textSize * SUB_TEXT_SIZE_FACTOR < SUB_TEXT_SIZE_MIN_THRESHOLD ? SUB_TEXT_SIZE_MIN_THRESHOLD : textSize * SUB_TEXT_SIZE_FACTOR;
  let fillColor = colors.grey900;
  if (valueColor) {
    fillColor = valueColor;
  } else if (formattedValue === noData.text) {
    fillColor = colors.grey600;
  }
  const letterSpacing = Math.round(textSize * LETTER_SPACING_TEXT_SIZE_FACTOR);
  const formattedValueText = renderer.text(formattedValue).attr({
    'font-size': textSize,
    'font-weight': '300',
    'letter-spacing': letterSpacing < LETTER_SPACING_MIN_THRESHOLD ? LETTER_SPACING_MIN_THRESHOLD : letterSpacing > LETTER_SPACING_MAX_THRESHOLD ? LETTER_SPACING_MAX_THRESHOLD : letterSpacing,
    'text-anchor': 'middle',
    width: '100%',
    x: showIcon ? `${iconSize / 2 + getIconPadding(textSize / 2)}` : 0,
    y: topMargin / 2 + getTextHeightForNumbers(textSize) / 2,
    fill: fillColor,
    'data-test': 'visualization-primary-value'
  }).add(group);

  // show icon if configured in maintenance app
  if (showIcon) {
    const svgIconDocument = parser.parseFromString(icon, 'image/svg+xml');
    const iconElHeight = svgIconDocument.documentElement.getAttribute('height');
    const iconElWidth = svgIconDocument.documentElement.getAttribute('width');
    const x = (iconSize + getIconPadding(textSize) + textWidth) / 2 * -1;
    const y = (iconSize / 2 - topMargin / 2) * -1;
    const iconGroup = renderer.g('icon').attr('data-test', 'visualization-icon').css({
      color: 'green'
      // color: fillColor,
    });
    /* Force the group element to have the same dimensions as the original
     * SVG image by adding this rect. This ensures the icon has the intended
     * whitespace around it and makes scaling and translating easier. */
    renderer.rect(0, 0, iconElWidth, iconElHeight).add(iconGroup);
    Array.from(svgIconDocument.documentElement.children).forEach(node => iconGroup.element.appendChild(node));
    iconGroup.add();
    const formattedValueBox = formattedValueText.getBBox();
    const targetHeight = textSize / 2;
    const scaleFactor = targetHeight / iconElHeight;
    console.log(formattedValueBox);
    iconGroup.css({
      transform: `scale(${scaleFactor}) translate(16px, 104px)`
    });
  }
  if (subText) {
    renderer.text(subText).attr({
      'text-anchor': 'middle',
      'font-size': subTextSize,
      y: iconSize / 2 + topMargin / 2,
      dy: subTextSize * 1.7,
      fill: textColor
    }).add(group);
  }
};