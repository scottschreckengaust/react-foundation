import React from 'react';
import check from 'check-types';
import { default as has } from 'lodash.has';
import { HorizontalAlignments, VerticalAlignments, createClassName, generalClassNames, removeProps } from '../utils';

/**
 * Row component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const Row = props => {
  check.assert.maybe.string(props.horizontalAlignment, 'Property "horizontalAlignment" must be a string.');
  check.assert.maybe.string(props.verticalAlignment, 'Property "verticalAlignment" must be a string.');
  check.assert.maybe.boolean(props.unstackOnSmall, 'Property "unstackOnSmall" must be a boolean.');
  check.assert.maybe.boolean(props.unstackOnMedium, 'Property "unstackOnMedium" must be a boolean.');
  check.assert.maybe.boolean(props.unstackOnLarge, 'Property "unstackOnLarge" must be a boolean.');
  check.assert.maybe.boolean(props.isColumn, 'Property "isColumn" must be a boolean.');
  check.assert.maybe.boolean(props.isExpanded, 'Property "isExpanded" must be a boolean.');

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

/**
 * Column component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const Column = props => {
  check.assert.maybe.number(props.small, 'Property "small" must be a number.');
  check.assert.maybe.number(props.medium, 'Property "medium" must be a number.');
  check.assert.maybe.number(props.large, 'Property "large" must be a number.');
  check.assert.maybe.object(props.offset, 'Property "offset" must be an object.');
  check.assert.maybe.object(props.push, 'Property "push" must be an object.');
  check.assert.maybe.object(props.pull, 'Property "pull" must be an object.');
  check.assert.maybe.object(props.up, 'Property "up" must be an object.');
  check.assert.maybe.object(props.order, 'Property "order" must be an object.');
  check.assert.maybe.boolean(props.collapseOnSmall, 'Property "collapseOnSmall" must be a boolean.');
  check.assert.maybe.boolean(props.collapseOnMedium, 'Property "collapseOnMedium" must be a boolean.');
  check.assert.maybe.boolean(props.collapseOnLarge, 'Property "collapseOnLarge" must be a boolean.');
  check.assert.maybe.boolean(props.uncollapseOnSmall, 'Property "uncollapseOnSmall" must be a boolean.');
  check.assert.maybe.boolean(props.uncollapseOnMedium, 'Property "uncollapseOnMedium" must be a boolean.');
  check.assert.maybe.boolean(props.uncollapseOnLarge, 'Property "uncollapseOnLarge" must be a boolean.');
  check.assert.maybe.boolean(props.centerOnSmall, 'Property "centerOnSmall" must be a boolean.');
  check.assert.maybe.boolean(props.centerOnMedium, 'Property "centerOnMedium" must be a boolean.');
  check.assert.maybe.boolean(props.centerOnLarge, 'Property "centerOnLarge" must be a boolean.');
  check.assert.maybe.boolean(props.uncenterOnSmall, 'Property "uncenterOnSmall" must be a boolean.');
  check.assert.maybe.boolean(props.uncenterOnMedium, 'Property "uncenterOnMedium" must be a boolean.');
  check.assert.maybe.boolean(props.uncenterOnLarge, 'Property "uncenterOnLarge" must be a boolean.');
  check.assert.maybe.boolean(props.expandOnSmall, 'Property "expandOnSmall" must be a boolean.');
  check.assert.maybe.boolean(props.expandOnMedium, 'Property "expandOnMedium" must be a boolean.');
  check.assert.maybe.boolean(props.expandOnLarge, 'Property "expandOnLarge" must be a boolean.');
  check.assert.maybe.boolean(props.shrink, 'Property "shrink" must be a boolean.');
  check.assert.maybe.boolean(props.isLast, 'Property "isLast" must be a boolean.');

  const className = createClassName(
    props.className || 'columns',
    props.small ? `small-${props.small}` : null,
    props.medium ? `medium-${props.medium}` : null,
    props.large ? `large-${props.large}` : null,
    has(props, 'offset.small') ? `small-offset-${props.offset.small}` : null,
    has(props, 'offset.medium') ? `medium-offset-${props.offset.medium}` : null,
    has(props, 'offset.large') ? `large-offset-${props.offset.large}` : null,
    has(props, 'push.small') ? `small-push-${props.push.small}` : null,
    has(props, 'push.medium') ? `medium-push-${props.push.medium}` : null,
    has(props, 'push.large') ? `large-push-${props.push.large}` : null,
    has(props, 'pull.small') ? `small-pull-${props.pull.small}` : null,
    has(props, 'pull.medium') ? `medium-pull-${props.pull.medium}` : null,
    has(props, 'pull.large') ? `large-pull-${props.pull.large}` : null,
    has(props, 'up.small') ? `small-up-${props.up.small}` : null,
    has(props, 'up.medium') ? `medium-up-${props.up.medium}` : null,
    has(props, 'up.large') ? `large-up-${props.up.large}` : null,
    has(props, 'order.small') ? `small-order-${props.order.small}` : null,
    has(props, 'order.medium') ? `medium-order-${props.order.medium}` : null,
    has(props, 'order.large') ? `large-order-${props.order.large}` : null,
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
