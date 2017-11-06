// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { MenuAlignments } from '../enums';
import { GeneralPropTypes, FlexboxPropTypes, createClassName, generalClassNames, removeProps, objectKeys, objectValues, type TGeneralPropTypes, type flexboxClassNamesProps } from '../utils';

/**
 * Menu component.
 * http://foundation.zurb.com/sites/docs/menu.html
 *
 * @param {Object} props
 * @returns {Object}
 */
type MenuProps = {
  ...TGeneralPropTypes,
  ...flexboxClassNamesProps,
  noDefaultClassName: boolean,
  alignment?: string,
  iconsOnTop?: boolean,
  isExpanded?: boolean,
  isVertical?: boolean,
  isSimple?: boolean,
  isNested?: boolean,
  isDropdown?: boolean,
  horizontalOnMedium?: boolean,
  isActive?: boolean,
}

export const Menu = (props: MenuProps) => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'menu',
    props.className,
    {
      'align-right': props.alignment === MenuAlignments.RIGHT,
      'align-center': props.alignment === MenuAlignments.CENTER,
      'icon-top': props.iconsOnTop,
      'expanded': props.isExpanded,
      'vertical': props.isVertical,
      'simple': props.isSimple,
      'nested': props.isNested,
      'dropdown': props.isDropdown,
      'medium-horizontal': props.horizontalOnMedium
    },
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(Menu.propTypes));

  return <ul {...passProps} className={className}/>;
};

Menu.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes,
  alignment: PropTypes.oneOf(objectValues(MenuAlignments)),
  iconsOnTop: PropTypes.bool,
  isExpanded: PropTypes.bool,
  isVertical: PropTypes.bool,
  isDropdown: PropTypes.bool,
  isSimple: PropTypes.bool,
  isNested: PropTypes.bool,
  horizontalOnMedium: PropTypes.bool
};

/**
 * Menu item component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const MenuItem = (props: MenuProps) => {
  const className = createClassName(
    props.className,
    {
      'active': props.isActive
    },
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(MenuItem.propTypes));

  return <li {...passProps} className={className}/>;
};

MenuItem.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes,
  isActive: PropTypes.bool
};

/**
 * Menu text wrapper-component.
 *
 * @param {Object} props
 * @returns {XML}
 */
export const MenuText = (props: MenuProps) => (
  <MenuItem {...props} className={props.className === undefined ? 'menu-text' : props.className}/>
);
