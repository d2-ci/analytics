"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.svgNS = exports.TOP_MARGIN_FIXED = exports.TEXT_WIDTH_CONTAINER_WIDTH_FACTOR = exports.TEXT_SIZE_MAX_THRESHOLD = exports.TEXT_SIZE_CONTAINER_HEIGHT_FACTOR = exports.SUB_TEXT_SIZE_MIN_THRESHOLD = exports.SUB_TEXT_SIZE_MAX_THRESHOLD = exports.SUB_TEXT_SIZE_FACTOR = exports.LETTER_SPACING_TEXT_SIZE_FACTOR = exports.LETTER_SPACING_MIN_THRESHOLD = exports.LETTER_SPACING_MAX_THRESHOLD = exports.ICON_PADDING_FACTOR = exports.ACTUAL_TEXT_WIDTH_FACTOR = exports.ACTUAL_NUMBER_HEIGHT_FACTOR = void 0;
// TODO: remove this, sch thing it should not be needed
const svgNS = 'http://www.w3.org/2000/svg';
// multiply text width with this factor
// to get very close to actual text width
// nb: dependent on viewbox etc
exports.svgNS = svgNS;
const ACTUAL_TEXT_WIDTH_FACTOR = 0.9;

// multiply value text size with this factor
// to get very close to the actual number height
// as numbers don't go below the baseline like e.g. "j" and "g"
exports.ACTUAL_TEXT_WIDTH_FACTOR = ACTUAL_TEXT_WIDTH_FACTOR;
const ACTUAL_NUMBER_HEIGHT_FACTOR = 0.67;

// do not allow text width to exceed this threshold
// a threshold >1 does not really make sense but text width vs viewbox is complicated
exports.ACTUAL_NUMBER_HEIGHT_FACTOR = ACTUAL_NUMBER_HEIGHT_FACTOR;
const TEXT_WIDTH_CONTAINER_WIDTH_FACTOR = 1.3;

// do not allow text size to exceed this
exports.TEXT_WIDTH_CONTAINER_WIDTH_FACTOR = TEXT_WIDTH_CONTAINER_WIDTH_FACTOR;
const TEXT_SIZE_CONTAINER_HEIGHT_FACTOR = 0.6;
exports.TEXT_SIZE_CONTAINER_HEIGHT_FACTOR = TEXT_SIZE_CONTAINER_HEIGHT_FACTOR;
const TEXT_SIZE_MAX_THRESHOLD = 200;

// multiply text size with this factor
// to get an appropriate letter spacing
exports.TEXT_SIZE_MAX_THRESHOLD = TEXT_SIZE_MAX_THRESHOLD;
const LETTER_SPACING_TEXT_SIZE_FACTOR = 1 / 35 * -1;
exports.LETTER_SPACING_TEXT_SIZE_FACTOR = LETTER_SPACING_TEXT_SIZE_FACTOR;
const LETTER_SPACING_MIN_THRESHOLD = -6;
exports.LETTER_SPACING_MIN_THRESHOLD = LETTER_SPACING_MIN_THRESHOLD;
const LETTER_SPACING_MAX_THRESHOLD = -1;

// fixed top margin above title/subtitle
exports.LETTER_SPACING_MAX_THRESHOLD = LETTER_SPACING_MAX_THRESHOLD;
const TOP_MARGIN_FIXED = 16;

// multiply text size with this factor
// to get an appropriate sub text size
exports.TOP_MARGIN_FIXED = TOP_MARGIN_FIXED;
const SUB_TEXT_SIZE_FACTOR = 0.5;
exports.SUB_TEXT_SIZE_FACTOR = SUB_TEXT_SIZE_FACTOR;
const SUB_TEXT_SIZE_MIN_THRESHOLD = 26;
exports.SUB_TEXT_SIZE_MIN_THRESHOLD = SUB_TEXT_SIZE_MIN_THRESHOLD;
const SUB_TEXT_SIZE_MAX_THRESHOLD = 40;

// multiply text size with this factor
// to get an appropriate icon padding
exports.SUB_TEXT_SIZE_MAX_THRESHOLD = SUB_TEXT_SIZE_MAX_THRESHOLD;
const ICON_PADDING_FACTOR = 0.3;
exports.ICON_PADDING_FACTOR = ICON_PADDING_FACTOR;