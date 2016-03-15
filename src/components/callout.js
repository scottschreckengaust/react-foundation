import React, { PropTypes } from 'react';
import { GeneralPropTypes, createClassName, generalClassNames, removeProps, objectValues } from '../utils';

/**
 * Callout color enumerable.
 *
 * @type {{PRIMARY: string, SECONDARY: string, SUCCESS: string, WARNING: string, ALERT: string}}
 */
export const CalloutColors = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  WARNING: 'warning',
  ALERT: 'alert'
};

/**
 * Callout size enumerable.
 *
 * @type {{SMALL: string, LARGE: string}}
 */
export const CalloutSizes = {
  SMALL: 'small',
  LARGE: 'large'
};

/**
 * Callout component.
 * http://foundation.zurb.com/sites/docs/callout.html
 *
 * @param {Object} props
 * @returns {Object}
 */
export const Callout = props => {
  const className = createClassName(
    props.className || 'callout',
    props.color,
    props.size,
    generalClassNames(props)
  );

  return (
    <div {...removeProps(props, ['color'])} className={className}/>
  );
};

Callout.propTypes = {
  ...GeneralPropTypes,
  color: PropTypes.oneOf(objectValues(CalloutColors)),
  size: PropTypes.oneOf(objectValues(CalloutSizes))
};
