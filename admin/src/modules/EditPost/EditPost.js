import React, { Component } from'react';
import { Route, Switch } from'react-router-dom'
import NewPost from '../NewPost/NewPost'
import Categories from './Categories'

import './EditPost.css'

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
		console.log(this.props)
		// Fetch all posts info
		fetch('/api/posts')
			.then(res => res.json())
			.then(posts => this.setState({posts}))
			.catch(err => console.log(err))
	}

	render() {
		const { categories } = this.props
		return(
			<main className="edit-post">
				<Switch>
					<Route exact path={`/edit-post`} render={() => <Categories categories={categories} posts={this.state.posts} />}/>
					<Route path={`/edit-post/:id`} render={(props) => {
						console.log(props)
						return <NewPost id={props.match.params.id} categories={categories} />
					}}/>
				</Switch>
			</main>
		)
	}
}

export default EditPost;
