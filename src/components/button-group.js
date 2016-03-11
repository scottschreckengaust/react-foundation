import React from 'react';
import check from 'check-types';
import classNames from 'classnames';
import { default as omit } from 'lodash.omit';

// Button group size enumerable.
export const ButtonGroupSizes = {
  TINY: 'tiny',
  SMALL: 'small',
  LARGE: 'large'
};

// Button group color enumerable.
export const ButtonGroupColors = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  ALERT: 'alert',
  WARNING: 'warning'
};

const omitProps = [
  'size',
  'color',
  'isExpanded',
  'isStacked'
];

/**
 * Button group component.
 * http://foundation.zurb.com/sites/docs/button-group.html
 *
 * @param {Object} props
 * @returns {XML}
 */
const ButtonGroup = props => {
  // TODO: Consider validating both size and color values.
  check.assert.maybe.string(props.size, 'ButtonGroup.props.size must be a string');
  check.assert.maybe.string(props.color, 'ButtonGroup.props.color must be a string');
  check.assert.maybe.boolean(props.isExpanded, 'ButtonGroup.props.isExpanded must be a boolean.');
  check.assert.maybe.boolean(props.isStacked, 'ButtonGroup.props.isStacked must be a boolean.');

  const className = classNames(
    props.className || 'button-group',
    props.size,
    props.color,
    {
      'expanded': props.isExpanded,
      'stacked': props.isStacked
    }
  );

  return (
    <div {...omit(props, omitProps)} className={className}>
      {props.children}
    </div>
  );
};

export default ButtonGroup;
