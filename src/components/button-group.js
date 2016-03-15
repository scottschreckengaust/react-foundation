import React, { PropTypes } from 'react';
import { Breakpoints } from '../enums';
import { GeneralPropTypes, createClassName, generalClassNames, removeProps, objectValues } from '../utils';

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
  const className = createClassName(
    props.className || 'button-group',
    props.color,
    props.size,
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
    <div {...removeProps(props, ['color'])} className={className}/>
  );
};

ButtonGroup.propTypes = {
  color: PropTypes.oneOf(objectValues(ButtonGroupColors)),
  size: PropTypes.oneOf(objectValues(ButtonGroupSizes)),
  isExpanded: PropTypes.bool,
  stackedForSmall: PropTypes.bool,
  stackedForMedium: PropTypes.bool,
  stackedForLarge: PropTypes.bool,
  ...GeneralPropTypes
};
