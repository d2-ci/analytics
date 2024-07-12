import _JSXStyle from "styled-jsx/style";
import React from "react";
import { colors, spacers } from '@dhis2/ui';
/*
 * Note that the clone and clone > pre styles have been chosen
 * to emulate the styles of the textarea. If we decide to make
 * changes there, they should be refelcted here too.
 */
export const userMentionWrapperClasses = [".wrapper.jsx-2386066169{width:100%;height:100%;position:relative;}", `.clone.jsx-2386066169{position:absolute;visibility:hidden;inset:0;box-sizing:border-box;padding:${spacers.dp8} 15px;border:1px solid ${colors.grey500};font-size:14px;line-height:${spacers.dp16};z-index:1;pointer-events:none;}`, ".clone.jsx-2386066169>p.jsx-2386066169{display:inline;word-wrap:break-word;overflow-wrap:break-word;font:inherit;margin:0;white-space:break-spaces;}", `.container.jsx-2386066169{background-color:${colors.white};max-height:180px;overflow:auto;}`];
userMentionWrapperClasses.__hash = "2386066169";
export const resolvedHeaderStyle = {
  styles: /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "4275958396"
  }, [".jsx-4275958396{position:-webkit-sticky;position:sticky;top:0;}"]),
  className: "jsx-4275958396"
};