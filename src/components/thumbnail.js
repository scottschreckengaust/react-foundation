import React from 'react';
import { GeneralPropTypes, createClassName, generalClassNames } from '../utils';

/**
 * Thumbnail component.
 * http://foundation.zurb.com/sites/docs/switch.html
 *
 * @param {Object} props
 * @returns {Object}
 */
export const Thumbnail = props => (
  <img {...props} className={createClassName(props.className || 'thumbnail', generalClassNames(props))}/>
);

Thumbnail.propTypes = {
  ...GeneralPropTypes
};

/**
 * Thumbnail link component.
 * http://foundation.zurb.com/sites/docs/switch.html
 *
 * @param {Object} props
 * @returns {Object}
 */
export const ThumbnailLink = props => (
  <a className={createClassName(props.className || 'thumbnail', generalClassNames(props))}>
    <img {...props}/>
  </a>
);

ThumbnailLink.propTypes = {
  ...GeneralPropTypes
};
