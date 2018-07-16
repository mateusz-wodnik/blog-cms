import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';

// Import modules
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Slider from '../Slider/Slider';
import Selected from '../Selected/Selected';

class App extends Component {
  render() {
    return (
      <div className="blog">
        <Header />
				<Navigation />
				<Slider />
				<Selected />
      </div>
    );
  }
}

export default connect(null, null)(hot(module)(App));
