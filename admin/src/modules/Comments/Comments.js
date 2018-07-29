import React, { Component } from 'react';
import './Comments.css'

import Comment from './Comment'


class Comments extends Component {
	componentDidMount() {
		this.props.handleComments()
	}

	handleResponse = (e) => {
		e.preventDefault();
		const id = e.target.dataset.id
		console.log(id)
		const body = {
			content: e.target.response.value,
			username: this.props.admin.name,
			avatar: this.props.admin.avatar
		}
		fetch(`/api/comments/${id}?response=true`, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		}).then(res => res.json())
			.then(res => console.log(res))
			.catch(console.error)
	}

	render() {
		const { comments, lastAccess } = this.props
		return(
			<main className="admin__comments comments">
				<ul onSubmit={this.handleResponse} className="comments__list list-group">
					{comments.map((comment, idx) =>
						<Comment
							key={comment._id}
							comment={comment}
							handleResponse={this.handleResponse}
							username={this.props.admin.name}
							avatar={this.props.admin.avatar}
							isNew={lastAccess < new Date(comment.updatedAt)}
						/>
					)}
				</ul>
			</main>
		)
	}
}

export default Comments
