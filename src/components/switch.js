import React from 'react';
import classNames from 'classnames';

// Switch type constants.
export const TYPE_CHECKBOX = 'checkbox';
export const TYPE_RADIO = 'radio';

// Switch size constants.
export const SIZE_TINY = 'tiny';
export const SIZE_SMALL = 'small';
export const SIZE_LARGE = 'large';

/**
 * Switch component.
 * http://foundation.zurb.com/sites/docs/switch.html
 *
 * @param {Object} props
 * @returns {XML}
 */
export const Switch = props => {
  const className = classNames(
    props.className || 'switch',
    props.size
  );

  return (
    <div {...props} className={className}>
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
export const SwitchInput = props => (
  <input {...props} className={props.className || 'switch-input'} type={props.type || TYPE_CHECKBOX}/>
);

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
