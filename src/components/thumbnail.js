import React from 'react';

/**
 * Thumbnail component.
 * http://foundation.zurb.com/sites/docs/switch.html
 *
 * @param {Object} props
 * @returns {XML}
 */
export const Thumbnail = props => (
  <img {...props} className={props.className || 'thumbnail'}/>
);

/**
 * Thumbnail link component.
 * http://foundation.zurb.com/sites/docs/switch.html
 *
 * @param {Object} props
 * @returns {XML}
 */
export const ThumbnailLink = props => (
  <a className={props.className || 'thumbnail'}>
    <img {...props}/>
  </a>
);

export default Thumbnail;
