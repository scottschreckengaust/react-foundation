import React from 'react';
import { GeneralPropTypes, createClassName, generalClassNames } from '../utils';

/**
 * Close button component.
 * http://foundation.zurb.com/sites/docs/close-button.html
 *
 * @param {Object} props
 * @returns {Object}
 */
export const CloseButton = props => (
  <button {...props} className={createClassName(props.className || 'close-button', generalClassNames(props))}/>
);

CloseButton.propTypes = {
  ...GeneralPropTypes
};
