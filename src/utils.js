import { PropTypes } from 'react';
import classNames from 'classnames';
import { default as lodashOmit } from 'lodash.omit';
import { default as lodashValues } from 'lodash.values';
import { Breakpoints, FloatTypes } from './enums';

/**
 * Property types for general properties.
 *
 * @returns {Object}
 */
export const GeneralPropTypes = {
  showFor: PropTypes.oneOf([Breakpoints.MEDIUM, Breakpoints.LARGE]),
  showOnlyFor: PropTypes.oneOf(objectValues(Breakpoints)),
  hideFor: PropTypes.oneOf([Breakpoints.MEDIUM, Breakpoints.LARGE]),
  hideOnlyFor: PropTypes.oneOf(objectValues(Breakpoints)),
  isHidden: PropTypes.bool,
  isInvisible: PropTypes.bool,
  showForLandscape: PropTypes.bool,
  showForPortrait: PropTypes.bool,
  showForSr: PropTypes.bool,
  showOnFocus: PropTypes.bool,
  isClearfix: PropTypes.bool,
  float: PropTypes.oneOf(objectValues(FloatTypes))
};

/**
 * Removes properties by name.
 *
 * @param {Object} props
 * @param {Array} omitProps
 * @returns {Object}
 */
export function removeProps(props, omitProps) {
  return lodashOmit(props, omitProps);
}

/**
 * Creates class names from the given arguments.
 *
 * @param {*} args
 * @returns {string}
 */
export function createClassName(...args) {
  return classNames(...args);
}

/**
 * Parses the general class names from the given properties.
 *
 * @param {Object} props
 * @returns {Object}
 */
export function generalClassNames(props) {
  return {
    'show-for-medium': props.showFor === Breakpoints.MEDIUM,
    'show-for-large': props.showFor === Breakpoints.LARGE,
    'show-for-small-only': props.showOnlyFor === Breakpoints.SMALL,
    'show-for-medium-only': props.showOnlyFor === Breakpoints.MEDIUM,
    'show-for-large-only': props.showOnlyFor === Breakpoints.LARGE,
    'hide-for-medium': props.hideFor === Breakpoints.MEDIUM,
    'hide-for-large': props.hideFor === Breakpoints.LARGE,
    'hide-for-small-only': props.hideOnlyFor === Breakpoints.SMALL,
    'hide-for-medium-only': props.hideOnlyFor === Breakpoints.MEDIUM,
    'hide-for-large-only': props.hideOnlyFor === Breakpoints.LARGE,
    'hide': props.isHidden,
    'invisible': props.isInvisible,
    'show-for-landscape': props.showForLandscape,
    'show-for-portrait': props.showForPortrait,
    'show-for-sr': props.showForSr,
    'show-on-focus': props.showOnFocus,
    'clearfix': props.isClearfix,
    'float-left': props.float === FloatTypes.LEFT,
    'float-center': props.float === FloatTypes.CENTER,
    'float-right': props.float === FloatTypes.RIGHT
  };
}

/**
 * Returns the values for the given object.
 * This method is mainly used for getting the values for enumerables.
 *
 * @param {Object} object
 * @returns {Array}
 */
export function objectValues(object) {
  return lodashValues(object);
}
