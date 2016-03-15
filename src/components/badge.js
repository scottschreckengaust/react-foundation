import React, { PropTypes } from 'react';
import { BadgeColors } from '../enums';
import { GeneralPropTypes, createClassName, generalClassNames, removeProps, objectValues } from '../utils';

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
  ...GeneralPropTypes,
  color: PropTypes.oneOf(objectValues(BadgeColors))
};
