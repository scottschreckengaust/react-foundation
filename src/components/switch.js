import React, { PropTypes } from 'react';
import { SwitchSizes, SwitchInputTypes } from '../enums';
import { GeneralPropTypes, createClassName, generalClassNames, removeProps, objectValues } from '../utils';

let currentId = 0;

/**
 * Switch component.
 * http://foundation.zurb.com/sites/docs/switch.html
 *
 * @param {Object} props
 * @returns {Object}
 */
export const Switch = props => {
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

Switch.propTypes = {
  ...GeneralPropTypes,
  size: PropTypes.oneOf(objectValues(SwitchSizes)),
  id: PropTypes.string
};

/**
 * Switch input sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const SwitchInput = props => {
  return (
    <input {...removeProps(props, ['type'])}
      className={props.className || 'switch-input'}
      type={props.type || SwitchInputTypes.CHECKBOX}/>
  );
};

SwitchInput.propTypes = {
  type: PropTypes.oneOf(objectValues(SwitchInputTypes)),
  ...GeneralPropTypes
};

/**
 * Switch paddle sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const SwitchPaddle = props => (
  <label {...props} className={props.className || 'switch-paddle'}/>
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
