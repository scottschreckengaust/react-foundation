// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { GeneralPropTypes, FlexboxPropTypes, createClassName, generalClassNames, removeProps, objectKeys, type TGeneralPropTypes } from '../utils';

/**
 * Reveal component.
 * http://foundation.zurb.com/sites/docs/reveal.html
 *
 * @param {Object} props
 * @returns {Object}
 */
type RevealProps = {
  ...TGeneralPropTypes,
  isTiny?: boolean,
  isSmall?: boolean,
  isLarge?: boolean,
  isFullscreen?: boolean,
  noDefaultClassName: boolean,
}
export const Reveal = (props: RevealProps) => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'reveal',
    props.className,
    {
      'tiny': props.isTiny,
      'small': props.isSmall,
      'large': props.isLarge,
      'full': props.isFullscreen
    },
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(Reveal.propTypes));

  return <div {...passProps} className={className} data-reveal/>;
};

Reveal.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes,
  isTiny: PropTypes.bool,
  isSmall: PropTypes.bool,
  isLarge: PropTypes.bool,
  isFullscreen: PropTypes.bool
};
