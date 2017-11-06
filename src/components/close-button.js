// @flow

import React from 'react';
import { GeneralPropTypes, FlexboxPropTypes, createClassName, generalClassNames, removeProps, objectKeys, type TGeneralPropTypes } from '../utils';

/**
 * Close button component.
 * http://foundation.zurb.com/sites/docs/close-button.html
 *
 * @param {Object} props
 * @returns {Object}
 */

type Props = {
  ...TGeneralPropTypes,
  noDefaultClassName: string,
}

export const CloseButton = (props: Props) => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'close-button',
    props.className,
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(CloseButton.propTypes));

  return <button {...passProps} className={className}/>;
};

CloseButton.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes
};
