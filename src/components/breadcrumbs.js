import React from 'react';
import check from 'check-types';
import classNames from 'classnames';
import { default as omit } from 'lodash.omit';

/**
 * Breadcrumbs component.
 * http://foundation.zurb.com/sites/docs/breadcrumbs.html
 *
 * @param {Object} props
 * @returns {XML}
 */
export const Breadcrumbs = props => (
  <ul {...props} className={props.className || 'breadcrumbs'}/>
);

/**
 * Breadcrumb item component.
 *
 * @param {Object} props
 * @returns {XML}
 */
export const BreadcrumbItem = props => {
  check.assert.maybe.boolean(props.isDisabled, 'BreadcrumbItem.props.isDisabled must be a boolean.');

  const className = classNames(
    props.className,
    {
      'disabled': props.isDisabled
    }
  );

  const omitProps = ['isDisabled'];

  return (
    <li {...omit(props, omitProps)} className={className}/>
  );
};

export default Breadcrumbs;
