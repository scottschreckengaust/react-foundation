// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { GeneralPropTypes, FlexboxPropTypes, createClassName, generalClassNames, removeProps, objectKeys, type TGeneralPropTypes, type flexboxClassNamesProps } from '../utils';

/**
 * Accordion component.
 * http://foundation.zurb.com/sites/docs/accordion.html
 *
 * @param {Object} props
 * @returns {Object}
 */

type AccordionProps = {
  ...TGeneralPropTypes,
  ...flexboxClassNamesProps,
  noDefaultClassName: boolean,
  children?: Array<any>
}
export const Accordion = (props: AccordionProps) => {
  const className = createClassName(
    //Adding !== undefined so flow type could check it properly
    props.noDefaultClassName ? null : 'accordion',
    props.className,
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(Accordion.propTypes));

  return <ul {...passProps} className={className}>{props.children !== undefined ? props.children : []}</ul>;
};

Accordion.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes,
  children: PropTypes.any,
};

/**
 * Accordion item component.
 *
 * @param {Object} props
 * @returns {Object}
 */

type AccordionItemProps = {
  ...TGeneralPropTypes,
  ...flexboxClassNamesProps,
  noDefaultClassName: boolean,
  isActive?: Boolean,
}
export const AccordionItem = (props: AccordionItemProps) => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'accordion-item',
    props.className,
    {
      'is-active': props.isActive
    },
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(AccordionItem.propTypes));

  return <li {...passProps} className={className}/>;
};

AccordionItem.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes,
  isActive: PropTypes.bool
};

/**
 * Accordion panel container component.
 *
 * @param {Object} props
 * @returns {Object}
 */

type AccordionContentProps = {
  ...TGeneralPropTypes,
  ...flexboxClassNamesProps,
  noDefaultClassName: boolean,
  isActive?: Boolean,
}
export const AccordionContent = (props: AccordionContentProps) => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'accordion-content',
    props.className,
    {
      'is-active': props.isActive
    },
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(AccordionContent.propTypes));

  return <div {...passProps} className={className}/>;
};

AccordionContent.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes,
  isActive: PropTypes.bool
};

/**
 * Accordion panel title component.
 *
 * @param {Object} props
 * @returns {Object}
 */
type AccordionTitleProps = {
  ...TGeneralPropTypes,
  ...flexboxClassNamesProps,
  noDefaultClassName: boolean,
  isActive?: Boolean,
}
export const AccordionTitle = (props: AccordionTitleProps) => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'accordion-title',
    props.className,
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(AccordionContent.propTypes));

  return <a {...passProps} className={className}/>;
};

AccordionTitle.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes,
};
