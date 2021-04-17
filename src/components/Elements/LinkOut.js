import React from 'react';

class LinkOut extends React.Component {
  _click(event) {
    event.preventDefault(); // preventing href
    window.open(this.props.to, '_blank');
  }

  render() {
    return (
      // add href so it will be shown in the corner
      <a href={this.props.to} onClick={(event) => this._click(event)} className={'link ' + this.props.className}>
        {this.props.children}
      </a>
    );
  }
}

export default LinkOut;
