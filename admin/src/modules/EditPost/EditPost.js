import React, { Component } from'react';
import { Route, Switch } from'react-router-dom'
import Categories from './Categories'

import './EditPost.css'
import NewPostContainer from '../NewPost/NewPostContainer'

class EditPost extends Component {
	constructor (props) {
		super(props)
		this.state = {
			posts: [],
			post: {},
			err: false
		}
	}
	componentDidMount() {
		// Fetch all posts info
		fetch('/api/posts')
			.then(res => res.json())
			.then(posts => this.setState({posts}))
			.catch(console.error)
	}

	render() {
		const { categories } = this.props
		return(
				<Switch>
					<Route exact path={`/admin/edit-post`} render={() => <main className="edit-post"><Categories categories={categories} posts={this.state.posts} /></main>}/>
					<Route path={`/admin/edit-post/:id`} render={(props) => <NewPostContainer {...props} categories={categories} />}/>
				</Switch>
		)
	}
}

export default EditPost;
