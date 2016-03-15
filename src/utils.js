import { PropTypes } from 'react';
import classNames from 'classnames';
import { default as lodashHas } from 'lodash.has';
import { default as lodashOmit } from 'lodash.omit';
import { default as lodashValues } from 'lodash.values';

/**
 * Breakpoints enumerable.
 *
 * @type {{SMALL: string, MEDIUM: string, LARGE: string, XLARGE: string, XXLARGE: string}}
 */
export const Breakpoints = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  XLARGE: 'xlarge',
  XXLARGE: 'xxlarge'
};

/**
 * Horizontal alignment enumerable.
 *
 * @type {{CENTER: string, RIGHT: string, JUSTIFY: string, SPACED: string}}
 */
export const HorizontalAlignments = {
  CENTER: 'center',
  RIGHT: 'right',
  JUSTIFY: 'justify',
  SPACED: 'spaced'
};

/**
 * Vertical alignment enumerable.
 *
 * @type {{TOP: string, MIDDLE: string, BOTTOM: string, STRETCH: string}}
 */
export const VerticalAlignments = {
  TOP: 'top',
  MIDDLE: 'middle',
  BOTTOM: 'bottom',
  STRETCH: 'stretch'
};

/**
 * Float types enumerable.
 *
 * @type {{LEFT: string, CENTER: string, RIGHT: string}}
 */
export const FloatTypes = {
  LEFT: 'left',
  CENTER: 'center',
  RIGHT: 'right'
};

/**
 * Property types for general properties.
 *
 * @returns {Object}
 */
export const GeneralPropTypes = {
  showForMedium: PropTypes.bool,
  showForLarge: PropTypes.bool,
  showOnlyFor: PropTypes.oneOf(objectValues(Breakpoints)),
  hideForMedium: PropTypes.bool,
  hideForLarge: PropTypes.bool,
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
    'show-for-medium': props.showForMedium,
    'show-for-large': props.showForLarge,
    'show-for-small-only': props.showOnlyFor === Breakpoints.SMALL,
    'show-for-medium-only': props.showOnlyFor === Breakpoints.MEDIUM,
    'show-for-large-only': props.showOnlyFor === Breakpoints.LARGE,
    'hide-for-medium': props.hideForMedium,
    'hide-for-large': props.hideForLarge,
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
 * Returns whether the given object has a specific value.
 * You can use key paths such as 'foo.bar[1]' for the sake of simplicity.
 *
 * @param {Object} object
 * @param {string} key
 */
export function objectHasValue(object, key) {
  return lodashHas(object, key);
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
