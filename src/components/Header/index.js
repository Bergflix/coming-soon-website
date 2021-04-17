import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import Logo from '../Elements/Logo';

import './style.scss';

class Header extends React.Component {
  navItems = [
    {
      title: 'Wer sind wir?',
      href: '/about',
    },
    {
      title: 'Branding',
      href: '/branding',
    },
    {
      title: 'Rechtliches',
      href: '/rights',
    },
    {
      title: 'Entwicklungsversion',
      href: '/dev',
    },
  ];

  render() {
    return (
      <div id={'header-container'}>
        <ul id={'head-nav'}>
          <li className={'nav-logo nav-item'}>
            <Logo />
          </li>
          {this.navItems.map((item) => (
            <li key={uuid()} className={'nav-item'}>
              <NavLink className={'nav-link'} to={item.href}>
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default withRouter(Header);
