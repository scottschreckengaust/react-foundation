import React from 'react';
import { GeneralPropTypes, createClassName, generalClassNames } from '../utils';

/**
 * Top bar component.
 * http://foundation.zurb.com/sites/docs/top-bar.html
 *
 * @param {Object} props
 * @returns {Object}
 */
export const TopBar = props => (
  <div {...props} className={createClassName(props.className || 'top-bar', generalClassNames(props))} />
);

TopBar.propTypes = {
  ...GeneralPropTypes
};

/**
 * Top bar title sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const TopBarTitle = props => (
  <div {...props} className={createClassName(props.className || 'top-bar-title', generalClassNames(props))} />
);

TopBarTitle.propTypes = {
  ...GeneralPropTypes
};

/**
 * Top bar left sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const TopBarLeft = props => (
  <div {...props} className={createClassName(props.className || 'top-bar-left', generalClassNames(props))} />
);

TopBarLeft.propTypes = {
  ...GeneralPropTypes
};

/**
 * Top bar right sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const TopBarRight = props => (
  <div {...props} className={createClassName(props.className || 'top-bar-right', generalClassNames(props))} />
);

TopBarRight.propTypes = {
  ...GeneralPropTypes
};
