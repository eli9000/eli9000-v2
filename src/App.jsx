import React, { Component } from 'react';
// import Axios from 'axios';

import Header from './components/Header.jsx';
import Jumbo from './components/Jumbo.jsx';
import Info from './components/Info.jsx';
import Content from './components/Content.jsx';
import Footer from './components/Footer.jsx';

import './App.css';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Jumbo />
        <Info />
        <Content />
        <Footer />
      </div>
    );
  }
}