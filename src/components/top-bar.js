import React from 'react';
import { Hideable } from './utils';

/**
 * Top bar component.
 * http://foundation.zurb.com/sites/docs/top-bar.html
 *
 * @param {Object} props
 * @returns {XML}
 */
export const TopBar = props => (
  <Hideable {...props} className={props.className || 'top-bar'}/>
);

/**
 * Top bar title sub-component.
 *
 * @param {Object} props
 * @returns {XML}
 */
export const TopBarTitle = props => (
  <div {...props} className={props.className || 'top-bar-title'}></div>
);

/**
 * Top bar left sub-component.
 *
 * @param {Object} props
 * @returns {XML}
 */
export const TopBarLeft = props => (
  <div {...props} className={props.className || 'top-bar-left'}></div>
);

/**
 * Top bar right sub-component.
 *
 * @param {Object} props
 * @returns {XML}
 */
export const TopBarRight = props => (
  <div {...props} className={props.className || 'top-bar-right'}></div>
);
