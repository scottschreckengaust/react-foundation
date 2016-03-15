import React, { PropTypes } from 'react';
import { LabelColors } from '../enums';
import { GeneralPropTypes, createClassName, generalClassNames, removeProps, objectValues } from '../utils';

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
    <span {...removeProps(props, ['color'])} className={className}/>
  );
};

Label.propTypes = {
  ...GeneralPropTypes,
  color: PropTypes.oneOf(objectValues(LabelColors))
};
