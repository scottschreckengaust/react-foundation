//@flow

import React from 'react';
import PropTypes from 'prop-types';
import { LabelColors, type BadgeColorsUnion } from '../enums';
import {
  GeneralPropTypes,
  FlexboxPropTypes,
  createClassName,
  generalClassNames,
  removeProps,
  objectKeys,
  objectValues,
  type generalClassNamesProps,
  type TGeneralPropTypes,
  type flexboxClassNamesProps,
} from '../utils';

/**
 * Label component.
 * http://foundation.zurb.com/sites/docs/label.html
 *
 * @param {Object} props
 * @returns {Object}
 */
type Props = {
  ...generalClassNamesProps,
  ...TGeneralPropTypes,
  ...flexboxClassNamesProps,
  noDefaultClassName: string,
  className: string,
  color: BadgeColorsUnion,
  generalClassNames: Function,
}

export const Label = (props: Props) => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'label',
    props.className,
    props.color,
    generalClassNames(props),
  );

  const passProps = removeProps(props, objectKeys(Label.propTypes));

  return <span {...passProps} className={className} />;
};

Label.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes,
  color: PropTypes.oneOf(objectValues(LabelColors)),
};
