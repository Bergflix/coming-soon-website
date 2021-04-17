import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Pages from './pages';

export default class App extends React.Component {
  render() {
    return (
      <div id={'container'}>
        <Router>
          <Header />
          <Route render={({ location }) => <Pages location={location} />} />
          <Footer />
        </Router>
      </div>
    );
  }
}
