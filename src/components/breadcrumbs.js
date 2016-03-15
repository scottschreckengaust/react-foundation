import React, { PropTypes } from 'react';
import { GeneralPropTypes, createClassName, generalClassNames } from '../utils';

/**
 * Breadcrumbs component.
 * http://foundation.zurb.com/sites/docs/breadcrumbs.html
 *
 * @param {Object} props
 * @returns {Object}
 */
export const Breadcrumbs = props => (
  <ul {...props} className={createClassName(props.className || 'breadcrumbs', generalClassNames(props))}/>
);

/**
 * Breadcrumb item component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const BreadcrumbItem = props => {
  const className = createClassName(
    props.className,
    {
      'disabled': props.isDisabled
    },
    generalClassNames(props)
  );

  return (
    <li {...props} className={className}/>
  );
};

BreadcrumbItem.propTypes = {
  ...GeneralPropTypes,
  isDisabled: PropTypes.bool
};
