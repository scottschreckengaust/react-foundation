import React from 'react';

/**
 * Hideable utility-component.
 *
 * @param {{isVisible: boolean}} props
 * @returns {XML}
 */
export const Hideable = props => (
  <div {...props} style={{ display: props.isVisible ? 'block' : 'none' }}></div>
);
