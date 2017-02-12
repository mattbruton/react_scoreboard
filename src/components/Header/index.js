import React from 'react';

class Header extends React.Component {

  static propTypes = {
    title: React.PropTypes.string.isRequired
  };

  render() {
    return(
        <div className="header">
          <h1>{this.props.title}</h1>
        </div>
    );
  }
}

export default Header;