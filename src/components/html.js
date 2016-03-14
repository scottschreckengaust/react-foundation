import { createClassName, generalClassNames } from '../utils';

/**
 * Div component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const Div = props => (
  <div {...props} className={createClassName(props.className, generalClassNames(props))} />
);

/**
 * Span component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const Span = props => (
  <span {...props} className={createClassName(props.className, generalClassNames(props))} />
);
