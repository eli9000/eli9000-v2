import React, { Component } from 'react';
// import Axios from 'axios';

import Header from './components/Header.jsx';
import Jumbo from './components/Jumbo.jsx';
import Info from './components/Info.jsx';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Jumbo />
        <Info />
      </div>
    );
  }
}

export default App;