import React from 'react';

/**
 * Close button component.
 * http://foundation.zurb.com/sites/docs/close-button.html
 *
 * @param {Object} props
 * @returns {XML}
 */
export const CloseButton = props => (
  <button {...props} className={props.className || 'close-button'}/>
);

// TODO: Add support for closable elements.
