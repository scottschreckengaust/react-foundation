// @flow

import PropTypes from "prop-types"
import classNames from "classnames"
import { type FloatTypesUnion, type ExtendedBreakpointsUnion } from "./enums"
import {
  Breakpoints,
  FloatTypes,
  HorizontalAlignments,
  VerticalAlignments,
  SpaceControls,
  ExtendedBreakpoints,
} from "./enums"

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
  float: PropTypes.oneOf(objectValues(FloatTypes)),
}

export type TGeneralPropTypes = {
  showFor: typeof Breakpoints.MEDIUM | typeof Breakpoints.LARGE,
  showOnlyFor: BreakpointsUnion,
  hideFor: typeof Breakpoints.MEDIUM | typeof Breakpoints.LARGE,
  hideOnlyFor: BreakpointsUnion,
  isHidden: boolean,
  isInvisible: boolean,
  showForLandscape: boolean,
  showForPortrait: boolean,
  showForSr: boolean,
  showOnFocus: boolean,
  isClearfix: boolean,
  float: FloatTypesUnion,
}

/**
 * Creates class names from the given arguments.
 *
 * @param {*} args
 * @returns {string}
 */
export function createClassName(...args: Array<any>): string {
  return classNames(...args)
}

export type generalClassNamesProps = {
  showFor: string,
  showOnlyFor: string,
  hideFor: string,
  hideOnlyFor: string,
  isHidden: Boolean,
  isInvisible: Boolean,
  showForLandscape: Boolean,
  showForPortrait: Boolean,
  showForSr: Boolean,
  showOnFocus: Boolean,
  isClearfix: Boolean,
  float: FloatTypesUnion,
}

/**
 * Parses the general class names from the given properties.
 *
 * @param {Object} props
 * @returns {Object}
 */
export function generalClassNames(props: Object): Object {
  return {
    "show-for-medium": props.showFor === Breakpoints.MEDIUM,
    "show-for-large": props.showFor === Breakpoints.LARGE,
    "show-for-small-only": props.showOnlyFor === Breakpoints.SMALL,
    "show-for-medium-only": props.showOnlyFor === Breakpoints.MEDIUM,
    "show-for-large-only": props.showOnlyFor === Breakpoints.LARGE,
    "hide-for-medium": props.hideFor === Breakpoints.MEDIUM,
    "hide-for-large": props.hideFor === Breakpoints.LARGE,
    "hide-for-small-only": props.hideOnlyFor === Breakpoints.SMALL,
    "hide-for-medium-only": props.hideOnlyFor === Breakpoints.MEDIUM,
    "hide-for-large-only": props.hideOnlyFor === Breakpoints.LARGE,
    hide: props.isHidden,
    invisible: props.isInvisible,
    "show-for-landscape": props.showForLandscape,
    "show-for-portrait": props.showForPortrait,
    "show-for-sr": props.showForSr,
    "show-on-focus": props.showOnFocus,
    clearfix: props.isClearfix,
    "float-left": props.float === FloatTypes.LEFT,
    "float-center": props.float === FloatTypes.CENTER,
    "float-right": props.float === FloatTypes.RIGHT,
  }
}

/**
 * Returns the keys for the given object.
 * This method is used for getting the keys for prop types.
 *
 * @param {Object} object
 * @returns {Array}
 */
export function objectKeys(object: Object) {
  return Object.keys(object)
}

/**
 * Returns the values for the given object.
 * This method is used for getting the values for enumerables.
 *
 * @param {Object} object
 * @returns {Array}
 */
export function objectValues(object: Object) {
  const values = []

  for (const property in object) {
    if (object.hasOwnProperty(property)) {
      values.push(object[property])
    }
  }

  return values
}

/**
 * Removes properties from the given object.
 * This method is used for removing valid attributes from component props prior to rendering.
 *
 * @param {Object} object
 * @param {Array} remove
 * @returns {Object}
 */

export function removeProps(object: Object, remove: Array<string>): Object {
  const result = {}

  for (const property in object) {
    if (object.hasOwnProperty(property) && remove.indexOf(property) === -1) {
      result[property] = object[property]
    }
  }

  return result
}

/**
 * Returns whether or not the given value is defined.
 *
 * @param {*} value
 * @returns {boolean}
 */
export function isDefined(value: string | number) {
  return typeof value !== "undefined"
}

/**
 * Adds a breakpoint to a class if breakpoint is specified.
 *
 * @param {String} prop
 * @param {String} size
 * @returns {string}
 */
