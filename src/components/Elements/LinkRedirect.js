import React from 'react';

class LinkOut extends React.Component {
  componentDidMount() {
    if (this.props.to) {
      window.location.href = this.props.to;
    }
  }

  render() {
    return <React.Fragment />;
  }
}

export default LinkOut;
