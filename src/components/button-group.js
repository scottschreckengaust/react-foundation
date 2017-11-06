// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { Breakpoints, ButtonGroupColors, ButtonGroupSizes, type ButtonColorsUnion, type BreakpointsUnion, type ButtonSizesUnion } from '../enums';
import { GeneralPropTypes, FlexboxPropTypes, createClassName, generalClassNames, removeProps, objectKeys, objectValues, type TGeneralPropTypes, type flexboxClassNamesProps } from '../utils';

/**
 * Button group component.
 * http://foundation.zurb.com/sites/docs/button-group.html
 *
 * @param {Object} props
 * @returns {Object}
 */

type Props = {
  ...TGeneralPropTypes,
  ...flexboxClassNamesProps,
  color: ButtonColorsUnion,
  size: ButtonSizesUnion,
  noDefaultClassName: string,
  isExpanded: Boolean,
  stackFor: BreakpointsUnion,
  isStacked: Boolean,
}

export const ButtonGroup = (props: Props) => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'button-group',
    props.className,
    props.color,
    props.size,
    {
      'expanded': props.isExpanded,
      'stacked-for-small': props.stackFor === Breakpoints.SMALL,
      'stacked-for-medium': props.stackFor === Breakpoints.MEDIUM,
      'stacked-for-large': props.stackFor === Breakpoints.LARGE,
      'stacked': props.isStacked
    },
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(ButtonGroup.propTypes));

  return <div {...passProps} className={className}/>;
};

ButtonGroup.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes,
  color: PropTypes.oneOf(objectValues(ButtonGroupColors)),
  size: PropTypes.oneOf(objectValues(ButtonGroupSizes)),
  stackFor: PropTypes.oneOf(objectValues(Breakpoints)),
  isExpanded: PropTypes.bool,
  isStacked: PropTypes.bool
};
