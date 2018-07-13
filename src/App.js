/* esLint-disable */

import React, { Component } from 'react';
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
        'https://loremflickr.com/250/250/kitten,orange/all',
        'https://loremflickr.com/250/250/kittens,white/all',
        'https://loremflickr.com/250/250/kitten,fluffy/all',
        'https://loremflickr.com/250/250/kitten,grey/all',
        'https://loremflickr.com/250/250/cat,calico/all',

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
