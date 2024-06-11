"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getInterpretationAccess = exports.getCommentAccess = void 0;
// For backwards compatibility
// accept both Set (from the old d2.currentUser object) and array
const hasAuthority = (authorities, authority) => {
  if (!authority || typeof authority !== 'string') {
    throw new Error(`"hasAuthority" requires "authority" to be a populated string but received ${authority}`);
  }
  if (!(Array.isArray(authorities) || typeof (authorities === null || authorities === void 0 ? void 0 : authorities.has) === 'function')) {
    throw new Error(`"hasAuthority" requires "authorities" to be an array or set of authorities (strings)`);
  }
  return Array.isArray(authorities) ? authorities.includes(authority) : authorities.has(authority);
};
const isSuperuser = authorities => hasAuthority(authorities, 'ALL');
const isCreator = (object, currentUser) => (object === null || object === void 0 ? void 0 : object.createdBy.id) === (currentUser === null || currentUser === void 0 ? void 0 : currentUser.id);
const getInterpretationAccess = (interpretation, currentUser) => {
  const canEditDelete = isCreator(interpretation, currentUser) || isSuperuser(currentUser === null || currentUser === void 0 ? void 0 : currentUser.authorities);
  return {
    share: interpretation.access.manage,
    comment: interpretation.access.write,
    edit: canEditDelete,
    delete: canEditDelete
  };
};
exports.getInterpretationAccess = getInterpretationAccess;
const getCommentAccess = (comment, hasInterpretationReplyAccess, currentUser) => {
  const canEditDelete = isCreator(comment, currentUser) || isSuperuser(currentUser === null || currentUser === void 0 ? void 0 : currentUser.authorities);
  return {
    edit: canEditDelete,
    delete: canEditDelete && hasInterpretationReplyAccess
  };
};
exports.getCommentAccess = getCommentAccess;