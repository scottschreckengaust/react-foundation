
// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { GeneralPropTypes, FlexboxPropTypes, createClassName, generalClassNames, removeProps, objectKeys, type TGeneralPropTypes, type flexboxClassNamesProps } from '../utils';

/**
 * FlexVideo component.
 * http://foundation.zurb.com/sites/docs/flex-video.html
 *
 * @param {Object} props
 * @returns {Object}
 */

type Props = {
  ...TGeneralPropTypes,
  ...flexboxClassNamesProps,
  isWidescreen?: Boolean,
  isVimeo?: Boolean,
  noDefaultClassName?: ?string,
}
export const FlexVideo = (props: Props) => {
  const className = createClassName(

    //Adding !== undefined so flow type could check it properly
    props.noDefaultClassName !== undefined ? null : 'flex-video',
    props.className,
    {
      widescreen: props.isWidescreen,
      vimeo: props.isVimeo
    },
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(FlexVideo.propTypes));

  return <div {...passProps} className={className}/>;
};

FlexVideo.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes,
  isWidescreen: PropTypes.bool,
  isVimeo: PropTypes.bool
};
