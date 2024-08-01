"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLike = void 0;
var _appRuntime = require("@dhis2/app-runtime");
var _react = require("react");
const useLike = _ref => {
  let {
    interpretation,
    currentUser,
    onComplete
  } = _ref;
  const resource = `interpretations/${interpretation.id}/like`;
  const likeMutationRef = (0, _react.useRef)({
    resource,
    type: 'create'
  });
  const unlikeMutationRef = (0, _react.useRef)({
    resource,
    type: 'delete'
  });
  const [like, {
    loading: likeLoading
  }] = (0, _appRuntime.useDataMutation)(likeMutationRef.current, {
    onComplete: () => {
      const newLikedBy = interpretation.likedBy.concat({
        id: currentUser.id
      });
      setIsLikedByCurrentUser(true);
      onComplete(newLikedBy);
    }
  });
  const [unlike, {
    loading: unlikeLoading
  }] = (0, _appRuntime.useDataMutation)(unlikeMutationRef.current, {
    onComplete: () => {
      const newLikedBy = interpretation.likedBy.filter(lb => lb.id !== currentUser.id);
      setIsLikedByCurrentUser(false);
      onComplete(newLikedBy);
    }
  });
  const [isLikedByCurrentUser, setIsLikedByCurrentUser] = (0, _react.useState)(false);
  const toggleLike = () => {
    isLikedByCurrentUser ? unlike() : like();
  };
  (0, _react.useEffect)(() => {
    setIsLikedByCurrentUser(interpretation.likedBy.some(likedBy => likedBy.id === currentUser.id));
  }, [currentUser, interpretation]);
  return {
    isLikedByCurrentUser,
    toggleLike,
    toggleLikeInProgress: likeLoading || unlikeLoading
  };
};
exports.useLike = useLike;