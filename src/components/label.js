import React from 'react';
import check from 'check-types';
import classNames from 'classnames';
import { default as omit } from 'lodash.omit';

/**
 * Label color enumerable.
 *
 * @type {Object}
 */
export const LabelColors = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  WARNING: 'warning',
  ALERT: 'alert'
};

/**
 * Label component.
 * http://foundation.zurb.com/sites/docs/label.html
 *
 * @param {Object} props
 * @returns {XML}
 */
export const Label = props => {
  check.assert.maybe.string(props.color, 'Label.props.color must be a string.');

  const className = classNames(
    props.className || 'label',
    props.color
  );

  const omitProps = ['color'];

  return (
    <span {...omit(props, omitProps)} className={className}/>
  );
};

export default Label;
