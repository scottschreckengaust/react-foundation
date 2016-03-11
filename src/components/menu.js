import React from 'react';
import check from 'check-types';
import classNames from 'classnames';
import { default as omit } from 'lodash.omit';

// Menu alignment enumerable.
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
  check.assert.maybe.string(props.align, 'Menu.props.align must be a string.');
  check.assert.maybe.boolean(props.isExpanded, 'Menu.props.isExpanded must be a boolean.');
  check.assert.maybe.boolean(props.isVertical, 'Menu.props.isVertical must be a boolean.');
  check.assert.maybe.boolean(props.isSimple, 'Menu.props.isSimple must be a boolean.');

  const className = classNames(
    props.className || 'menu',
    {
      'align-right': props.align === MenuAlignments.RIGHT,
      'align-center': props.align === MenuAlignments.CENTER,
      'expanded': props.isExpanded,
      'vertical': props.isVertical,
      'simple': props.isSimple
    }
  );

  return (
    <ul {...props} className={className}>
      {props.children}
    </ul>
  );
};

/**
 * Menu item sub-component.
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

  return (
    <li {...omit(props, ['isActive'])} className={className}>
      {props.children}
    </li>
  );
};

/**
 * Menu text wrapper-component.
 *
 * @param {Object} props
 * @returns {XML}
 */
export const MenuText = props => {
  return (
    <MenuItem {...props} className={props.className || 'menu-text'}/>
  );
};
