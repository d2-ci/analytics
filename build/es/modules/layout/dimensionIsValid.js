import { DIMENSION, DIMENSION_PROPS } from './dimension.js';
import { dimensionIsEmpty } from './dimensionIsEmpty.js';
export const dimensionIsValid = function (dimension) {
  let {
    requireItems
  } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (!DIMENSION.isValid(dimension)) {
    return false;
  }
  const requiredProps = DIMENSION_PROPS.filter(prop => prop.required);
  if (!requiredProps.every(prop => prop.isValid(dimension[prop.name]))) {
    return false;
  }
  if (requireItems === true && dimensionIsEmpty(dimension)) {
    return false;
  }
  return true;
};