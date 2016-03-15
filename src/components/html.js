import { createClassName, generalClassNames, GeneralPropTypes } from '../utils';

/**
 * Div component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const Div = props => (
  <div {...props} className={createClassName(props.className, generalClassNames(props))}/>
);

Div.propTypes = {
  ...GeneralPropTypes
};

/**
 * Span component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const Span = props => (
  <span {...props} className={createClassName(props.className, generalClassNames(props))}/>
);

Span.propTypes = {
  ...GeneralPropTypes
};
