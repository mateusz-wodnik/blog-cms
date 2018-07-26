import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';

import { hot } from 'react-hot-loader';
import Sidebar from '../Sidebar/Sidear'
import NewPost from '../NewPost/NewPost'

class App extends Component {
  render() {
    return (
      <div className="admin">
				<Route path={`/`} component={Sidebar} />
				<Route path={`/new-post`} component={NewPost} />
      </div>
    );
  }
}

export default hot(module)(App);
