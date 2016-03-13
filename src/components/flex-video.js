import React from 'react';
import check from 'check-types';
import classNames from 'classnames';
import { default as omit } from 'lodash.omit';

/**
 * FlexVideo component.
 * http://foundation.zurb.com/sites/docs/flex-video.html
 *
 * @param {Object} props
 * @returns {XML}
 */
export const FlexVideo = props => {
  check.assert.maybe.boolean(props.isWidescreen, 'FlexVideo.props.isWidescreen must be a boolean.');
  check.assert.maybe.boolean(props.isVimeo, 'FlexVideo.props.isVimeo must be a boolean.');

  const className = classNames(
    props.className || 'flex-video',
    {
      widescreen: props.isWidescreen,
      vimeo: props.isVimeo
    }
  );

  const omitProps = ['isWidescreen', 'isVimeo'];

  return (
    <div {...omit(props, omitProps)} className={className}></div>
  );
};

export default FlexVideo;
