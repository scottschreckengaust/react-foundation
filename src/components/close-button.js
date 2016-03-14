import React from 'react';
import { createClassName, generalClassNames } from '../utils';

/**
 * Close button component.
 * http://foundation.zurb.com/sites/docs/close-button.html
 *
 * @param {Object} props
 * @returns {Object}
 */
export const CloseButton = props => {
  const className = createClassName(props.className || 'close-button', generalClassNames(props));

  return (
    <button {...props} className={className} />
  );
};

// TODO: Add support for closable elements.

export default CloseButton;
