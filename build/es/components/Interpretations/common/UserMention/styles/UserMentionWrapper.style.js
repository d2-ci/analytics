import _JSXStyle from "styled-jsx/style";
import React from "react";
import { colors, spacers } from '@dhis2/ui';

/*
 * Note that the clone and clone > pre styles have been chosen
 * to emulate the styles of the textarea. If we decide to make
 * changes there, they should be refelcted here too.
 */
export const userMentionWrapperClasses = [".wrapper.jsx-1289989717{position:relative;}", ".clone.jsx-1289989717{position:absolute;visibility:hidden;inset:0;box-sizing:border-box;padding:".concat(spacers.dp8, " ").concat(spacers.dp12, ";border:1px solid ").concat(colors.grey500, ";font-size:14px;line-height:").concat(spacers.dp16, ";z-index:1;pointer-events:none;}"), ".clone.jsx-1289989717>pre.jsx-1289989717{display:inline;word-wrap:break-word;overflow-wrap:break-word;font:inherit;margin:0;}", ".container.jsx-1289989717{background-color:".concat(colors.white, ";max-height:180px;overflow:auto;}")];
userMentionWrapperClasses.__hash = "1289989717";
export const resolvedHeaderStyle = {
  styles: /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "4275958396"
  }, [".jsx-4275958396{position:-webkit-sticky;position:sticky;top:0;}"]),
  className: "jsx-4275958396"
};