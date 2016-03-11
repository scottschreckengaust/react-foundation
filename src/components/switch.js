import React from 'react';
import check from 'check-types'
import classNames from 'classnames';
import { default as omit } from 'lodash.omit';

// Switch type constants.
export const TYPE_CHECKBOX = 'checkbox';
export const TYPE_RADIO = 'radio';

// Switch size constants.
export const SIZE_TINY = 'tiny';
export const SIZE_SMALL = 'small';
export const SIZE_LARGE = 'large';

const omitProps = [
  'input',
  'paddle'
];

/**
 * Switch component.
 * http://foundation.zurb.com/sites/docs/switch.html
 *
 * @param {Object} props
 * @returns {XML}
 */
const Switch = props => {
  check.assert.maybe.string(props.size, 'Switch.props.size must be a string.');

  const className = classNames(
    props.className || 'switch',
    props.size
  );

  return (
    <div {...omit(props, omitProps)} className={className}>
      <SwitchInput {...props.input}/>
      <SwitchPaddle {...props.paddle}/>
    </div>
  );
};

/**
 * Switch input sub-component.
 *
 * @param {Object} props
 * @returns {XML}
 */
export const SwitchInput = props => {
  check.assert.maybe.string(props.type, 'SwitchInput.props.type must be a string.');

  return (
    <input {...omit(props, ['type'])} className={props.className || 'switch-input'} type={props.type || TYPE_CHECKBOX}/>
  );
};

/**
 * Switch paddle sub-component.
 *
 * @param {Object} props
 * @returns {XML}
 */
export const SwitchPaddle = props => (
  <label {...props} className={props.className || 'switch-paddle'}>
    {props.children}
  </label>
);

/**
 * Switch active sub-component.
 *
 * @param {Object} props
 * @returns {XML}
 */
export const SwitchActive = props => (
  <span className={props.className || 'switch-active'} aria-hidden="true">
    {props.children}
  </span>
);

/**
 * Switch inactive sub-component.
 *
 * @param {Object} props
 * @returns {XML}
 */
export const SwitchInactive = props => (
  <span className={props.className || 'switch-inactive'} aria-hidden="true">
    {props.children}
  </span>
);

export default Switch;
