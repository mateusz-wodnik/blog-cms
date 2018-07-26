import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';

import { hot } from 'react-hot-loader';
import Sidebar from '../Sidebar/Sidear'
import NewPost from '../NewPost/NewPost'
import EditPost from '../EditPost/EditPost'

class App extends Component {
	constructor () {
		super()
		this.state = {
			config: {
				categories: []
			}
		}
	}

	componentDidMount = () => {
		// Fetch config
		this.setState({config})
	}

  render() {
		const { categories } = this.state.config
    return (
      <div className="admin">
				<Route path={`/`} component={Sidebar} />
				<Route path={`/new-post`} render={(props) => <NewPost {...props} categories={categories} />} />
				<Route path={`/edit-post`} render={(props) => <EditPost {...props} categories={categories}/>} />
      </div>
    );
  }
}

export default hot(module)(App);


const config = {
	categories: [
		'cat1',
		'cat2',
		'cat3',
		'cat4',
		'cat5',
		'cat6',
	]
}
