import React from 'react';
import check from 'check-types';
import classNames from 'classnames';
import { default as omit } from 'lodash.omit';

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
 * @returns {XML}
 */
export const Progress = props => {
  check.assert.maybe.number(props.min, 'ProgressBar.props.min must be a number.');
  check.assert.maybe.number(props.max, 'ProgressBar.props.max must be a number.');
  check.assert.maybe.number(props.value, 'ProgressBar.props.value must be a number.');
  check.assert.maybe.string(props.color, 'ProgressBar.props.color must be a string.');

  const { meter: meterProps = {} } = props;

  const className = classNames(
    props.className || 'progress',
    props.color
  );

  const omitProps = [
    'min',
    'max',
    'value',
    'valueText',
    'color',
    'meter'
  ];

  if (props.value) {
    meterProps.style = meterProps.style || {};
    meterProps.style.width = `${props.value}%`;
  }

  return (
    <div {...omit(props, omitProps)}
      className={className}
      role="progressbar"
      aria-valuemin={props.min}
      aria-valuemax={props.max}
      aria-valuenow={props.value}
      aria-valuetext={props.valueText}>
      {meterProps.text ? <ProgressMeterWithText {...meterProps}/> : <ProgressMeter {...meterProps}/>}
    </div>
  );
};

/**
 * Progress meter sub-component.
 *
 * @param {Object} props
 * @returns {XML}
 */
export const ProgressMeter = props => (
  <div {...props} className={props.className || 'progress-meter'}></div>
);

/**
 * Progress meter with text sub-component.
 *
 * @param {Object} props
 * @returns {XML}
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
 * @returns {XML}
 */
export const ProgressMeterText = props => (
  <p {...props} className={props.className || 'progress-meter-text'}/>
);

/**
 * Native progress component.
 * http://foundation.zurb.com/sites/docs/progress-bar.html#native-progress
 *
 * @param {Object} props
 * @returns {XML}
 */
export const NativeProgress = props => {
  check.assert.maybe.number(props.max, 'ProgressBar.props.max must be a number.');
  check.assert.maybe.number(props.value, 'ProgressBar.props.value must be a number.');
  check.assert.maybe.string(props.color, 'ProgressBar.props.color must be a string.');

  const className = classNames(props.className, props.color);

  const omitProps = ['color'];

  return (
    <progress {...omit(props, omitProps)} className={className}/>
  );
};

// TODO: Consider adding support for native meter.

export default Progress;
