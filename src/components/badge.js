import React, { PropTypes } from 'react';
import { GeneralPropTypes, createClassName, generalClassNames, removeProps, objectValues } from '../utils';

/**
 * Badge color enumerable.
 *
 * @type {{INFO: string, SECONDARY: string, SUCCESS: string, WARNING: string, ALERT: string}}
 */
export const BadgeColors = {
  INFO: 'info',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  WARNING: 'warning',
  ALERT: 'alert'
};

/**
 * Badge component.
 * http://foundation.zurb.com/sites/docs/badge.html
 *
 * @param {Object} props
 * @returns {JSX}
 */
export const Badge = props => (
  <span {...removeProps(props, ['color'])}
    className={createClassName(props.className || 'badge', props.color, generalClassNames(props))}/>
);

Badge.propTypes = {
  color: PropTypes.oneOf(objectValues(BadgeColors)),
  ...GeneralPropTypes
};
