// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { HorizontalAlignments, VerticalAlignments } from '../enums';
import { GeneralPropTypes, FlexboxPropTypes, createClassName, generalClassNames, removeProps, objectKeys, isDefined, type TGeneralPropTypes, type flexboxClassNamesProps, type HorizontalAlignmentsUnion, type VerticalAlignmentsUnion } from '../utils';

/**
 * Row component.
 *
 * @param {Object} props
 * @returns {Object}
 */

type RowProps = {
  ...TGeneralPropTypes,
  ...flexboxClassNamesProps,
  noDefaultClassName: string,
  upOnSmall: number,
  upOnMedium: number,
  upOnLarge: number,
  horizontalAlignment?: HorizontalAlignmentsUnion,
  verticalAlignment?: VerticalAlignmentsUnion,
  unstackOnSmall?: Boolean,
  unstackOnMedium?: Boolean,
  unstackOnLarge?: Boolean,
  collapseOnSmall?: Boolean,
  collapseOnMedium?: Boolean,
  collapseOnLarge?: Boolean,
  uncollapseOnSmall?: Boolean,
  uncollapseOnMedium?: Boolean,
  uncollapseOnLarge?: Boolean,
  isCollapsed?: Boolean,
  isExpanded?: Boolean,
  isColumn?: Boolean,
}

export const Row = (props: RowProps) => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'row',
    props.className,
    isDefined(props.upOnSmall) ? `small-up-${props.upOnSmall}` : null,
    isDefined(props.upOnMedium) ? `medium-up-${props.upOnMedium}` : null,
    isDefined(props.upOnLarge) ? `large-up-${props.upOnLarge}` : null,
    {
      'align-right': props.horizontalAlignment === HorizontalAlignments.RIGHT,
      'align-center': props.horizontalAlignment === HorizontalAlignments.CENTER,
      'align-justify': props.horizontalAlignment === HorizontalAlignments.JUSTIFY,
      'align-spaced': props.horizontalAlignment === HorizontalAlignments.SPACED,
      'align-top': props.verticalAlignment === VerticalAlignments.TOP,
      'align-middle': props.verticalAlignment === VerticalAlignments.MIDDLE,
      'align-bottom': props.verticalAlignment === VerticalAlignments.BOTTOM,
      'align-stretch': props.verticalAlignment === VerticalAlignments.STRETCH,
      'small-unstack': props.unstackOnSmall,
      'medium-unstack': props.unstackOnMedium,
      'large-unstack': props.unstackOnLarge,
      'small-collapse': props.collapseOnSmall,
      'medium-collapse': props.collapseOnMedium,
      'large-collapse': props.collapseOnLarge,
      'small-uncollapse': props.uncollapseOnSmall,
      'medium-uncollapse': props.uncollapseOnMedium,
      'large-uncollapse': props.uncollapseOnLarge,
      'collapse': props.isCollapsed,
      'expanded': props.isExpanded,
      'column': props.isColumn
    },
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(Row.propTypes));

  return <div {...passProps} className={className}/>;
};

Row.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes,
  upOnSmall: PropTypes.number,
  upOnMedium: PropTypes.number,
  upOnLarge: PropTypes.number,
  horizontalAlignment: PropTypes.string,
  verticalAlignment: PropTypes.string,
  unstackOnSmall: PropTypes.bool,
  unstackOnMedium: PropTypes.bool,
  unstackOnLarge: PropTypes.bool,
  collapseOnSmall: PropTypes.bool,
  collapseOnMedium: PropTypes.bool,
  collapseOnLarge: PropTypes.bool,
  uncollapseOnSmall: PropTypes.bool,
  uncollapseOnMedium: PropTypes.bool,
  uncollapseOnLarge: PropTypes.bool,
  isCollapsed: PropTypes.bool,
  isExpanded: PropTypes.bool,
  isColumn: PropTypes.bool
};

/**
 * Column component.
 *
 * @param {Object} props
 * @returns {Object}
 */

