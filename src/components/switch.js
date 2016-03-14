import React from 'react';
import check from 'check-types';
import { createClassName, generalClassNames, removeProps } from '../utils';

let currentId = 0;

/**
 * Switch type enumerable.
 *
 * @type {{CHECKBOX: string, RADIO: string}}
 */
export const SwitchTypes = {
  CHECKBOX: 'checkbox',
  RADIO: 'radio'
};

/**
 * Switch size enumerable.
 *
 * @type {{TINY: string, SMALL: string, LARGE: string}}
 */
export const SwitchSizes = {
  TINY: 'tiny',
  SMALL: 'small',
  LARGE: 'large'
};

/**
 * Switch component.
 * http://foundation.zurb.com/sites/docs/switch.html
 *
 * @param {Object} props
 * @returns {Object}
 */
export const Switch = props => {
  check.assert.maybe.string(props.size, 'Property "size" must be a string.');
  check.assert.maybe.string(props.id, 'Property "id" must be a string.');

  const className = createClassName(
    props.className || 'switch',
    props.size,
    generalClassNames(props)
  );

  const switchId = props.id || `switch${currentId++}`;

  // TODO: Consider refactoring this, the rendering a little bit messy...

  return (
    <div {...removeProps(props, ['id'])} className={className}>
      <SwitchInput {...props.input} id={switchId}/>
      <SwitchPaddle {...props.paddle} htmlFor={switchId}>
        {props.active ? <SwitchActive {...props.active}/> : null}
        {props.inactive ? <SwitchInactive {...props.inactive}/> : null}
      </SwitchPaddle>
    </div>
  );
};

/**
 * Switch input sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const SwitchInput = props => {
  check.assert.maybe.string(props.type, 'Property "type" must be a string.');

  return (
    <input {...removeProps(props, ['type'])}
      className={props.className || 'switch-input'}
      type={props.type || SwitchTypes.CHECKBOX} />
  );
};

/**
 * Switch paddle sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const SwitchPaddle = props => (
  <label {...props} className={props.className || 'switch-paddle'} />
);

/**
 * Switch active sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const SwitchActive = props => (
  <span {...props} className={props.className || 'switch-active'} aria-hidden="true">
    {props.text}
  </span>
);

/**
 * Switch inactive sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const SwitchInactive = props => (
  <span {...props} className={props.className || 'switch-inactive'} aria-hidden="true">
    {props.text}
  </span>
);

export default Switch;
