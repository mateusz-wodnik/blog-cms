import React, { Component } from'react';
import NewPost from '../NewPost/NewPost'
import Category from './Category'

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

	handlePostSelect(id) {
		// Fetch post
		fetch(`/api/posts/${id}`)
			.then(res => res.json())
			.then(post => this.setState({post, err: false}))
			.catch(err => {
				this.setState({post: {}, err: true})
				console.log(err)
			})
	}

	render() {
		const { categories } = this.props
		return(
			<main className="edit-post">
				<section className="edit-post__categories">
					{categories.map((cat, idx) =>
						<Category
							key={cat+idx}
							name={cat}
							posts={this.state.posts.filter(post =>
								// Check if post.category is defined
								post.category && post.category.includes(cat)
							)}
						/>)}
				</section>
			</main>
		)
	}
}

export default EditPost;
