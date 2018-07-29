import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';

import { hot } from 'react-hot-loader';
import Sidebar from '../Sidebar/Sidear'
import NewPost from '../NewPost/NewPost'
import EditPost from '../EditPost/EditPost'
import Comments from '../Comments/Comments'

class App extends Component {
	constructor () {
		super()
		this.state = {
			categories: [],
			comments: [],
			lastAccess: new Date('2018-07-29T18:04:21.050Z'),
			admin: {
				name: 'Mati',
				avatar: '/images/admin/admin.png'
			}
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

	handleComments = () => {
		fetch('/api/comments')
			.then(res => res.json())
			.then(comments => {
				comments.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
				this.setState({comments})
			})
			.catch(console.error)
	}

	handleResponse = (response) => {
		const comments = this.state.comments.map(comment => {

		})
		this.setState({})
	}

  render() {
		const { categories, comments, lastAccess, admin } = this.state
    return (
      <div className="admin">
				<Route path={`/`} component={Sidebar} />
				<Route path={`/new-post`} render={(props) => <NewPost {...props} categories={categories} />} />
				<Route path={`/edit-post`} render={(props) => <EditPost {...props} categories={categories}/>} />
				<Route path={`/comments`} render={(props) => <Comments {...props} admin={admin} lastAccess={lastAccess} comments={comments} handleComments={this.handleComments}/>} />
      </div>
    );
  }
}

export default hot(module)(App);
