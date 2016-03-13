import React from 'react';
import check from 'check-types';
import classNames from 'classnames';
import { default as omit } from 'lodash.omit';

/**
 * Menu alignment enumerable.
 *
 * @type {Object}
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
 * @returns {XML}
 */
export const Menu = props => {
  check.assert.maybe.string(props.alignment, 'Menu.props.alignment must be a string.');
  check.assert.maybe.boolean(props.iconsOnTop, 'Menu.props.iconsOnTop must be a boolean.');
  check.assert.maybe.boolean(props.isExpanded, 'Menu.props.isExpanded must be a boolean.');
  check.assert.maybe.boolean(props.isVertical, 'Menu.props.isVertical must be a boolean.');
  check.assert.maybe.boolean(props.isSimple, 'Menu.props.isSimple must be a boolean.');
  check.assert.maybe.boolean(props.isNested, 'Menu.props.isNested must be a boolean.');

  const className = classNames(
    props.className || 'menu',
    {
      'align-right': props.alignment === MenuAlignments.RIGHT,
      'align-center': props.alignment === MenuAlignments.CENTER,
      'icon-top': props.iconsOnTop,
      'expanded': props.isExpanded,
      'vertical': props.isVertical,
      'simple': props.isSimple,
      'nested': props.isNested
    }
  );

  const omitProps = [
    'alignment',
    'iconsOnTop',
    'isExpanded',
    'isVertical',
    'isSimple',
    'isNested'
  ];

  return (
    <ul {...omit(props, omitProps)} className={className}/>
  );
};

/**
 * Menu item component.
 *
 * @param {Object} props
 * @returns {XML}
 */
export const MenuItem = props => {
  check.assert.maybe.boolean(props.isActive, 'MenuItem.props.isActive must be a boolean.');

  const className = classNames(
    props.className,
    {
      'active': props.isActive
    }
  );

  const omitProps = ['isActive'];

  return (
    <li {...omit(props, omitProps)} className={className}/>
  );
};

/**
 * Menu text wrapper-component.
 *
 * @param {Object} props
 * @returns {XML}
 */
export const MenuText = props => (
  <MenuItem {...props} className={props.className || 'menu-text'}/>
);

export default Menu;
