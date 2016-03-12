import React from 'react';
import classNames from 'classnames';
import check from 'check-types';
import { default as omit } from 'lodash.omit';

/**
 * Icon component.
 *
 * @param {{prefix: string, name: string}} props
 * @returns {XML}
 */
const Icon = props => {
  check.assert.string(props.name, 'Icon.name must be set.');
  check.assert.maybe.string(props.prefix, 'Icon.prefix must be a string.');

  const className = classNames(
    props.prefix,
    props.prefix ? `${props.prefix}-${props.name}` : props.name
  );

  const omitProps = ['prefix', 'name'];

  return (
    <i {...omit(props, omitProps)} className={className}/>
  );
};

export default Icon;
