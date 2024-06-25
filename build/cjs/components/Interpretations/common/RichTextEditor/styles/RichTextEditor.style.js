"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tooltipAnchorClasses = exports.toolbarClasses = exports.mainClasses = exports.emojisPopoverClasses = void 0;

var _ui = require("@dhis2/ui");

const mainClasses = [".container.jsx-2278350860{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;}", ".preview.jsx-2278350860{font-size:14px;line-height:19px;color:".concat(_ui.colors.grey900, ";}"), ".textarea.jsx-2278350860{width:100%;box-sizing:border-box;padding:".concat(_ui.spacers.dp8, " ").concat(_ui.spacers.dp12, ";color:").concat(_ui.colors.grey900, ";background-color:").concat(_ui.colors.white, ";border:1px solid ").concat(_ui.colors.grey500, ";border-radius:3px;box-shadow:inset 0 0 0 1px rgba(102,113,123,0.15), inset 0 1px 2px 0 rgba(102,113,123,0.1);outline:0;font-size:14px;line-height:").concat(_ui.spacers.dp16, ";-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;}"), ".textarea.jsx-2278350860:focus{outline:none;box-shadow:0 0 0 3px ".concat(_ui.theme.focus, ";}"), ".textarea.jsx-2278350860:disabled{background-color:".concat(_ui.colors.grey100, ";border-color:").concat(_ui.colors.grey500, ";color:").concat(_ui.theme.disabled, ";cursor:not-allowed;}")];
exports.mainClasses = mainClasses;
mainClasses.__hash = "2278350860";
const toolbarClasses = [".toolbar.jsx-2267496677{background:".concat(_ui.colors.grey050, ";border-radius:3px;border:1px solid ").concat(_ui.colors.grey300, ";margin-bottom:").concat(_ui.spacers.dp4, ";}"), ".actionsWrapper.jsx-2267496677{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:".concat(_ui.spacers.dp4, ";-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:").concat(_ui.spacers.dp4, ";}"), ".mainActions.jsx-2267496677{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;gap:".concat(_ui.spacers.dp4, ";margin-top:").concat(_ui.spacers.dp2, ";}"), ".sideActions.jsx-2267496677{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;}", ".previewWrapper.jsx-2267496677{margin:".concat(_ui.spacers.dp4, ";text-align:right;}")];
exports.toolbarClasses = toolbarClasses;
toolbarClasses.__hash = "2267496677";
const tooltipAnchorClasses = [".tooltip.jsx-2182400256{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}"];
exports.tooltipAnchorClasses = tooltipAnchorClasses;
tooltipAnchorClasses.__hash = "2182400256";
const emojisPopoverClasses = [".emojisList.jsx-2802175370{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;gap:".concat(_ui.spacers.dp8, ";list-style-type:none;margin:0 ").concat(_ui.spacers.dp4, " 0 ").concat(_ui.spacers.dp8, ";padding:0;}"), ".emojisList.jsx-2802175370 li.jsx-2802175370{cursor:pointer;}"];
exports.emojisPopoverClasses = emojisPopoverClasses;
emojisPopoverClasses.__hash = "2802175370";