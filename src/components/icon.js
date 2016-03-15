import React, { PropTypes } from 'react';
import { GeneralPropTypes, createClassName, generalClassNames, removeProps } from '../utils';

/**
 * Icon component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const Icon = props => {
  const className = createClassName(
    props.prefix,
    props.prefix ? `${props.prefix}-${props.icon}` : props.icon,
    generalClassNames(props)
  );

  return (
    <i {...removeProps(props, ['prefix', 'icon'])} className={className} />
  );
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  prefix: PropTypes.string,
  ...GeneralPropTypes
};
