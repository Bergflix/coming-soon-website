import React, { Component } from 'react';

import './style.scss';

export default class RightsPage extends Component {
  render() {
    return (
      <div id={'rights-page'}>
        <div className={'title-container'}>
          <span className={'subtitle t-grey'}>Die "FTF"-Redaktion präsentiert</span>
          <div className={'title t-white'}>
            <span className={'t-white'}>Bergflix</span>
            <span className={'dot t-red'}>. Datenschutz</span>
          </div>
        </div>
      </div>
    );
  }
}
