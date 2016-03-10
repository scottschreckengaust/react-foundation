import React from 'react';
import check from 'check-types';
import classNames from 'classnames';
import { default as omit } from 'lodash.omit';

// Button group size constants.
export const SIZE_TINY = 'tiny';
export const SIZE_SMALL = 'small';
export const SIZE_LARGE = 'large';

// Button group color constants.
export const COLOR_PRIMARY = 'primary';
export const COLOR_SECONDARY = 'secondary';
export const COLOR_SUCCESS = 'success';
export const COLOR_ALERT = 'alert';
export const COLOR_WARNING = 'warning';

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
