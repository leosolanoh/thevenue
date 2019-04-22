import React, { Component } from 'react';
import './resources/styles.css' ;

import Header from './components/header_footer/Header';

import Featured from './components/featured';
import VeneuInfo from '../src/components/venueInfo';

import Highligths from '../src/components/Highlights';
 //

class App extends Component {
  render() {
    return (
     <div style={{height:'1500px', background:'cornflowerblue'}}>
        <Header />
        <Featured />
        <VeneuInfo />
        <Highligths />
        
     </div>
    );
  }
}

export default App;
