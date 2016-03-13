import React from 'react';
import check from 'check-types';
import classNames from 'classnames';
import { default as has } from 'lodash.has';
import { default as omit } from 'lodash.omit';

/**
 * Row horizontal alignments enumerable.
 *
 * @type {Object}
 */
export const RowHorizontalAlignments = {
  RIGHT: 'right',
  CENTER: 'center',
  JUSTIFY: 'justify',
  SPACED: 'spaced'
};

/**
 * Row vertical alignments enumerable.
 *
 * @type {Object}
 */
export const RowVerticalAlignments = {
  TOP: 'top',
  MIDDLE: 'middle',
  BOTTOM: 'bottom',
  STRETCH: 'stretch'
};

/**
 * Row component.
 *
 * @param {Object} props
 * @returns {XML}
 */
export const Row = props => {
  check.assert.maybe.string(props.horizontalAlignment, 'Row.props.horizontalAlignment must be a string.');
  check.assert.maybe.string(props.verticalAlignment, 'Row.props.verticalAlignment must be a string.');
  check.assert.maybe.boolean(props.unstackOnSmall, 'Row.props.unstackOnSmall must be a boolean.');
  check.assert.maybe.boolean(props.unstackOnMedium, 'Row.props.unstackOnMedium must be a boolean.');
  check.assert.maybe.boolean(props.unstackOnLarge, 'Row.props.unstackOnLarge must be a boolean.');
  check.assert.maybe.boolean(props.isColumn, 'Row.props.isColumn must be a boolean.');
  check.assert.maybe.boolean(props.isExpanded, 'Row.props.isExpanded must be a boolean.');

  const className = classNames(
    props.className || 'row',
    {
      'align-right': props.horizontalAlignment === RowHorizontalAlignments.RIGHT,
      'align-center': props.horizontalAlignment === RowHorizontalAlignments.CENTER,
      'align-justify': props.horizontalAlignment === RowHorizontalAlignments.JUSTIFY,
      'align-spaced': props.horizontalAlignment === RowHorizontalAlignments.SPACED,
      'align-top': props.verticalAlignment === RowVerticalAlignments.TOP,
      'align-middle': props.verticalAlignment === RowVerticalAlignments.MIDDLE,
      'align-bottom': props.verticalAlignment === RowVerticalAlignments.BOTTOM,
      'align-stretch': props.verticalAlignment === RowVerticalAlignments.STRETCH,
      'small-unstack': props.unstackOnSmall,
      'medium-unstack': props.unstackOnMedium,
      'large-unstack': props.unstackOnLarge,
      'column': props.isColumn,
      'expanded': props.isExpanded
    }
  );

  const omitProps = [
    'horizontalAlignment',
    'verticalAlignment',
    'unstackOnSmall',
    'unstackOnMedium',
    'unstackOnLarge',
    'column',
    'isExpanded'
  ];

  return (
    <div {...omit(props, omitProps)} className={className}></div>
  );
};

/**
 * Column component.
 *
 * @param {Object} props
 * @returns {XML}
 */
export const Column = props => {
  check.assert.maybe.number(props.small, 'Column.props.small must be a number.');
  check.assert.maybe.number(props.medium, 'Column.props.medium must be a number.');
  check.assert.maybe.number(props.large, 'Column.props.large must be a number.');
  check.assert.maybe.object(props.offset, 'Column.props.offset must be an object.');
  check.assert.maybe.object(props.push, 'Column.props.push must be an object.');
  check.assert.maybe.object(props.pull, 'Column.props.pull must be an object.');
  check.assert.maybe.object(props.up, 'Column.props.up must be an object.');
  check.assert.maybe.object(props.order, 'Column.props.order must be an object.');
  check.assert.maybe.boolean(props.collapseOnSmall, 'Column.props.collapseOnSmall must be a boolean.');
  check.assert.maybe.boolean(props.collapseOnMedium, 'Column.props.collapseOnMedium must be a boolean.');
  check.assert.maybe.boolean(props.collapseOnLarge, 'Column.props.collapseOnLarge must be a boolean.');
  check.assert.maybe.boolean(props.uncollapseOnSmall, 'Column.props.uncollapseOnSmall must be a boolean.');
  check.assert.maybe.boolean(props.uncollapseOnMedium, 'Column.props.uncollapseOnMedium must be a boolean.');
  check.assert.maybe.boolean(props.uncollapseOnLarge, 'Column.props.uncollapseOnLarge must be a boolean.');
  check.assert.maybe.boolean(props.centerOnSmall, 'Column.props.centerOnSmall must be a boolean.');
  check.assert.maybe.boolean(props.centerOnMedium, 'Column.props.centerOnMedium must be a boolean.');
  check.assert.maybe.boolean(props.centerOnLarge, 'Column.props.centerOnLarge must be a boolean.');
  check.assert.maybe.boolean(props.uncenterOnSmall, 'Column.props.uncenterOnSmall must be a boolean.');
  check.assert.maybe.boolean(props.uncenterOnMedium, 'Column.props.uncenterOnMedium must be a boolean.');
  check.assert.maybe.boolean(props.uncenterOnLarge, 'Column.props.uncenterOnLarge must be a boolean.');
  check.assert.maybe.boolean(props.expandOnSmall, 'Column.props.expandOnSmall must be a boolean.');
  check.assert.maybe.boolean(props.expandOnMedium, 'Column.props.expandOnMedium must be a boolean.');
  check.assert.maybe.boolean(props.expandOnLarge, 'Column.props.expandOnLarge must be a boolean.');
  check.assert.maybe.boolean(props.shrink, 'Column.props.shrink must be a boolean.');
  check.assert.maybe.boolean(props.isLast, 'Column.props.isLast must be a boolean.');

  const className = classNames(
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
    }
  );

  const omitProps = [
    'small',
    'medium',
    'large',
    'offset',
    'push',
    'pull',
    'up',
    'order',
    'collapseOnSmall',
    'collapseOnMedium',
    'collapseOnLarge',
    'uncollapseOnSmall',
    'uncollapseOnMedium',
    'uncollapseOnLarge',
    'centerOnSmall',
    'centerOnMedium',
    'centerOnLarge',
    'uncenterOnSmall',
    'uncenterOnMedium',
    'uncenterOnLarge',
    'expandOnSmall',
    'expandOnMedium',
    'expandOnLarge',
    'shrink',
    'isLast'
  ];

  return (
    <div {...omit(props, omitProps)} className={className}></div>
  );
};
