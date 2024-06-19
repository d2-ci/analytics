import _JSXStyle from "styled-jsx/style";
import i18n from '@dhis2/d2-i18n';
import { CenteredContent, CircularLoader, Layer, Menu, MenuSectionHeader, MenuItem, Popper, Card } from '@dhis2/ui';
import PropTypes from 'prop-types';
import React, { useState, useRef } from 'react';
import { resolvedHeaderStyle, userMentionWrapperClasses } from './styles/UserMentionWrapper.style.js';
import { UserList } from './UserList.js';
import { useUserSearchResults } from './useUserSearchResults.js';
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
export const UserMentionWrapper = _ref => {
  let {
    children,
    inputReference,
    onUserSelect
  } = _ref;
  const [listIsOpen, setListIsOpen] = useState(false);
  const [captureText, setCaptureText] = useState(false);
  const [capturedText, setCapturedText] = useState('');
  const [cloneText, setCloneText] = useState('');
  const cloneRef = useRef(null);
  const [captureStartPosition, setCaptureStartPosition] = useState(null);
  const [selectedUserIndex, setSelectedUserIndex] = useState(0);
  const {
    users,
    pager,
    fetching,
    clear
  } = useUserSearchResults({
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
  return /*#__PURE__*/React.createElement("div", {
    onKeyDown: onKeyDown,
    onInput: onInput,
    onClick: onClick,
    className: `jsx-${userMentionWrapperClasses.__hash}` + " " + "wrapper"
  }, children, /*#__PURE__*/React.createElement("div", {
    className: `jsx-${userMentionWrapperClasses.__hash}` + " " + "clone"
  }, /*#__PURE__*/React.createElement("p", {
    ref: cloneRef,
    className: `jsx-${userMentionWrapperClasses.__hash}`
  }, cloneText)), listIsOpen && /*#__PURE__*/React.createElement(Layer, {
    onBackdropClick: onUserListClose
  }, /*#__PURE__*/React.createElement(Popper, {
    reference: getVirtualPopperReference(cloneRef),
    placement: "top-start"
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    className: `jsx-${userMentionWrapperClasses.__hash}` + " " + "container"
  }, /*#__PURE__*/React.createElement(Menu, {
    dense: true
  }, /*#__PURE__*/React.createElement(MenuSectionHeader, {
    className: resolvedHeaderStyle.className,
    dense: true,
    hideDivider: true,
    label: capturedText === '' ? i18n.t('Search for a user') : i18n.t('Searching for "{{- searchText}}"', {
      searchText: capturedText
    })
  }), fetching && /*#__PURE__*/React.createElement(MenuItem, {
    label: /*#__PURE__*/React.createElement(CenteredContent, null, /*#__PURE__*/React.createElement(CircularLoader, {
      small: true
    }))
  }), !fetching && users.length > 0 && /*#__PURE__*/React.createElement(UserList, {
    users: users,
    selectedUserIndex: selectedUserIndex,
    onUserClick: onUserClick,
    pager: pager
  }), capturedText && !fetching && users.length === 0 && /*#__PURE__*/React.createElement(MenuItem, {
    dense: true,
    disabled: true,
    label: i18n.t('No results found')
  })))))), /*#__PURE__*/React.createElement(_JSXStyle, {
    id: userMentionWrapperClasses.__hash
  }, userMentionWrapperClasses), resolvedHeaderStyle.styles);
};
UserMentionWrapper.defaultProps = {
  onUserSelect: Function.prototype
};
UserMentionWrapper.propTypes = {
  inputReference: PropTypes.object.isRequired,
  onUserSelect: PropTypes.func.isRequired,
  children: PropTypes.node
};