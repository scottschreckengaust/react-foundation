import React from 'react';
import check from 'check-types';
import { createClassName, generalClassNames, removeProps } from '../utils';

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
export const Badge = props => {
  check.assert.maybe.string(props.color, 'Property "color" must be a string.');

  const className = createClassName(props.className || 'badge', props.color, generalClassNames(props));

  return (
    <span {...removeProps(props, ['color'])} className={className} />
  );
};

export default Badge;
