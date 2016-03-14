import React from 'react';
import check from 'check-types';
import { createClassName, generalClassNames, removeProps } from '../utils';

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
  check.assert.maybe.string(props.color, 'Property "color" must be a string.');
  check.assert.maybe.string(props.size, 'Property "size" must be a string.');

  const className = createClassName(
    props.className || 'callout',
    props.color,
    props.size,
    generalClassNames(props)
  );

  return (
    <div {...removeProps(props, ['color'])} className={className} />
  );
};

// TODO: Add support for closable elements.

export default Callout;
