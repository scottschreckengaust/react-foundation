import React from 'react';
import check from 'check-types';
import classNames from 'classnames';
import { default as omit } from 'lodash.omit';

let currentId = 0;

/**
 * Switch type enumerable.
 *
 * @type {Object}
 */
export const SwitchTypes = {
  CHECKBOX: 'checkbox',
  RADIO: 'radio'
};

/**
 * Switch size enumerable.
 *
 * @type {Object}
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
 * @returns {XML}
 */
export const Switch = props => {
  check.assert.maybe.string(props.size, 'Switch.props.size must be a string.');
  check.assert.maybe.string(props.id, 'Switch.props.id must be a string.');

  const className = classNames(
    props.className || 'switch',
    props.size
  );

  const switchId = props.id || `switch${currentId++}`;
  const omitProps = ['id', 'size', 'input', 'paddle'];

  // TODO: Consider refactoring this, the rendering a little bit messy...

  return (
    <div {...omit(props, omitProps)} className={className}>
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
 * @returns {XML}
 */
export const SwitchInput = props => {
  check.assert.maybe.string(props.type, 'SwitchInput.props.type must be a string.');

  const omitProps = ['type'];

  return (
    <input {...omit(props, omitProps)} className={props.className || 'switch-input'} type={props.type || SwitchTypes.CHECKBOX}/>
  );
};

/**
 * Switch paddle sub-component.
 *
 * @param {Object} props
 * @returns {XML}
 */
export const SwitchPaddle = props => (
  <label {...props} className={props.className || 'switch-paddle'}/>
);

/**
 * Switch active sub-component.
 *
 * @param {Object} props
 * @returns {XML}
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
 * @returns {XML}
 */
export const SwitchInactive = props => (
  <span {...props} className={props.className || 'switch-inactive'} aria-hidden="true">
    {props.text}
  </span>
);

export default Switch;
