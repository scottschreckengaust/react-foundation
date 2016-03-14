import React from 'react';
import check from 'check-types';
import { createClassName, generalClassNames, removeProps } from '../utils';

/**
 * Button group size enumerable.
 *
 * @type {{TINY: string, SMALL: string, LARGE: string}}
 */
export const ButtonGroupSizes = {
  TINY: 'tiny',
  SMALL: 'small',
  LARGE: 'large'
};

/**
 * Button group color enumerable.
 *
 * @type {{PRIMARY: string, SECONDARY: string, SUCCESS: string, ALERT: string, WARNING: string}}
 */
export const ButtonGroupColors = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  ALERT: 'alert',
  WARNING: 'warning'
};

/**
 * Button group component.
 * http://foundation.zurb.com/sites/docs/button-group.html
 *
 * @param {Object} props
 * @returns {Object}
 */
export const ButtonGroup = props => {
  // TODO: Consider validating both size and color values.
  check.assert.maybe.string(props.size, 'Property "size" must be a string.');
  check.assert.maybe.string(props.color, 'Property "color" must be a string.');
  check.assert.maybe.boolean(props.isExpanded, 'Property "isExpanded" must be a boolean.');
  check.assert.maybe.boolean(props.isStacked, 'Property "isStacked" must be a boolean.');
  check.assert.maybe.boolean(props.stackForSmall, 'Property "stackedForSmall" must be a boolean.');
  check.assert.maybe.boolean(props.stackForMedium, 'Property "stackedForMedium" must be a boolean.');
  check.assert.maybe.boolean(props.stackForLarge, 'Property "stackedForLarge" must be a boolean.');

  const className = createClassName(
    props.className || 'button-group',
    props.size,
    props.color,
    {
      'expanded': props.isExpanded,
      'stacked': props.isStacked,
      'stacked-for-small': props.stackedForSmall,
      'stacked-for-medium': props.stackedForMedium,
      'stacked-for-large': props.stackedForLarge
    },
    generalClassNames(props)
  );

  return (
    <div {...removeProps(props, ['color'])} className={className} />
  );
};

export default ButtonGroup;
