import React, { PropTypes } from 'react';
import { GeneralPropTypes, createClassName, generalClassNames, removeProps, objectValues } from '../utils';

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
  const className = createClassName(
    props.className || 'label',
    props.color,
    generalClassNames(props)
  );

  return (
    <span {...removeProps(props, ['color'])} className={className} />
  );
};

Label.propTypes = {
  color: PropTypes.oneOf(objectValues(LabelColors)),
  ...GeneralPropTypes
};
