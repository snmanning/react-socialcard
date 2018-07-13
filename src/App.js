/* esLint-disable */

import React, { Component } from 'react';
import SocialCard from './SocialCard';
import './App.css';
import Main from './Main';
import Header from './header';
import Footer from './footer';
import SocialCardList from './SocialCardList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrls: [
        'https://loremflickr.com/250/250/kitten,black/all',
        'https://placekitten.com/251/250',
        'https://placekitten.com/250/251',
        'https://placekitten.com/250/249',
        'https://placekitten.com/249/250',
        'https://placekitten.com/249/249',

      ]
    }
  };
  render() {
    return (
      <div>
        <Header title='Cat Cuties'/>
        <Main>
          <SocialCardList imageUrls={this.state.imageUrls}/>
        </Main>  
        <Footer />
      </div>
    );
  }
}

export default App;
