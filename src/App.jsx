import React, { Component } from 'react';

import Header from './components/Header.jsx';
import Jumbo from './components/Jumbo.jsx';
import Content from './components/Content.jsx';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Jumbo />
      </div>
    );
  }
}

export default App;