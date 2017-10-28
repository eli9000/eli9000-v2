import React, { Component } from 'react';

import Header from './components/Header.jsx';
import Jumbo from './components/Jumbo.jsx';
import Info from './components/Info.jsx';
import Footer from './components/Footer.jsx';

import './App.css';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Jumbo />
        <Info />
        <Footer />
      </div>
    );
  }
}