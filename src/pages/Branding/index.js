import React, { Component } from 'react';

import BergflixIconS from '../../images/bergflix-short.png';
import BergflixIconL from '../../images/bergflix-long.png';

import './style.scss';

export default class BrandingPage extends Component {
  render() {
    return (
      <div id={'branding-container'}>
        <div className={'title-container'}>
          <span className={'subtitle t-grey'}>Die "FTF"-Redaktion präsentiert</span>
          <div className={'title t-white'}>
            <span className={'t-white'}>Bergflix</span>
            <span className={'dot t-red'}>. Branding</span>
          </div>
        </div>
        <div className={'info'}>
          <div className={'section'}>
            <div className={'s-title-container'}>
              <span className={'subtitle t-white'}>Unsere Brand</span>
              <span className={'title t-red'}>Nichts offizielles, aber dennoch wichtig.</span>
            </div>
            <div className={'text'}>
              <div className={'paragraph'}>
                Bergflix ist kein angemeldetes Unternehmen, geschweige irgendeine offizielle Organisation. Dennoch haben
                wir für uns einen speziellen <span className={'t-red'}>”</span>
                <span className={'t-white'}>Brand-Kodex</span>
                <span className={'t-red'}>”</span> geschaffen, welcher im Verbund mit dem Namen Bergflix möglichst
                beachtet werden sollte.
              </div>
            </div>
          </div>
          <div className={'section colors'}>
            <div className={'s-title-container'}>
              <span className={'subtitle t-white'}>
                Das ”Bergflix<span className={'t-red'}>.</span>” Logo
              </span>
              <span className={'title t-red'}>Unsere Markenzeichen.</span>
            </div>
            <div className={'s-title-container'}>
              <span className={'subtitle t-white'}>
                Die ”Bergflix<span className={'t-red'}>.</span>” Farben
              </span>
              <span className={'title t-red'}>Unsere Markenfarben.</span>
            </div>
            <div className={'logo logo-short'}>
              <img src={BergflixIconS} alt={'Logo Icon'} />
            </div>
            <div className={'description logo-short'}>Bergflix Icon</div>
            <div className={'logo logo-long'}>
              <img src={BergflixIconL} alt={'Logo Icon'} />
            </div>
            <div className={'description logo-long'}>Bergflix Logo</div>
            <div className={'color primary'}>#FF0230</div>
            <div className={'description primary'}>Schickes Rot</div>
            <div className={'color white'}>#FFFFFF</div>
            <div className={'description white'}>Naja, Weiß halt</div>
            <div className={'color black'}>#000000</div>
            <div className={'description black'}>Unsere Seele</div>
            <div className={'color dark-grey'}>#111111</div>
            <div className={'description dark-grey'}>Unsere Seele 2</div>
            <div className={'color grey'}>#6B6B6B</div>
            <div className={'description grey'}>Delorean</div>
            <div className={'color light-grey'}>#989898</div>
            <div className={'description light-grey'}>Plattenbau</div>
          </div>
        </div>
      </div>
    );
  }
}
