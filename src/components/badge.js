// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { BadgeColors, type BadgeColorsUnion } from '../enums';
import {
  GeneralPropTypes,
  type TGeneralPropTypes,
  type flexboxClassNamesProps,
  FlexboxPropTypes,
  createClassName,
  generalClassNames,
  removeProps,
  objectKeys,
  objectValues,
} from '../utils';

/**
 * Badge component.
 * http://foundation.zurb.com/sites/docs/badge.html
 *
 * @param {Object} props
 * @returns {Object}
 */

type Props = {
  ...TGeneralPropTypes,
  ...flexboxClassNamesProps,
  color?: BadgeColorsUnion,
  noDefaultClassName: boolean,
  className?: string,
}

export const Badge = (props: Props) => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'badge',
    props.className,
    props.color,
    generalClassNames(props),
  );

  const passProps = removeProps(props, objectKeys(Badge.propTypes));

  return <span {...passProps} className={className} />;
};

Badge.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes,
  color: PropTypes.oneOf(objectValues(BadgeColors)),
};
