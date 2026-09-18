import { colors, spacers } from '@dhis2/ui';
// Fix for vertical flex scrolling in Firefox/Safari:
// Wrap the list in a div with position:relative (and flex:1 instead of on the list)
// On the list, set position:absolute, width:100%, height:100%
const _defaultExport = [".container.jsx-1758681086{position:relative;-webkit-flex:1 1 0%;-ms-flex:1 1 0%;flex:1 1 0%;min-height:30vh;}", `.wrapper.jsx-1758681086{position:absolute;width:100%;height:100%;overflow:auto;margin-top:0;padding:0 ${spacers.dp8} 0 0;}`, ".list.jsx-1758681086{margin:0;padding:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;gap:4px;}", `.header.jsx-1758681086{text-transform:uppercase;font-size:11px;color:${colors.grey600};margin:0 0 ${spacers.dp8} 0;-webkit-letter-spacing:0.3px;-moz-letter-spacing:0.3px;-ms-letter-spacing:0.3px;letter-spacing:0.3px;font-weight:400;}`, `.section.jsx-1758681086:not(:last-child){margin-bottom:${spacers.dp24};}`];
_defaultExport.__hash = "1758681086";
export default _defaultExport;