import React from 'react';
import check from 'check-types';
import classNames from 'classnames';
import { default as omit } from 'lodash.omit';

/**
 * Pagination component.
 * http://foundation.zurb.com/sites/docs/pagination.html
 * 
 * @param {Object} props
 * @returns {XML}
 */
export const Pagination = props => {
  check.assert.maybe.boolean(props.isCentered, 'Pagination.props.isCentered must be a boolean.');

  const className = classNames(
    props.className || 'pagination',
    {
      'text-center': props.isCentered
    }
  );

  const omitProps = ['isCentered'];

  return (
    <ul {...omit(props, omitProps)} className={className} role="navigation"/>
  )
};

/**
 * Pagination item component.
 *
 * @param {Object} props
 * @returns {XML}
 */
export const PaginationItem = props => {
  check.assert.maybe.boolean(props.isCurrent, 'PaginationItem.props.isCurrent must be a boolean.');
  check.assert.maybe.boolean(props.isDisabled, 'PaginationItem.props.isDisabled must be a boolean.');

  const className = classNames(
    props.className,
    {
      'current': props.isCurrent,
      'disabled': props.isDisabled
    }
  );

  const omitProps = ['isCurrent', 'isDisabled'];

  return (
    <li {...omit(props, omitProps)} className={className}/>
  );
};

/**
 * Pagination previous wrapper-component.
 *
 * @param {Object} props
 * @returns {XML}
 */
export const PaginationPrevious = props => (
  <PaginationItem {...props} className={props.className || 'pagination-previous'}/>
);

/**
 * Pagination next wrapper-component.
 *
 * @param {Object} props
 * @returns {XML}
 */
export const PaginationNext = props => (
  <PaginationItem {...props} className={props.className || 'pagination-next'}/>
);

/**
 * Pagination ellipsis wrapper-component.
 *
 * @param {Object} props
 * @returns {XML}
 */
export const PaginationEllipsis = props => (
  <PaginationItem {...props} className={props.className || 'ellipsis'}/>
);

export default Pagination;
