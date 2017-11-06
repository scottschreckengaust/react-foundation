// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { CalloutColors, CalloutSizes, type ButtonColorsUnion, type ButtonSizesUnion } from '../enums';
import { GeneralPropTypes, FlexboxPropTypes, createClassName, generalClassNames, removeProps, objectKeys, objectValues, type flexboxClassNamesProps, type TGeneralPropTypes } from '../utils';

/**
 * Callout component.
 * http://foundation.zurb.com/sites/docs/callout.html
 *
 * @param {Object} props
 * @returns {Object}
 */

type Props = {
  ...flexboxClassNamesProps,
  ...TGeneralPropTypes,
  color: ButtonColorsUnion,
  size: ButtonSizesUnion,
  noDefaultClassName: string
}

export const Callout = (props: Props) => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'callout',
    props.className,
    props.color,
    props.size,
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(Callout.propTypes));

  return <div {...passProps} className={className}/>;
};

Callout.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes,
  color: PropTypes.oneOf(objectValues(CalloutColors)),
  size: PropTypes.oneOf(objectValues(CalloutSizes))
};
