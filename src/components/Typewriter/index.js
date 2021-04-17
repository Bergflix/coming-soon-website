import React, { Component } from 'react';

import './style.scss';

export default class TypeWriter extends Component {
  state = {
    cursorAnimation: false,
    output: '',
  };

  typing = true;
  index = 0;
  letterCount = 0;
  word = this.props.words[0];

  componentDidMount() {
    this._start();
  }

  componentWillUnmount() {
    this._stop();
  }

  // Startet die Animation
  _start() {
    const await_erasing = () => {
      this.setState({ cursorAnimation: true });
      this._wait_id = setTimeout(() => {
        this.setState({ cursorAnimation: false });
        this._start_erasing(() => {
          this._next_word();
          this._start_typing(await_erasing);
        });
      }, 2000);
    };

    this._start_typing(await_erasing);
  }

  // Stoppt die Animation
  _stop() {
    clearInterval(this._type_id);
    clearInterval(this._erase_id);
    clearTimeout(this._wait_id);
    clearTimeout(this._t_erase_id);
  }

  _next_word() {
    if (this.props.words.length === ++this.index) this.index = 0;
    this.word = this.props.words[this.index];
  }

  _start_typing(callback, delay = 120) {
    this._type_id = setInterval(() => {
      if (this.letterCount === this.word.length) {
        callback.call();
        clearInterval(this._type_id);
        return;
      }
      this._type();
    }, delay);
  }

  _start_erasing(callback, delay = 30, firstEraseDelay = 330) {
    this._erase();
    this._t_erase_id = setTimeout(() => {
      this._erase_id = setInterval(() => {
        if (this.letterCount === 0) {
          callback.call();
          clearInterval(this._erase_id);
          return;
        }
        this._erase();
      }, delay);
    }, firstEraseDelay);
  }

  _type() {
    const letters = this.word.slice(0, ++this.letterCount);
    this.setState({ output: letters });
  }

  _erase() {
    const letters = this.word.slice(0, --this.letterCount);
    this.setState({ output: letters });
  }

  render() {
    const { output, letter } = this.state;

    return (
      <span className={'typewriter ' + this.props.className}>
        <span className={'content'}>
          {output}
          <span className={'animate'}>{letter}</span>
        </span>
        <span className={'cursor' + (this.state.cursorAnimation ? ' animate' : '')} />
      </span>
    );
  }
}
