import React, { Component } from 'react';

import TypeWriter from '../../components/Typewriter';
import LinkOut from '../../components/Elements/LinkOut';

import BergiPic from '../../images/tim.png';
import BergiText from '../../images/tim-t.png';
import DiscordPic from '../../images/discord.png';
import DiscordText from '../../images/discord-t.png';

import './style.scss';

export default class AboutPage extends Component {
  render() {
    return (
      <div id={'about-container'}>
        <div className={'title-container'}>
          <span className={'subtitle t-grey'}>Die "FTF"-Redaktion präsentiert</span>
          <div className={'title t-white'}>
            <span className={'t-white'}>Bergflix</span>
            <span className={'dot t-red'}>.</span>
            <TypeWriter className={'t-red'} words={['Originals', 'Movies', 'Series', 'Partymode']} />
          </div>
        </div>
        <div className={'info'}>
          <div className={'section'}>
            <div className={'s-title-container'}>
              <span className={'subtitle t-white'}>Unsere Mission?</span>
              <span className={'title t-red'}>Eine On-Demand Plattform.</span>
            </div>
            <div className={'text'}>
              <div className={'paragraph'}>
                Bergflix ist eine Plattform, gegründet aus dem Kerngedanke eine eigene On-Demand Streamingplattform für
                Kurzfilme und Serien des in die jahregekommenden YouTube Kinderstars <span className={'t-red'}>”</span>
                <span className={'t-white'}>Herr Bergmann</span>
                <span className={'t-red'}>”</span> zu erschaffen.
              </div>
              <div className={'paragraph'}>
                Unser Dev-Team fand seinem Ursprung im November 2019.
                <div>
                  <span className={'t-red'}> ”</span>
                  <span className={'t-white'}>
                    Stellt euch mal Bergflix als wirklich richtige Streamingplattform vor...
                  </span>
                  <span className={'t-red'}>” </span>
                </div>
                Joar, und seitdem arbeiten wir mal mehr mal weniger an dieser Plattform.
              </div>
            </div>
          </div>
          <div className={'section'}>
            <div className={'s-title-container'}>
              <span className={'subtitle t-white'}>Wann ist Bergflix fertig?</span>
              <span className={'title t-red'}>Wenn wir ehrlich sind, wir haben selbst keinen Plan.</span>
            </div>
            <div className={'text'}>
              <div className={'paragraph'}>
                Die Entwicklung von Bergflix dauert wesentlich länger als angenommen. Im Gegensatz zu vielen anderen
                Communityprojekten der “FTF”-Redaktion ist unsere komplette Webseite eine{' '}
                <span className={'t-red'}>”</span>
                <span className={'t-white'}>In-House Produktion</span>
                <span className={'t-red'}>”</span>.
              </div>
              <div className={'paragraph'}>
                Wir werden uns für die Entwicklung von Bergflix so viel Zeit lassen wie wir benötigen, um unsere eigenen
                Anspruche an die Plattform umsetzten zu können.
              </div>
            </div>
          </div>
          <div className={'picture-container tim'}>
            <span className={'picture '}>
              <LinkOut to={'https://www.youtube.com/HerrBergmann'}>
                <img className={'pic'} src={BergiPic} alt={'TimPic'} />
              </LinkOut>
              <img className={'text'} src={BergiText} alt={'TimText'} />
            </span>
          </div>
          <div className={'picture-container discord'}>
            <span className={'picture'}>
              <img className={'text'} src={DiscordText} alt={'DiscordText'} />
              <LinkOut to={'https://discord.gg/9SumTae'}>
                <img className={'pic'} src={DiscordPic} alt={'DiscordPic'} />
              </LinkOut>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
