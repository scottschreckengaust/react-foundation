import React from 'react';
import check from 'check-types';
import { createClassName, generalClassNames } from '../utils';

/**
 * Menu alignment enumerable.
 *
 * @type {{RIGHT: string, CENTER: string}}
 */
export const MenuAlignments = {
  RIGHT: 'right',
  CENTER: 'center'
};

/**
 * Menu component.
 * http://foundation.zurb.com/sites/docs/menu.html
 *
 * @param {Object} props
 * @returns {Object}
 */
export const Menu = props => {
  check.assert.maybe.string(props.alignment, 'Property "alignment" must be a string.');
  check.assert.maybe.boolean(props.iconsOnTop, 'Property "iconsOnTop" must be a boolean.');
  check.assert.maybe.boolean(props.isExpanded, 'Property "isExpanded" must be a boolean.');
  check.assert.maybe.boolean(props.isVertical, 'Property "isVertical" must be a boolean.');
  check.assert.maybe.boolean(props.isSimple, 'Property "isSimple" must be a boolean.');
  check.assert.maybe.boolean(props.isNested, 'Property "isNested" must be a boolean.');

  const className = createClassName(
    props.className || 'menu',
    {
      'align-right': props.alignment === MenuAlignments.RIGHT,
      'align-center': props.alignment === MenuAlignments.CENTER,
      'icon-top': props.iconsOnTop,
      'expanded': props.isExpanded,
      'vertical': props.isVertical,
      'simple': props.isSimple,
      'nested': props.isNested
    },
    generalClassNames(props)
  );

  return (
    <ul {...props} className={className} />
  );
};

/**
 * Menu item component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const MenuItem = props => {
  check.assert.maybe.boolean(props.isActive, 'Property "isActive" must be a boolean.');

  const className = createClassName(
    props.className,
    {
      'active': props.isActive
    },
    generalClassNames(props)
  );

  return (
    <li {...props} className={className} />
  );
};

/**
 * Menu text wrapper-component.
 *
 * @param {Object} props
 * @returns {XML}
 */
export const MenuText = props => (
  <MenuItem {...props} className={props.className || 'menu-text'} />
);

export default Menu;
