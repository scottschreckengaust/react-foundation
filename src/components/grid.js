import React from 'react';
import check from 'check-types';
import classNames from 'classnames';
import { default as has } from 'lodash.has';
import { default as omit } from 'lodash.omit';

/**
 * Row component.
 *
 * @param {Object} props
 * @returns {XML}
 */
export const Row = props => {
  check.assert.maybe.boolean(props.isColumn, 'Row.props.isColumn must be a boolean.');
  check.assert.maybe.boolean(props.isExpanded, 'Row.props.isExpanded must be a boolean.');

  const className = classNames(
    props.className || 'row',
    {
      'column': props.isColumn,
      'expanded': props.isExpanded
    }
  );

  const omitProps = ['column', 'isExpanded'];

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
    'isLast'
  ];

  return (
    <div {...omit(props, omitProps)} className={className}></div>
  );
};
