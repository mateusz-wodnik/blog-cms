import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faLinkedin, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons/index'

import './Post.css'
import Comments from '../Comments/Comments'

class Post extends Component {
	render() {
		const {title, date, comments, content, next, prev, img} = this.props.post
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
					className="post__content"
					dangerouslySetInnerHTML={{__html: content}}
				></article>
				<footer className="post__footer">
					<div className="post__change">
						<Link to={prev.link} className="post__prev">{prev.name}</Link>
						<Link to={next.link} className="post__next">{next.name}</Link>
					</div>
					<Comments comments={comments}/>
				</footer>
			</section>
		)
	}
}

export default Post;
