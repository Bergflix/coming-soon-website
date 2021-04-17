import React, { Component } from 'react';

import Logo from '../Elements/Logo';
import Icon from '../Elements/Icon';
import LinkOut from '../Elements/LinkOut';

import './style.scss';
import { NavLink } from 'react-router-dom';

export default class Footer extends Component {
  list = [
    {
      title: 'Social Media',
      links: [
        {
          title: 'Hilf uns auf Patreon',
          icon: 'arrow-up',
          href: 'https://patreon.com/bergflix',
        },
        {
          title: 'Joine unserem Discord',
          icon: 'arrow-up',
          href: 'https://discord.gg/9SumTae',
        },
        {
          title: 'Folge uns auf Twitter',
          icon: 'arrow-up',
          href: 'https://twitter.com/BergflixToGo',
        },
      ],
    },
    {
      title: 'Bergflix. Brand',
      links: [
        {
          title: 'Bergflix Branding',
          href: '/branding',
        },
        {
          title: 'Bergflix Github',
          icon: 'arrow-up',
          href: 'https://github.com/Bergflix',
        },
        {
          title: 'Bewerbe dich bei uns',
          icon: 'arrow-up',
          href: 'https://discord.com/',
        },
      ],
    },
    {
      title: 'Rechtliches & Hilfe',
      links: [
        {
          title: 'Datenschutzerklärung',
          href: '/rights',
        },
        {
          title: 'Cookies & Sicherheit',
          href: '/rights',
        },
        {
          title: 'Impressum',
          href: '/impressum',
        },
      ],
    },
  ];

  render() {
    return (
      <div className={'footer-container'}>
        <span className={'footer'}>
          <div className={'links'}>
            <span className={'column'}>
              <Logo />
            </span>
            {this.list.map((column) => (
              <span key={column.title} className={'column'}>
                <div className={'title'}>{column.title}</div>
                {column.links.map(
                  (link) =>
                    (link.icon && (
                      <LinkOut key={link.title} className={'action'} to={link.href}>
                        <span className={'text'}>{link.title}</span>
                        {link.icon && <Icon className={'link-icon'} type={link.icon} />}
                      </LinkOut>
                    )) || (
                      <NavLink key={link.title} className={'action'} to={link.href}>
                        <span className={'text'}>{link.title}</span>
                      </NavLink>
                    )
                )}
              </span>
            ))}
          </div>
          <div className={'love'}>
            Präsentiert durch die “From The Future”-Redaktion - Programmed with 💔 by
            <span className={'t-white'}>Bergflix</span>
            <span className={'t-red'}>.</span>
          </div>
        </span>
      </div>
    );
  }
}
