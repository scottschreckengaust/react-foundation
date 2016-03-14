import React from 'react';
import check from 'check-types';
import { createClassName, generalClassNames } from '../utils';

/**
 * Pagination component.
 * http://foundation.zurb.com/sites/docs/pagination.html
 *
 * @param {Object} props
 * @returns {Object}
 */
export const Pagination = props => {
  check.assert.maybe.boolean(props.isCentered, 'Property "isCentered" must be a boolean.');

  const className = createClassName(
    props.className || 'pagination',
    {
      'text-center': props.isCentered
    },
    generalClassNames(props)
  );

  return (
    <ul {...props} className={className} role="navigation" />
  );
};

/**
 * Pagination item component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const PaginationItem = props => {
  check.assert.maybe.boolean(props.isCurrent, 'Property "isCurrent" must be a boolean.');
  check.assert.maybe.boolean(props.isDisabled, 'Property "isDisabled" must be a boolean.');

  const className = createClassName(
    props.className,
    {
      'current': props.isCurrent,
      'disabled': props.isDisabled
    },
    generalClassNames(props)
  );

  return (
    <li {...props} className={className} />
  );
};

/**
 * Pagination previous wrapper-component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const PaginationPrevious = props => (
  <PaginationItem {...props} className={props.className || 'pagination-previous'} />
);

/**
 * Pagination next wrapper-component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const PaginationNext = props => (
  <PaginationItem {...props} className={props.className || 'pagination-next'} />
);

/**
 * Pagination ellipsis wrapper-component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const PaginationEllipsis = props => (
  <PaginationItem {...props} className={props.className || 'ellipsis'} />
);

export default Pagination;
