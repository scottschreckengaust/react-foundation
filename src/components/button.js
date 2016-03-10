import React from 'react';
import check from 'check-types';
import classNames from 'classnames';
import { default as omit } from 'lodash.omit';

// Button size constants.
export const SIZE_TINY = 'tiny';
export const SIZE_SMALL = 'small';
export const SIZE_LARGE = 'large';

// Button color constants.
export const COLOR_PRIMARY = 'primary';
export const COLOR_SECONDARY = 'secondary';
export const COLOR_SUCCESS = 'success';
export const COLOR_ALERT = 'alert';
export const COLOR_WARNING = 'warning';

const omitProps = [
  'color',
  'size',
  'isHollow',
  'isExpanded',
  'isDisabled',
  'isDropdown'
];

/**
 * Button component.
 * http://foundation.zurb.com/sites/docs/button.html
 *
 * @param {Object} props
 * @returns {XML}
 */
export const Button = props => {
  return (
    <button {...omit(props, omitProps)} className={classNameFromProps(props)}>{props.children}</button>
  );
};

/**
 * Link button component.
 * http://foundation.zurb.com/sites/docs/button.html#basics
 *
 * @param {Object} props
 * @returns {XML}
 */
export const Link = props => {
  return (
    <a {...omit(props, omitProps)} className={classNameFromProps(props)}>{props.children}</a>
  );
};

/**
 * Creates the button class name from the given properties.
 * This method allows us to share code between the `Button` and `Link` components.
 *
 * @param {Object} props
 * @returns {string}
 */
function classNameFromProps(props) {
  // TODO: Consider validating both size and color values.
  check.assert.maybe.string(props.size, 'Button.props.size must be a string.');
  check.assert.maybe.string(props.color, 'Button.props.color must be a string.');
  check.assert.maybe.boolean(props.isHollow, 'Button.props.isHollow must be a boolean.');
  check.assert.maybe.boolean(props.isExpanded, 'Button.props.isExpanded must be a boolean.');
  check.assert.maybe.boolean(props.isDisabled, 'Button.props.isDisabled must be a boolean.');
  check.assert.maybe.boolean(props.isDropdown, 'Button.props.isDropdown must be a boolean.');

  return classNames(
    props.className || 'button',
    props.size,
    props.color,
    {
      'hollow': props.isHollow,
      'expanded': props.isExpanded,
      'disabled': props.isDisabled,
      'dropdown': props.isDropdown
    }
  );
}
