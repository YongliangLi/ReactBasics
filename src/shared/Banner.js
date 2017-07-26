import React, { Component } from 'react';
import './Banner.css';

class Banner extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="/src/shared/logo.svg" className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
      </div>
    );
  }
}

export default Banner;
