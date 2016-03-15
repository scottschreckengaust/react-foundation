import React, { PropTypes } from 'react';
import { GeneralPropTypes, createClassName, generalClassNames, removeProps, objectValues } from '../utils';

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

Progress.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number,
  color: PropTypes.oneOf(objectValues(ProgressColors)),
  ...GeneralPropTypes
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
  return (
    <progress {...removeProps(props, ['color'])}
      className={createClassName(props.className, props.color, generalClassNames(props))} />
  );
};

NativeProgress.propTypes = {
  max: PropTypes.number,
  value: PropTypes.number,
  color: PropTypes.oneOf(objectValues(ProgressColors)),
  ...GeneralPropTypes
};

// TODO: Consider adding support for native meter.
