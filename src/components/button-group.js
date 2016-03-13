import React from 'react';
import check from 'check-types';
import classNames from 'classnames';
import { default as omit } from 'lodash.omit';

/**
 * Button group size enumerable.
 *
 * @type {Object}
 */
export const ButtonGroupSizes = {
  TINY: 'tiny',
  SMALL: 'small',
  LARGE: 'large'
};

/**
 * Button group color enumerable.
 *
 * @type {Object}
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
 * @returns {XML}
 */
export const ButtonGroup = props => {
  // TODO: Consider validating both size and color values.
  check.assert.maybe.string(props.size, 'ButtonGroup.props.size must be a string');
  check.assert.maybe.string(props.color, 'ButtonGroup.props.color must be a string');
  check.assert.maybe.boolean(props.isExpanded, 'ButtonGroup.props.isExpanded must be a boolean.');
  check.assert.maybe.boolean(props.isStacked, 'ButtonGroup.props.isStacked must be a boolean.');
  check.assert.maybe.boolean(props.stackOnSmall, 'ButtonGroup.props.stackOnSmall must be a boolean.');
  check.assert.maybe.boolean(props.stackOnMedium, 'ButtonGroup.props.stackOnMedium must be a boolean.');
  check.assert.maybe.boolean(props.stackOnLarge, 'ButtonGroup.props.stackOnLarge must be a boolean.');

  const className = classNames(
    props.className || 'button-group',
    props.size,
    props.color,
    {
      'expanded': props.isExpanded,
      'stacked': props.isStacked,
      'stacked-for-small': props.stackOnSmall,
      'stacked-for-medium': props.stackOnMedium,
      'stacked-for-large': props.stackOnLarge
    }
  );

  const omitProps = [
    'size',
    'color',
    'isExpanded',
    'isStacked',
    'stackOnSmall',
    'stackOnMedium',
    'stackOnLarge'
  ];

  return (
    <div {...omit(props, omitProps)} className={className}></div>
  );
};

export default ButtonGroup;