export function addBreakpoint(prop: string, size: string) {
  return size === "all" ? prop : `${size}-${prop}`
}

/**
 * Sets direction for grid and gutters (horizontal or vertical).
 *
 * @param {boolean} isVertical
 * @param {String} gutters
 * @returns {string}
 */
export function setDirection(isVertical: boolean, gutters: string) {
  if (gutters) {
    return isVertical === true ? `grid-${gutters}-y` : `grid-${gutters}-x`
  } else {
    return isVertical === true ? "grid-y" : "grid-x"
  }
}

// Flexbox Utilities

/**
 * Property types for flexbox utilities.
 *
 * @returns {Object}
 */

export const FlexboxPropTypes = {
  alignX: PropTypes.oneOf(objectValues(HorizontalAlignments)),
  alignY: PropTypes.oneOf(objectValues(VerticalAlignments)),
  selfAlignX: PropTypes.oneOf(objectValues(HorizontalAlignments)),
  selfAlignY: PropTypes.oneOf(objectValues(VerticalAlignments)),
  centerAlign: PropTypes.bool,
  flexContainer: PropTypes.bool,
  flexDirRow: PropTypes.oneOf(objectValues(ExtendedBreakpoints)),
  flexDirRowRev: PropTypes.oneOf(objectValues(ExtendedBreakpoints)),
  flexDirCol: PropTypes.oneOf(objectValues(ExtendedBreakpoints)),
  flexDirColRev: PropTypes.oneOf(objectValues(ExtendedBreakpoints)),
  flexChild: PropTypes.oneOf(objectValues(SpaceControls)),
  flexOrder: PropTypes.number,
  flexOrderSmall: PropTypes.number,
  flexOrderMedium: PropTypes.number,
  flexOrderLarge: PropTypes.number,
}

type HorizontalAlignmentsUnion = "center" | "right" | "justify" | "spaced"
type VerticalAlignmentsUnion = "top" | "middle" | "bottom" | "stretch"
type SpaceControlsUnion = "auto" | "grow" | "shrink"

export type flexboxClassNamesProps = {
  alignX: HorizontalAlignmentsUnion,
  alignY: VerticalAlignmentsUnion,
  selfAlignX: HorizontalAlignmentsUnion,
  selfAlignY: VerticalAlignmentsUnion,
  centerAlign: Boolean,
  flexContainer: Boolean,
  flexDirRow: ExtendedBreakpointsUnion,
  flexDirRowRev: ExtendedBreakpointsUnion,
  flexDirCol: ExtendedBreakpointsUnion,
  flexDirColRev: ExtendedBreakpointsUnion,
  flexChild: SpaceControlsUnion,
  flexOrder: number,
  flexOrderSmall: number,
  flexOrderMedium: number,
  flexOrderLarge: number,
}

/**
 * Parses the flexbox class names from the given properties.
 *
 * @param {Object} props
 * @returns {Object}
 */
export function flexboxClassNames(props: flexboxClassNamesProps) {
  const flexClassNames = {
    "flex-container": props.flexContainer,
    "align-center-middle": props.centerAlign,
  }

  if (isDefined(props.alignX)) flexClassNames[`align-${props.alignX}`] = true
  if (isDefined(props.alignY)) flexClassNames[`align-${props.alignY}`] = true
  if (isDefined(props.flexDirRow))
    flexClassNames[addBreakpoint("flex-dir-row", props.flexDirRow)] = true
  if (isDefined(props.flexDirRowRev))
    flexClassNames[
      addBreakpoint("flex-dir-row-reverse", props.flexDirRowRev)
    ] = true
  if (isDefined(props.flexDirCol))
    flexClassNames[addBreakpoint("flex-dir-column", props.flexDirCol)] = true
  if (isDefined(props.flexDirColRev))
    flexClassNames[
      addBreakpoint("flex-dir-column-reverse", props.flexDirColRev)
    ] = true
  if (isDefined(props.flexChild))
    flexClassNames[`flex-child-${props.flexChild}`] = true
  if (isDefined(props.flexOrder))
    flexClassNames[`order-${props.flexOrder}`] = true
  if (isDefined(props.flexOrderSmall))
    flexClassNames[`small-order-${props.flexOrder}`] = true
  if (isDefined(props.flexOrderMedium))
    flexClassNames[`medium-order-${props.flexOrder}`] = true
  if (isDefined(props.flexOrderLarge))
    flexClassNames[`large-order-${props.flexOrder}`] = true

  return flexClassNames
}
