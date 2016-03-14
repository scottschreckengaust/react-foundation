import React from 'react';
import check from 'check-types';
import { createClassName, generalClassNames, removeProps } from '../utils';

/**
 * Icon component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const Icon = props => {
  check.assert.string(props.icon, 'Property "icon" must be a string.');
  check.assert.maybe.string(props.prefix, 'Property "prefix" must be a string.');

  const className = createClassName(
    props.prefix,
    props.prefix ? `${props.prefix}-${props.icon}` : props.icon,
    generalClassNames(props)
  );

  return (
    <i {...removeProps(props, ['prefix', 'icon'])} className={className} />
  );
};

export default Icon;
