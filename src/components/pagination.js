import React, { PropTypes } from 'react';
import { GeneralPropTypes, createClassName, generalClassNames } from '../utils';

/**
 * Pagination component.
 * http://foundation.zurb.com/sites/docs/pagination.html
 *
 * @param {Object} props
 * @returns {Object}
 */
export const Pagination = props => {
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

Pagination.propTypes = {
  isCentered: PropTypes.bool,
  ...GeneralPropTypes
};

/**
 * Pagination item component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const PaginationItem = props => {
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

PaginationItem.propTypes = {
  isCurrent: PropTypes.bool,
  isDisabled: PropTypes.bool,
  ...GeneralPropTypes
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
