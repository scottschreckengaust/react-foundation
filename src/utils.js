import check from 'check-types';
import classNames from 'classnames';
import { default as omit } from 'lodash.omit';

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
 * Removes properties by name.
 *
 * @param {Object} props
 * @param {Array} omitProps
 * @returns {Object}
 */
export function removeProps(props, omitProps) {
  check.assert.array(omitProps, 'Argument "omitProps" must be an array.');

  return omit(props, omitProps);
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
  check.assert.maybe.boolean(props.showForMedium, 'Property "showForMedium" must be a boolean.');
  check.assert.maybe.boolean(props.showForLarge, 'Property "showForLarge" must be a boolean.');
  check.assert.maybe.string(props.showOnlyFor, 'Property "showOnlyFor" must be a string.');
  check.assert.maybe.boolean(props.hideForMedium, 'Property "hideForMedium" must be a boolean.');
  check.assert.maybe.boolean(props.hideForLarge, 'Property "hideForLarge" must be a boolean.');
  check.assert.maybe.string(props.hideOnlyFor, 'Property "hideOnlyFor" must be a string.');
  check.assert.maybe.boolean(props.isHidden, 'Property "isHidden" must be a boolean.');
  check.assert.maybe.boolean(props.isInvisible, 'Property "isInvisible" must be a boolean.');
  check.assert.maybe.boolean(props.showForLandscape, 'Property "showForLandscape" must be a boolean.');
  check.assert.maybe.boolean(props.showForPortrait, 'Property "showForPortrait" must be a boolean.');
  check.assert.maybe.boolean(props.showForSr, 'Property "showForSr" must be a boolean.');
  check.assert.maybe.boolean(props.showOnFocus, 'Property "showOnFocus" must be a boolean.');
  check.assert.maybe.boolean(props.isClearfix, 'Property "isClearfix" must be a boolean.');
  check.assert.maybe.string(props.float, 'Property "float" must be a string.');

  return {
    // Visibility props
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
    // Float props
    'clearfix': props.isClearfix,
    'float-left': props.float === FloatTypes.LEFT,
    'float-center': props.float === FloatTypes.CENTER,
    'float-right': props.float === FloatTypes.RIGHT
  };
}