type ColumnProps = {
  ...TGeneralPropTypes,
  ...flexboxClassNamesProps,
  noDefaultClassName: string,
  isColumn: Boolean,
  small: number,
  medium: number,
  large: number,
  offsetOnSmall?: number,
  offsetOnMedium?: number,
  offsetOnLarge?: number,
  pushOnSmall?: number,
  pushOnMedium?: number,
  pushOnLarge?: number,
  pullOnSmall?: number,
  pullOnMedium?: number,
  pullOnLarge?: number,
  orderOnSmall?: number,
  orderOnMedium?: number,
  orderOnLarge?: number,
  centerOnSmall?: Boolean,
  centerOnMedium?: Boolean,
  centerOnLarge?: Boolean,
  uncenterOnSmall?: Boolean,
  uncenterOnMedium?: Boolean,
  uncenterOnLarge?: Boolean,
  expandOnSmall?: Boolean,
  expandOnMedium?: Boolean,
  expandOnLarge?: Boolean,
  isShrunk?: Boolean,
  isLast?: Boolean,
}
export const Column = (props: ColumnProps) => {
  const defaultClassName = props.isColumn ? 'column' : 'columns';
  const className = createClassName(
    props.noDefaultClassName ? null : defaultClassName,
    props.className,
    props.small ? `small-${props.small}` : null,
    props.medium ? `medium-${props.medium}` : null,
    props.large ? `large-${props.large}` : null,
    isDefined(props.offsetOnSmall) ? `small-offset-${props.offsetOnSmall}` : null,
    isDefined(props.offsetOnMedium) ? `medium-offset-${props.offsetOnMedium}` : null,
    isDefined(props.offsetOnLarge) ? `large-offset-${props.offsetOnLarge}` : null,
    isDefined(props.pushOnSmall) ? `small-push-${props.pushOnSmall}` : null,
    isDefined(props.pushOnMedium) ? `medium-push-${props.pushOnMedium}` : null,
    isDefined(props.pushOnLarge) ? `large-push-${props.pushOnLarge}` : null,
    isDefined(props.pullOnSmall) ? `small-pull-${props.pullOnSmall}` : null,
    isDefined(props.pullOnMedium) ? `medium-pull-${props.pullOnMedium}` : null,
    isDefined(props.pullOnLarge) ? `large-pull-${props.pullOnLarge}` : null,
    isDefined(props.orderOnSmall) ? `small-order-${props.orderOnSmall}` : null,
    isDefined(props.orderOnMedium) ? `medium-order-${props.orderOnMedium}` : null,
    isDefined(props.orderOnLarge) ? `large-order-${props.orderOnLarge}` : null,
    {
      'small-centered': props.centerOnSmall,
      'medium-centered': props.centerOnMedium,
      'large-centered': props.centerOnLarge,
      'small-uncentered': props.uncenterOnSmall,
      'medium-uncentered': props.uncenterOnMedium,
      'large-uncentered': props.uncenterOnLarge,
      'small-expand': props.expandOnSmall,
      'medium-expand': props.expandOnMedium,
      'large-expand': props.expandOnLarge,
      'shrink': props.isShrunk,
      'end': props.isLast
    },
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(Column.propTypes));

  return <div {...passProps} className={className}/>;
};

Column.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes,
  small: PropTypes.number,
  medium: PropTypes.number,
  large: PropTypes.number,
  offsetOnSmall: PropTypes.number,
  offsetOnMedium: PropTypes.number,
  offsetOnLarge: PropTypes.number,
  pushOnSmall: PropTypes.number,
  pushOnMedium: PropTypes.number,
  pushOnLarge: PropTypes.number,
  pullOnSmall: PropTypes.number,
  pullOnMedium: PropTypes.number,
  pullOnLarge: PropTypes.number,
  orderOnSmall: PropTypes.number,
  orderOnMedium: PropTypes.number,
  orderOnLarge: PropTypes.number,
  centerOnSmall: PropTypes.bool,
  centerOnMedium: PropTypes.bool,
  centerOnLarge: PropTypes.bool,
  uncenterOnSmall: PropTypes.bool,
  uncenterOnMedium: PropTypes.bool,
  uncenterOnLarge: PropTypes.bool,
  expandOnSmall: PropTypes.bool,
  expandOnMedium: PropTypes.bool,
  expandOnLarge: PropTypes.bool,
  isShrunk: PropTypes.bool,
  isLast: PropTypes.bool
};
