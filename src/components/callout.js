import React from 'react';
import check from 'check-types';
import classNames from 'classnames';
import { default as omit } from 'lodash.omit';

/**
 * Callout color enumerable.
 *
 * @type {Object}
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
 * @type {Object}
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
 * @returns {XML}
 */
export const Callout = props => {
  check.assert.maybe.string(props.color, 'Callout.props.color must be a string.');
  check.assert.maybe.string(props.size, 'Callout.props.size must be a string.');

  const className = classNames(
    props.className || 'callout',
    props.color,
    props.size
  );

  const omitProps = ['color', 'size'];

  return (
    <div {...omit(props, omitProps)} className={className}></div>
  );
};

// TODO: Add support for closable elements.

export default Callout;
