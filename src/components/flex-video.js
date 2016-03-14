import React from 'react';
import check from 'check-types';
import { createClassName, generalClassNames } from '../utils';

/**
 * FlexVideo component.
 * http://foundation.zurb.com/sites/docs/flex-video.html
 *
 * @param {Object} props
 * @returns {Object}
 */
export const FlexVideo = props => {
  check.assert.maybe.boolean(props.isWidescreen, 'Property "isWidescreen" must be a boolean.');
  check.assert.maybe.boolean(props.isVimeo, 'Property "isVimeo" must be a boolean.');

  const className = createClassName(
    props.className || 'flex-video',
    {
      widescreen: props.isWidescreen,
      vimeo: props.isVimeo
    },
    generalClassNames(props)
  );

  return (
    <div {...props} className={className} />
  );
};

export default FlexVideo;
