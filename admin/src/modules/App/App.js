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
			categories: []
		}
	}

	componentDidMount = () => {
		fetch('/api/posts?categories=true')
			.then(res => res.json())
			.then(res => {
				const categories = []
				res.forEach(cat => categories.push(...cat.categories))
				this.setState({categories: [...new Set(categories)]})
			})
			.catch(err => console.log(err))
	}

  render() {
		const { categories } = this.state
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
