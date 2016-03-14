import React from 'react';
import check from 'check-types';
import { createClassName, generalClassNames, removeProps } from '../utils';

/**
 * Progress colors enumerable.
 *
 * @type {{SECONDARY: string, SUCCESS: string, WARNING: string, ALERT: string}}
 */
export const ProgressColors = {
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  WARNING: 'warning',
  ALERT: 'alert'
};

/**
 * Progress component.
 * http://foundation.zurb.com/sites/docs/progress-bar.html
 *
 * @param {Object} props
 * @returns {Object}
 */
export const Progress = props => {
  check.assert.maybe.number(props.min, 'Property "min" must be a number.');
  check.assert.maybe.number(props.max, 'Property "max" must be a number.');
  check.assert.maybe.number(props.value, 'Property "value" must be a number.');
  check.assert.maybe.string(props.color, 'Property "color" must be a string.');

  const { meter: meterProps = {} } = props;

  const className = createClassName(
    props.className || 'progress',
    props.color,
    generalClassNames(props)
  );

  if (props.value) {
    meterProps.style = meterProps.style || {};
    meterProps.style.width = `${props.value}%`;
  }

  return (
    <div {...removeProps(props, ['color', 'value'])}
      className={className}
      role="progressbar"
      aria-valuemin={props.min}
      aria-valuemax={props.max}
      aria-valuenow={props.value}
      aria-valuetext={props.valueText}>
      {meterProps.text ? <ProgressMeterWithText {...meterProps} /> : <ProgressMeter {...meterProps} />}
    </div>
  );
};

/**
 * Progress meter sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const ProgressMeter = props => (
  <div {...props} className={props.className || 'progress-meter'} />
);

/**
 * Progress meter with text sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const ProgressMeterWithText = props => (
  <span {...props} className={props.className || 'progress-meter'}>
    <ProgressMeterText>{props.text}</ProgressMeterText>
  </span>
);

/**
 * Progress meter text sub-component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const ProgressMeterText = props => (
  <p {...props} className={props.className || 'progress-meter-text'} />
);

/**
 * Native progress component.
 * http://foundation.zurb.com/sites/docs/progress-bar.html#native-progress
 *
 * @param {Object} props
 * @returns {Object}
 */
export const NativeProgress = props => {
  check.assert.maybe.number(props.max, 'Property "max" must be a number.');
  check.assert.maybe.number(props.value, 'Property "value" must be a number.');
  check.assert.maybe.string(props.color, 'Property "color" must be a string.');

  const className = createClassName(props.className, props.color, generalClassNames(props));

  return (
    <progress {...removeProps(props, ['color'])} className={className} />
  );
};

// TODO: Consider adding support for native meter.

export default Progress;
