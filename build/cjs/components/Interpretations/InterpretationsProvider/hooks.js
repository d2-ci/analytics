"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useUpdateInterpretationText = exports.useUpdateCommentForActiveInterpretation = exports.useLike = exports.useInterpretationsManager = exports.useInterpretationsList = exports.useInterpretationsCurrentUser = exports.useInterpretationAccess = exports.useInterpretation = exports.useDeleteInterpretation = exports.useDeleteCommentFromActiveInterpretation = exports.useCreateInterpretation = exports.useCommentAccess = exports.useAddCommentToActiveInterpretation = exports.useActiveInterpretation = void 0;
var _react = require("react");
var _getInterpretationAccess = require("../common/getInterpretationAccess.js");
var _InterpretationsProvider = require("./InterpretationsProvider.js");
const SET_LOADING = 'SET_LOADING';
const SET_ERROR = 'SET_ERROR';
const SET_DATA = 'SET_DATA';
const RESET = 'RESET';
const initialLoadingState = {
  loading: false,
  error: undefined,
  data: undefined
};
function loadingReducer(state, action) {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case SET_DATA:
      return {
        data: action.payload,
        error: undefined,
        loading: false
      };
    case RESET:
      return {
        ...initialLoadingState
      };
    default:
      return state;
  }
}
const useInterpretationsManager = () => {
  const interpretationsManager = (0, _react.useContext)(_InterpretationsProvider.InterpretationsContext);
  if (!interpretationsManager) {
    throw new Error('Called useInterpretationsManager() from outside an InterpretationsProvider');
  }
  return interpretationsManager;
};
exports.useInterpretationsManager = useInterpretationsManager;
const useInterpretationsCurrentUser = () => {
  const interpretationsManager = useInterpretationsManager();
  return interpretationsManager.getCurrentUser();
};
exports.useInterpretationsCurrentUser = useInterpretationsCurrentUser;
const useInterpretationsList = (type, id) => {
  const prevTypeRef = (0, _react.useRef)(null);
  const prevIdRef = (0, _react.useRef)(null);
  const interpretationsManager = useInterpretationsManager();
  const [state, dispatch] = (0, _react.useReducer)(loadingReducer, initialLoadingState);
  const fetchList = (0, _react.useCallback)(async () => {
    dispatch({
      type: SET_LOADING
    });
    try {
      const data = await interpretationsManager.loadInterpretationsForVisualization(type, id);
      dispatch({
        type: SET_DATA,
        payload: data
      });
    } catch (error) {
      console.error(error);
      dispatch({
        type: SET_ERROR,
        payload: error
      });
    }
  }, [interpretationsManager, type, id, dispatch]);

  // Ensure manager updates get propagated to the state
  (0, _react.useEffect)(() => {
    const unsubscribe = interpretationsManager.subscribeToInterpretationsListUpdates(interpretationIdsByDate => {
      dispatch({
        type: SET_DATA,
        payload: interpretationIdsByDate
      });
    });
    return unsubscribe;
  }, [interpretationsManager]);

  // Fetch when mounting or after a reset
  (0, _react.useEffect)(() => {
    if (type && id && !state.loading && !state.data && !state.error) {
      fetchList();
    }
  }, [fetchList, state, type, id]);

  // Handle active item changes and clearance
  (0, _react.useEffect)(() => {
    const prevType = prevTypeRef.current;
    const prevId = prevIdRef.current;
    const isTypeChange = prevType && type && prevType !== type;
    const isIdChange = prevId && id && prevId !== id;
    const isTypeClearance = prevType && !type;
    const isIdClearance = prevId && !id;
    if (isTypeChange || isIdChange || isTypeClearance || isIdClearance) {
      dispatch({
        type: RESET
      });
    }
    if (isTypeClearance || isIdClearance) {
      interpretationsManager.clearInterpretations();
    }
    prevTypeRef.current = type;
    prevIdRef.current = id;
  }, [interpretationsManager, type, id]);
  return state;
};
exports.useInterpretationsList = useInterpretationsList;
const useActiveInterpretation = id => {
  const prevIdRef = (0, _react.useRef)(null);
  const interpretationsManager = useInterpretationsManager();
  const [state, dispatch] = (0, _react.useReducer)(loadingReducer, initialLoadingState);
  const fetchInterpretation = (0, _react.useCallback)(async () => {
    dispatch({
      type: SET_LOADING
    });
    try {
      const data = await interpretationsManager.loadActiveInterpretation(id);
      dispatch({
        type: SET_DATA,
        payload: data
      });
    } catch (error) {
      console.error(error);
      dispatch({
        type: SET_ERROR,
        payload: error
      });
    }
  }, [interpretationsManager, id, dispatch]);

  // Ensure manager updates get propagated to the state
  (0, _react.useEffect)(() => {
    const unsubscribe = interpretationsManager.subscribeToInterpretationUpdates(id, interpretation => {
      dispatch({
        type: SET_DATA,
        payload: interpretation
      });
    });
    return unsubscribe;
  }, [interpretationsManager, id]);

  // Fetch when mounting or after a reset
  (0, _react.useEffect)(() => {
    if (id && !state.loading && !state.data && !state.error) {
      fetchInterpretation();
    }
  }, [fetchInterpretation, state, id]);

  // Handle active item changes and clearance
  (0, _react.useEffect)(() => {
    const prevId = prevIdRef.current;
    const isIdChange = prevId && id && prevId !== id;
    const isIdClearance = prevId && !id;
    if (isIdChange || isIdClearance) {
      dispatch({
        type: RESET
      });
    }
    if (isIdClearance) {
      interpretationsManager.clearActiveInterpretation();
    }
    prevIdRef.current = id;
  }, [id, interpretationsManager]);
  return state;
};
exports.useActiveInterpretation = useActiveInterpretation;
const useInterpretation = id => {
  const interpretationsManager = useInterpretationsManager();
  const [interpretation, setInterpretation] = (0, _react.useState)(interpretationsManager.getInterpretation(id));
  (0, _react.useEffect)(() => {
    const unsubscribe = interpretationsManager.subscribeToInterpretationUpdates(id, newInterpretation => {
      setInterpretation(newInterpretation);
    });
    return unsubscribe;
  }, [interpretationsManager, id]);
  return interpretation;
};
exports.useInterpretation = useInterpretation;
const useLike = id => {
  const interpretationsManager = useInterpretationsManager();
  const [{
    loading: toggleLikeInProgress,
    data: interpretation
  }, dispatch] = (0, _react.useReducer)(loadingReducer, {
    ...initialLoadingState,
    data: interpretationsManager.getInterpretation(id)
  });
  const toggleLike = (0, _react.useCallback)(async () => {
    dispatch({
      type: SET_LOADING
    });
    try {
      const data = await interpretationsManager.toggleInterpretationLike(id);
      dispatch({
        type: SET_DATA,
        payload: data
      });
    } catch (error) {
      console.error(error);
      dispatch({
        type: SET_ERROR,
        payload: error
      });
    }
  }, [id, interpretationsManager]);
  const isLikedByCurrentUser = (0, _react.useMemo)(() => {
    const currentUser = interpretationsManager.getCurrentUser();
    return interpretation.likedBy.some(likedBy => likedBy.id === currentUser.id);
  }, [interpretation, interpretationsManager]);
  return {
    isLikedByCurrentUser,
    toggleLike,
    toggleLikeInProgress
  };
};
exports.useLike = useLike;
const useInterpretationAccess = interpretation => {
  const currentUser = useInterpretationsCurrentUser();
  const access = (0, _react.useMemo)(() => (0, _getInterpretationAccess.getInterpretationAccess)(interpretation, currentUser), [interpretation, currentUser]);
  return access;
};
exports.useInterpretationAccess = useInterpretationAccess;
const useCommentAccess = (comment, canComment) => {
  const currentUser = useInterpretationsCurrentUser();
  const access = (0, _react.useMemo)(() => (0, _getInterpretationAccess.getCommentAccess)(comment, canComment, currentUser), [comment, canComment, currentUser]);
  return access;
};
exports.useCommentAccess = useCommentAccess;
const useInterpretationsManagerMutation = (methodName, options = {}) => {
  const interpretationsManager = useInterpretationsManager();
  const [state, dispatch] = (0, _react.useReducer)(loadingReducer, initialLoadingState);
  const doAsyncCallback = (0, _react.useCallback)(async () => {
    dispatch({
      type: SET_LOADING
    });
    try {
      const data = await interpretationsManager[methodName](options);
      dispatch({
        type: SET_DATA,
        payload: data
      });
    } catch (error) {
      console.error(error);
      dispatch({
        type: SET_ERROR,
        payload: error
      });
    }
  }, [interpretationsManager, methodName, options]);
  return [doAsyncCallback, state];
};
const useCreateInterpretation = options => useInterpretationsManagerMutation('createInterpretation', options);
exports.useCreateInterpretation = useCreateInterpretation;
const useUpdateInterpretationText = options => useInterpretationsManagerMutation('updateInterpretationText', options);
exports.useUpdateInterpretationText = useUpdateInterpretationText;
const useDeleteInterpretation = options => useInterpretationsManagerMutation('deleteInterpretation', options);
exports.useDeleteInterpretation = useDeleteInterpretation;
const useAddCommentToActiveInterpretation = options => useInterpretationsManagerMutation('addCommentToActiveInterpretation', options);
exports.useAddCommentToActiveInterpretation = useAddCommentToActiveInterpretation;
const useUpdateCommentForActiveInterpretation = options => useInterpretationsManagerMutation('updateCommentForActiveInterpretation', options);
exports.useUpdateCommentForActiveInterpretation = useUpdateCommentForActiveInterpretation;
const useDeleteCommentFromActiveInterpretation = options => useInterpretationsManagerMutation('deleteCommentFromActiveInterpretation', options);
exports.useDeleteCommentFromActiveInterpretation = useDeleteCommentFromActiveInterpretation;