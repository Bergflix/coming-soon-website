import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './style.scss';

import AboutPage from './About';
import BrandingPage from './Branding';
import RightsPage from './Rights';
import DevPage from './Dev';

class Pages extends React.Component {
  render() {
    let { location } = this.props;

    return (
      <TransitionGroup id={'page-container'}>
        <CSSTransition appear={true} key={location.key} timeout={450} classNames={'fade'}>
          <Switch className={'switch'} location={location}>
            <Route path={'/about'} component={() => <AboutPage />} />
            <Route path={'/branding'} component={() => <BrandingPage />} />
            <Route path={'/rights'} component={() => <RightsPage />} />
            <Route path={'/dev'} component={() => <DevPage />} />
            <Route path={'*'} component={() => <Redirect from={'*'} to={'/about'} />} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default Pages;
