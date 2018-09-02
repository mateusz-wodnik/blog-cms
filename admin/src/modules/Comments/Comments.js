import React, { Component } from 'react';
import './Comments.css'

import Comment from './Comment'


class Comments extends Component {
	componentDidMount() {
		fetch('/api/comments')
			.then(res => res.json())
			.then(comments => {
				comments.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
				const dict = {}
				comments.forEach(comment => dict[comment._id] = comment)
				this.props.handleState({comments: dict})
			})
			.catch(console.error)
	}

	handleResponse = (e) => {
		e.preventDefault();
		const { admin, comments, handleState } = this.props
		const { dataset, response } = e.target
		const id = dataset.id
		const body = {
			content: response.value,
			username: admin.name,
			avatar: '../images/avatar.jpg'
		}
		fetch(`/api/comments/response/${id}`, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		}).then(res => res.json())
			.then(res => {
				comments[id].response.push(res._id)
				comments[res._id] = res
				handleState({comments})
			})
			.catch(console.error)
	}

	render() {
		const { comments, lastAccess, admin } = this.props
		return(
			<main className="admin__comments comments">
				<ul onSubmit={this.handleResponse} className="comments__list list-group">
					{Object.values(comments).map((comment, idx) =>
						comment.post ? <Comment
							key={comment._id}
							comments={comments}
							comment={comment}
							handleResponse={this.handleResponse}
							username={admin.name}
							avatar={admin.avatar}
							isNew={lastAccess < new Date(comment.updatedAt)}
						/> : null
					)}
				</ul>
			</main>
		)
	}
}

export default Comments
