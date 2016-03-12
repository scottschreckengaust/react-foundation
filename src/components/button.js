import React from 'react';
import check from 'check-types';
import classNames from 'classnames';
import { default as omit } from 'lodash.omit';

/**
 * Button size enumerable.
 *
 * @type {Object}
 */
export const ButtonSizes = {
  TINY: 'tiny',
  SMALL: 'small',
  LARGE: 'large'
};

/**
 * Button color enumerable.
 *
 * @type {Object}
 */
export const ButtonColors = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  ALERT: 'alert',
  WARNING: 'warning'
};

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
export const Button = props => (
  <button {...omit(props, omitProps)} className={classNameFromProps(props)}/>
);

/**
 * Link button component.
 * http://foundation.zurb.com/sites/docs/button.html#basics
 *
 * @param {Object} props
 * @returns {XML}
 */
export const Link = props => (
  <a {...omit(props, omitProps)} className={classNameFromProps(props)}/>
);

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
