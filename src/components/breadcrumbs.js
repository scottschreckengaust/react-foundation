import React from 'react';
import check from 'check-types';
import { createClassName, generalClassNames } from '../utils';

/**
 * Breadcrumbs component.
 * http://foundation.zurb.com/sites/docs/breadcrumbs.html
 *
 * @param {Object} props
 * @returns {Object}
 */
export const Breadcrumbs = props => {
  const className = createClassName(props.className || 'breadcrumbs', generalClassNames(props));

  return (
    <ul {...props} className={className} />
  );
};

/**
 * Breadcrumb item component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const BreadcrumbItem = props => {
  check.assert.maybe.boolean(props.isDisabled, 'Property "isDisabled" must be a boolean.');

  const className = createClassName(
    props.className,
    {
      'disabled': props.isDisabled
    },
    generalClassNames(props)
  );

  return (
    <li {...props} className={className} />
  );
};

export default Breadcrumbs;
