import React from 'react';
import './Post.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGoogle, faLinkedin, faPinterest } from '@fortawesome/free-brands-svg-icons'

const Post = ({category, title, date, comments, img}) => (
	<div className="blog__post post">
		<header className="post__header">
			<h5 className="post__category">{category}</h5>
			<h2 className="post__title">{title}</h2>
			<p className="post__date">{date}</p>
		</header>
		<div className="post__body">
			<img className="post__img" src={img}/>
		</div>
		<div className="post__footer">
			<div className="post__social">
				<a href="http://www.facebook.com"><FontAwesomeIcon icon={faFacebook}/></a>
				<a href="http://www.twitter.com"><FontAwesomeIcon icon={faTwitter}/></a>
				<a href="http://www.google.com"><FontAwesomeIcon icon={faGoogle}/></a>
				<a href="http://www.linkedin.com"><FontAwesomeIcon icon={faLinkedin}/></a>
				<a href="http://www.pinterest.com"><FontAwesomeIcon icon={faPinterest}/></a>
			</div>
			<div className="post__comments">
				<p className="post__comments">{comments} comments</p>
			</div>
		</div>
	</div>
)

export default Post
