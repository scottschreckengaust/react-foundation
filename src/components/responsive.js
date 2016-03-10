import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { TopBar } from './top-bar';
import { Hideable } from '../utils';

const DEFAULT_BREAKPOINT = 640;

/**
 * Responsive navigation component.
 * http://foundation.zurb.com/sites/docs/responsive-navigation.html
 */
export class ResponsiveNavigation extends Component {
  constructor() {
    super();

    this.state = {
      isTitleBarVisible: true,
      isTopBarVisible: true
    };
  }

  componentWillMount() {
    this.update();
  }

  componentDidMount() {
    window.addEventListener('resize', this.update.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.update.bind(this));
  }

  /**
   * Updates the state of this component.
   * While this might seem like a sub-optimal solution, it is actually the only solution.
   * Using 'hide' and 'show' -classes won't work because they set display with `!important`.
   */
  update() {
    const { breakpoint } = this.props;

    this.setState({
      isTitleBarVisible: window.innerWidth < breakpoint,
      isTopBarVisible: window.innerWidth >= breakpoint
    });
  }

  /**
   * Called when the menu icon is clicked.
   */
  toggle() {
    this.setState({
      isTopBarVisible: !this.state.isTopBarVisible
    });
  }

  render() {
    const { isTitleBarVisible, isTopBarVisible } = this.state;
    const { titleBar: titleBarProps, topBar: topBarProps, children } = this.props;

    return (
      <div>
        <TitleBar {...titleBarProps}
          onMenuIconClick={this.toggle.bind(this)}
          isVisible={isTitleBarVisible}/>
        <TopBar {...topBarProps} isVisible={isTopBarVisible}>
          {children}
        </TopBar>
      </div>
    );
  }
}

ResponsiveNavigation.propTypes = {
  breakpoint: PropTypes.string.isRequired
};

ResponsiveNavigation.defaultProps = {
  breakpoint: DEFAULT_BREAKPOINT
};

/**
 * Title bar sub-component.
 *
 * @param {Object} props
 * @returns {XML}
 */
export const TitleBar = props => {
  const className = classNames(props.className || 'title-bar');

  return (
    <Hideable {...props} className={className}>
      <MenuIcon {...props.menuIcon} onClick={props.onMenuIconClick}/>
      <TitleBarTitle {...props.title}>{props.children}</TitleBarTitle>
    </Hideable>
  );
};

/**
 * Title bar menu icon sub-component.
 *
 * @param {Object} props
 * @returns {XML}
 */
export const MenuIcon = props => (
  <button {...props} className={props.className || 'menu-icon'} type="button">
    {props.children}
  </button>
);

/**
 * Title bar title sub-component.
 *
 * @param {Object} props
 * @returns {XML}
 */
export const TitleBarTitle = props => (
  <div {...props} className={props.className || 'title-bar-title'}>
    {props.children}
  </div>
);
