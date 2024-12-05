"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserMentionWrapper = void 0;
var _style = _interopRequireDefault(require("styled-jsx/style"));
var _d2I18n = _interopRequireDefault(require("@dhis2/d2-i18n"));
var _ui = require("@dhis2/ui");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _UserMentionWrapperStyle = require("./styles/UserMentionWrapper.style.js");
var _UserList = require("./UserList.js");
var _useUserSearchResults = require("./useUserSearchResults.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const AT_SYMBOL_WIDTH = 14;
const getVirtualPopperReference = ref => {
  const rects = ref.current.getClientRects();
  const lastRect = rects[rects.length - 1];
  const left = lastRect.left + lastRect.width - AT_SYMBOL_WIDTH;
  return {
    getBoundingClientRect: () => ({
      top: lastRect.top,
      right: lastRect.right,
      bottom: lastRect.bottom,
      left,
      width: AT_SYMBOL_WIDTH,
      height: lastRect.height,
      x: left
    })
  };
};
const UserMentionWrapper = _ref => {
  let {
    children,
    inputReference,
    onUserSelect
  } = _ref;
  const [listIsOpen, setListIsOpen] = (0, _react.useState)(false);
  const [captureText, setCaptureText] = (0, _react.useState)(false);
  const [capturedText, setCapturedText] = (0, _react.useState)('');
  const [cloneText, setCloneText] = (0, _react.useState)('');
  const cloneRef = (0, _react.useRef)(null);
  const [captureStartPosition, setCaptureStartPosition] = (0, _react.useState)(null);
  const [selectedUserIndex, setSelectedUserIndex] = (0, _react.useState)(0);
  const {
    users,
    pager,
    fetching,
    clear
  } = (0, _useUserSearchResults.useUserSearchResults)({
    searchText: capturedText
  });
  const reset = () => {
    setListIsOpen(false);
    setCaptureText(false);
    setCapturedText('');
    setCloneText('');
    setCaptureStartPosition(null);
    setSelectedUserIndex(0);
    clear();
  };

  // focus the input/textarea when the user list is closed by clicking above the input/textarea
  const onClick = () => inputReference.current.focus();

  // close the user list when clicking in the input/textarea or outside of it (input/textarea blur)
  const onUserListClose = () => reset();

  // event bubbles up from the input/textarea
  const onInput = _ref2 => {
    let {
      target
    } = _ref2;
    const {
      selectionEnd,
      value
    } = target;
    if (captureText) {
      clear();
      const spacePosition = value.indexOf(' ', captureStartPosition - 1);
      const filterValue = value.substring(captureStartPosition, spacePosition > 0 ? spacePosition : selectionEnd + 1).replace(/\n+/, '');
      if (filterValue !== capturedText) {
        setCapturedText(filterValue);
      } else if (filterValue.length === 0) {
        setCapturedText('');
        clear();
      }
    }
  };

  // event bubbles up from the wrapped input/textarea
  const onKeyDown = _ref3 => {
    let {
      key,
      target
    } = _ref3;
    const {
      selectionStart
    } = target;
    if (!captureText && key === '@') {
      setListIsOpen(true);
      setCaptureText(true);
      setCaptureStartPosition(selectionStart + 1);
      setCloneText(target.value.substring(0, selectionStart) + '@');
    } else if (captureText) {
      if (key === ' ' || key === 'Backspace' && selectionStart <= captureStartPosition) {
        reset();
      } else if (users.length) {
        switch (key) {
          case 'Enter':
            event.preventDefault();
            if (selectedUserIndex >= 0) {
              onSelect(users[selectedUserIndex]);
            }
            break;
          case 'ArrowDown':
            event.preventDefault();
            if (selectedUserIndex < users.length - 1) {
              setSelectedUserIndex(selectedUserIndex + 1);
            }
            break;
          case 'ArrowUp':
            event.preventDefault();
            if (selectedUserIndex > 0) {
              setSelectedUserIndex(selectedUserIndex - 1);
            }
            break;
          default:
          // other key strokes, typically the text typed
          // the onInput event handler set on the input element is triggering the user lookup
        }
      }
    }
  };
  const onSelect = user => {
    const originalValue = inputReference.current.value;
    const newValue = `${originalValue.slice(0, captureStartPosition - 1)}${originalValue.slice(captureStartPosition - 1).replace(/^@\w*/, `@${user.username} `)}`;
    reset();

    // typically for connected components we want the state to be updated too
    // but the logic belongs to the wrapped component, so we just invoke the supplied callback
    if (onUserSelect) {
      onUserSelect(newValue);
    }

    // need to refocus on the input/textarea
    inputReference.current.focus();

    // position the cursor at the end
    requestAnimationFrame(() => inputReference.current.setSelectionRange(-1, -1), 0);
  };
  const onUserClick = user => () => onSelect(user);
  return /*#__PURE__*/_react.default.createElement("div", {
    onKeyDown: onKeyDown,
    onInput: onInput,
    onClick: onClick,
    className: `jsx-${_UserMentionWrapperStyle.userMentionWrapperClasses.__hash}` + " " + "wrapper"
  }, children, /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_UserMentionWrapperStyle.userMentionWrapperClasses.__hash}` + " " + "clone"
  }, /*#__PURE__*/_react.default.createElement("p", {
    ref: cloneRef,
    className: `jsx-${_UserMentionWrapperStyle.userMentionWrapperClasses.__hash}`
  }, cloneText)), listIsOpen && /*#__PURE__*/_react.default.createElement(_ui.Layer, {
    onBackdropClick: onUserListClose
  }, /*#__PURE__*/_react.default.createElement(_ui.Popper, {
    reference: getVirtualPopperReference(cloneRef),
    placement: "top-start"
  }, /*#__PURE__*/_react.default.createElement(_ui.Card, null, /*#__PURE__*/_react.default.createElement("div", {
    className: `jsx-${_UserMentionWrapperStyle.userMentionWrapperClasses.__hash}` + " " + "container"
  }, /*#__PURE__*/_react.default.createElement(_ui.Menu, {
    dense: true
  }, /*#__PURE__*/_react.default.createElement(_ui.MenuSectionHeader, {
    className: _UserMentionWrapperStyle.resolvedHeaderStyle.className,
    dense: true,
    hideDivider: true,
    label: capturedText === '' ? _d2I18n.default.t('Search for a user') : _d2I18n.default.t('Searching for "{{- searchText}}"', {
      searchText: capturedText
    })
  }), fetching && /*#__PURE__*/_react.default.createElement(_ui.MenuItem, {
    label: /*#__PURE__*/_react.default.createElement(_ui.CenteredContent, null, /*#__PURE__*/_react.default.createElement(_ui.CircularLoader, {
      small: true
    }))
  }), !fetching && users.length > 0 && /*#__PURE__*/_react.default.createElement(_UserList.UserList, {
    users: users,
    selectedUserIndex: selectedUserIndex,
    onUserClick: onUserClick,
    pager: pager
  }), capturedText && !fetching && users.length === 0 && /*#__PURE__*/_react.default.createElement(_ui.MenuItem, {
    dense: true,
    disabled: true,
    label: _d2I18n.default.t('No results found')
  })))))), /*#__PURE__*/_react.default.createElement(_style.default, {
    id: _UserMentionWrapperStyle.userMentionWrapperClasses.__hash
  }, _UserMentionWrapperStyle.userMentionWrapperClasses), _UserMentionWrapperStyle.resolvedHeaderStyle.styles);
};
exports.UserMentionWrapper = UserMentionWrapper;
UserMentionWrapper.defaultProps = {
  onUserSelect: Function.prototype
};
UserMentionWrapper.propTypes = {
  inputReference: _propTypes.default.object.isRequired,
  onUserSelect: _propTypes.default.func.isRequired,
  children: _propTypes.default.node
};