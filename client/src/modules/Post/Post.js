import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faLinkedin, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons/index'

import './Post.css'
import Comments from '../Comments/Comments'

class Post extends Component {
	constructor (props) {
		super(props)
		this.state = {
			title: "",
			date: "",
			comments: [],
			content: '',
			img: '',
			next: {
				link: '',
				name: ''
			},
			prev: {
				link: '',
				name: ''
			},
		}
	}

	componentDidMount() {
		document.querySelector('.blog__header').style.height = 'inherit'
		window.scrollTo({
			top: 10,
			behavior: 'smooth'
		})
		fetch(`/api/posts/${this.props.match.params.post}`)
			.then(res => res.json())
			.then(res => {
				const {title, date, comments, content, img, next, prev} = res
				document.querySelector('#headerImage').style.backgroundImage = `url(${img})`
				this.setState({
					title,
					date,
					comments,
					content,
					img,
					next,
					prev
				})
			})
			.catch(console.error)
	}

	handleAddComment = (e) => {
		e.preventDefault()
		const { username, content } = e.target
		const id = this.props.match.params.post
		// Once user choose his avatar it will be fetched from his localStorage rather than from server
		localStorage.setItem('username', username.value)
		const body = new FormData()
		// If localstorage is undefined or state.img was set to File object set File object,if not set link from localstorage
		body.append('avatar', localStorage.getItem('avatar') === 'undefined' || typeof this.state.img === 'object' ? this.state.img : localStorage.getItem('avatar'))
		body.append('username', username.value)
		body.append('content', content.value)
		fetch(`/api/comments/${id}`, {
			method: 'POST',
			body: body
		}).then(res => res.json())
			.then(comment => {
				localStorage.setItem('avatar', comment.avatar)
				this.setState({comments: [...this.state.comments, comment]})
			})
			.catch(console.error)
	}

	handleCommentImage = (e) => {
		const files = e.target.files
		this.setState({img: files[0]})
		const fReader = new FileReader()
		fReader.onload = () => document.querySelector('#newCommentImg').style.backgroundImage = `url(${fReader.result})`;
		fReader.readAsDataURL(files[0])
	}

	render() {
		const { title, date, comments, content, next, prev } = this.state
		return(
			<section className="blog__post post">
				<header id="headerImage" className="post__header">
					<div className="post__hero">
						<h2 className="post__title">{title}</h2>
						<div className="post__info">
							<p className="post__date">{date}</p>
							<p className="post__comments-number">{comments.length} Comments</p>
						</div>
						<div className="post__social">
							<a href="http://www.facebook.com"><FontAwesomeIcon icon={faFacebook}/></a>
							<a href="http://www.twitter.com"><FontAwesomeIcon icon={faTwitter}/></a>
							<a href="http://www.google.com"><FontAwesomeIcon icon={faGoogle}/></a>
							<a href="http://www.linkedin.com"><FontAwesomeIcon icon={faLinkedin}/></a>
							<a href="http://www.pinterest.com"><FontAwesomeIcon icon={faPinterest}/></a>
						</div>
					</div>
				</header>
				<article
					className="post__content content"
					dangerouslySetInnerHTML={{__html: content}}
				></article>
				<footer className="post__footer">
					<div className="post__change">
						<Link to={prev.link} className="post__prev">{prev.name}</Link>
						<Link to={next.link} className="post__next">{next.name}</Link>
					</div>
					<Comments
						comments={comments}
						handleCommentImage={this.handleCommentImage}
						handleAddComment={this.handleAddComment}
						user={{
							name: localStorage.getItem('username'),
							avatar: localStorage.getItem('avatar')
						}}
					/>
				</footer>
			</section>
		)
	}
}

export default Post;
