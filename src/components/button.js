import React from 'react';
import check from 'check-types';
import { createClassName, generalClassNames, removeProps } from '../utils';

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
 * Button component.
 * http://foundation.zurb.com/sites/docs/button.html
 *
 * @param {Object} props
 * @returns {Object}
 */
export const Button = props => (
  <button {...removeProps(props, ['color'])} className={createButtonClassName(props)} />
);

/**
 * Link button component.
 * http://foundation.zurb.com/sites/docs/button.html#basics
 *
 * @param {Object} props
 * @returns {Object}
 */
export const Link = props => (
  <a {...removeProps(props, ['color'])} className={createButtonClassName(props)} />
);

/**
 * Creates the button class name from the given properties.
 * This method allows us to share code between the `Button` and `Link` components.
 *
 * @param {Object} props
 * @returns {string}
 */
function createButtonClassName(props) {
  // TODO: Consider validating both size and color values.
  check.assert.maybe.string(props.size, 'Property "size" must be a string.');
  check.assert.maybe.string(props.color, 'Property "color" must be a string.');
  check.assert.maybe.boolean(props.isHollow, 'Property "isHollow" must be a boolean.');
  check.assert.maybe.boolean(props.isExpanded, 'Property "isExpanded" must be a boolean.');
  check.assert.maybe.boolean(props.isDisabled, 'Property "isDisabled" must be a boolean.');
  check.assert.maybe.boolean(props.isDropdown, 'Property "isDropdown" must be a boolean.');

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

export default Button;
