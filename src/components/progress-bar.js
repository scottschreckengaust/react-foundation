import React from 'react';
import check from 'check-types';
import classNames from 'classnames';
import { default as omit } from 'lodash.omit';

export const ProgressColors = {
  SUCCESS: 'success',
  WARNING: 'warning',
  ALERT: 'alert'
};

/**
 * ProgressBar class.
 *
 * @param {Object} props
 * @returns {XML}
 */
export const Progress = props => {
  check.assert.maybe.number(props.minValue, 'ProgressBar.props.minValue must be a number.');
  check.assert.maybe.number(props.maxValue, 'ProgressBar.props.maxValue must be a number.');
  check.assert.maybe.number(props.currentValue, 'ProgressBar.props.currentValue must be a number.');
  check.assert.maybe.string(props.color, 'ProgressBar.props.color must be a string.');

  const {
    minValue = 0,
    maxValue = 100,
    currentValue = 0,
    valueText,
    meter: meterProps = {}
  } = props;

  const className = classNames(
    props.className || 'progress',
    props.color
  );

  const omitProps = [
    'color',
    'minValue',
    'maxValue',
    'currentValue',
    'valueText',
    'meter'
  ];

  return (
    <div {...omit(props, omitProps)}
      className={className}
      role="progressbar"
      aria-valuemin={minValue}
      aria-valuemax={maxValue}
      aria-valuenow={currentValue}
      aria-valuetext={valueText}>
      {meterProps.text ? <ProgressMeterWithText {...meterProps}/> : <ProgressMeter {...meterProps}/>}
    </div>
  );
};

/**
 * ProgressMeter class.
 *
 * @param {Object} props
 * @returns {XML}
 */
export const ProgressMeter = props => (
  <div {...props} className={props.className || 'progress-meter'}></div>
);

/**
 * ProgressMeterWithText class.
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
 * ProgressMeterText class.
 *
 * @param {Object} props
 * @returns {XML}
 */
export const ProgressMeterText = props => (
  <p {...props} className={props.className || 'progress-meter-text'}/>
);

/**
 * ProgressMeterText class.
 *
 * @param {Object} props
 * @returns {XML}
 */
export const NativeProgress = props => {
  check.assert.number(props.maxValue, 'ProgressBar.props.maxValue must be a number.');
  check.assert.number(props.currentValue, 'ProgressBar.props.currentValue must be a number.');
  check.assert.maybe.string(props.color, 'ProgressBar.props.color must be a string.');

  const {
    maxValue = 100,
    currentValue = 0,
  } = props;

  const omitProps = ['maxValue', 'currentValue'];

  return (
    <progress {...omit(props, omitProps)}
      className={classNames(props.className, props.color)}
      max={maxValue}
      value={currentValue}/>
  );
};

// TODO: Add support for native meter

export default Progress;
