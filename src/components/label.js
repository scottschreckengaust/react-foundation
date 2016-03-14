import React from 'react';
import check from 'check-types';
import { createClassName, generalClassNames, removeProps } from '../utils';

/**
 * Label color enumerable.
 *
 * @type {{INFO: string, SECONDARY: string, SUCCESS: string, WARNING: string, ALERT: string}}
 */
export const LabelColors = {
  INFO: 'info',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  WARNING: 'warning',
  ALERT: 'alert'
};

/**
 * Label component.
 * http://foundation.zurb.com/sites/docs/label.html
 *
 * @param {Object} props
 * @returns {Object}
 */
export const Label = props => {
  check.assert.maybe.string(props.color, 'Property "color" must be a string.');

  const className = createClassName(
    props.className || 'label',
    props.color,
    generalClassNames(props)
  );

  return (
    <span {...removeProps(props, ['color'])} className={className} />
  );
};

export default Label;
