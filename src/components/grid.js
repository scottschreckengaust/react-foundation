import React, { PropTypes } from 'react';
import {
  HorizontalAlignments,
  VerticalAlignments,
  GeneralPropTypes,
  objectHasValue,
  createClassName,
  generalClassNames,
  removeProps
} from '../utils';

/**
 * Row component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const Row = props => {
  const className = createClassName(
    props.className || 'row',
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
      'column': props.isColumn,
      'expanded': props.isExpanded
    },
    generalClassNames(props)
  );

  return (
    <div {...props} className={className} />
  );
};

Row.propTypes = {
  horizontalAlignment: PropTypes.string,
  verticalAlignment: PropTypes.string,
  unstackOnSmall: PropTypes.bool,
  unstackOnMedium: PropTypes.bool,
  unstackOnLarge: PropTypes.bool,
  isColumn: PropTypes.bool,
  isExpanded: PropTypes.bool,
  ...GeneralPropTypes
};

/**
 * Column component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const Column = props => {
  const className = createClassName(
    props.className || 'columns',
    props.small ? `small-${props.small}` : null,
    props.medium ? `medium-${props.medium}` : null,
    props.large ? `large-${props.large}` : null,
    objectHasValue(props, 'offset.small') ? `small-offset-${props.offset.small}` : null,
    objectHasValue(props, 'offset.medium') ? `medium-offset-${props.offset.medium}` : null,
    objectHasValue(props, 'offset.large') ? `large-offset-${props.offset.large}` : null,
    objectHasValue(props, 'push.small') ? `small-push-${props.push.small}` : null,
    objectHasValue(props, 'push.medium') ? `medium-push-${props.push.medium}` : null,
    objectHasValue(props, 'push.large') ? `large-push-${props.push.large}` : null,
    objectHasValue(props, 'pull.small') ? `small-pull-${props.pull.small}` : null,
    objectHasValue(props, 'pull.medium') ? `medium-pull-${props.pull.medium}` : null,
    objectHasValue(props, 'pull.large') ? `large-pull-${props.pull.large}` : null,
    objectHasValue(props, 'up.small') ? `small-up-${props.up.small}` : null,
    objectHasValue(props, 'up.medium') ? `medium-up-${props.up.medium}` : null,
    objectHasValue(props, 'up.large') ? `large-up-${props.up.large}` : null,
    objectHasValue(props, 'order.small') ? `small-order-${props.order.small}` : null,
    objectHasValue(props, 'order.medium') ? `medium-order-${props.order.medium}` : null,
    objectHasValue(props, 'order.large') ? `large-order-${props.order.large}` : null,
    {
      'collapse-small': props.collapseOnSmall,
      'collapse-medium': props.collapseOnMedium,
      'collapse-large': props.collapseOnLarge,
      'uncollapse-small': props.uncollapseOnSmall,
      'uncollapse-medium': props.uncollapseOnMedium,
      'uncollapse-large': props.uncollapseOnLarge,
      'small-centered': props.centerOnSmall,
      'medium-centered': props.centerOnMedium,
      'large-centered': props.centerOnLarge,
      'small-uncentered': props.uncenterOnSmall,
      'medium-uncentered': props.uncenterOnMedium,
      'large-uncentered': props.uncenterOnLarge,
      'small-expand': props.expandOnSmall,
      'medium-expand': props.expandOnMedium,
      'large-expand': props.expandOnLarge,
      'shrink': props.shrink,
      'end': props.isLast
    },
    generalClassNames(props)
  );

  return (
    <div {...removeProps(props, ['offset'])} className={className} />
  );
};

Column.propTypes = {
  small: PropTypes.number,
  medium: PropTypes.number,
  large: PropTypes.number,
  offset: PropTypes.object,
  push: PropTypes.object,
  pull: PropTypes.object,
  up: PropTypes.object,
  order: PropTypes.object,
  collapseOnSmall: PropTypes.bool,
  collapseOnMedium: PropTypes.bool,
  collapseOnLarge: PropTypes.bool,
  uncollapseOnSmall: PropTypes.bool,
  uncollapseOnMedium: PropTypes.bool,
  uncollapseOnLarge: PropTypes.bool,
  centerOnSmall: PropTypes.bool,
  centerOnMedium: PropTypes.bool,
  centerOnLarge: PropTypes.bool,
  uncenterOnSmall: PropTypes.bool,
  uncenterOnMedium: PropTypes.bool,
  uncenterOnLarge: PropTypes.bool,
  expandOnSmall: PropTypes.bool,
  expandOnMedium: PropTypes.bool,
  expandOnLarge: PropTypes.bool,
  shrink: PropTypes.bool,
  isLast: PropTypes.bool,
  ...GeneralPropTypes
};
