import React, { PropTypes } from 'react';
import { GeneralPropTypes, createClassName, generalClassNames, removeProps, objectValues } from '../utils';

/**
 * Button size enumerable.
 *
 * @type {{TINY: string, SMALL: string, LARGE: string}}
 */
export const ButtonSizes = {
  TINY: 'tiny',
  SMALL: 'small',
  LARGE: 'large'
};

/**
 * Button color enumerable.
 *
 * @type {{PRIMARY: string, SECONDARY: string, SUCCESS: string, ALERT: string, WARNING: string}}
 */
export const ButtonColors = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  ALERT: 'alert',
  WARNING: 'warning'
};

/**
 * Button property types.
 *
 * @type {Object}
 */
const ButtonPropTypes = {
  color: PropTypes.oneOf(objectValues(ButtonColors)),
  size: PropTypes.oneOf(objectValues(ButtonSizes)),
  isHollow: PropTypes.bool,
  isExpanded: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isDropdown: PropTypes.bool,
  ...GeneralPropTypes
};

/**
 * Button component.
 * http://foundation.zurb.com/sites/docs/button.html
 *
 * @param {Object} props
 * @returns {Object}
 */
export const Button = props => (
  <button {...removeProps(props, ['color'])} className={createButtonClassName(props)}/>
);

Button.propTypes = ButtonPropTypes;

/**
 * Link button component.
 * http://foundation.zurb.com/sites/docs/button.html#basics
 *
 * @param {Object} props
 * @returns {Object}
 */
export const Link = props => (
  <a {...removeProps(props, ['color'])} className={createButtonClassName(props)}/>
);

Link.propTypes = ButtonPropTypes;

/**
 * Creates button class name from the given properties.
 *
 * @param {Object} props
 * @returns {string}
 */
function createButtonClassName(props) {
  return createClassName(
    props.className || 'button',
    props.size,
    props.color,
    {
      'hollow': props.isHollow,
      'expanded': props.isExpanded,
      'disabled': props.isDisabled,
      'dropdown': props.isDropdown,
      'arrow-only': props.isArrowOnly
    },
    generalClassNames(props)
  );
}
