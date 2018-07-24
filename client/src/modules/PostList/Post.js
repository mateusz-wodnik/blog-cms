import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGoogle, faLinkedin, faPinterest } from '@fortawesome/free-brands-svg-icons'

const Post = ({category, title, date, comments, img, id}) => (
	<div className="blog__post-prev post-prev">
		<header className="post-prev__header">
			<h5 className="post-prev__category">{category}</h5>
			<h2 className="post-prev__title">{title}</h2>
			<p className="post-prev__date">{date}</p>
		</header>
		<div className="post-prev__body">
			<Link to={`/${id}`}>
				<img className="post-prev__img" src={`http://localhost:3000/images/${img}`} alt="main post-prev"/>
			</Link>
		</div>
		<div className="post-prev__footer">
			<div className="post-prev__social">
				<a href="http://www.facebook.com"><FontAwesomeIcon icon={faFacebook}/></a>
				<a href="http://www.twitter.com"><FontAwesomeIcon icon={faTwitter}/></a>
				<a href="http://www.google.com"><FontAwesomeIcon icon={faGoogle}/></a>
				<a href="http://www.linkedin.com"><FontAwesomeIcon icon={faLinkedin}/></a>
				<a href="http://www.pinterest.com"><FontAwesomeIcon icon={faPinterest}/></a>
			</div>
			<div className="post-prev__comments">
				<p className="post-prev__comments">{comments} comments</p>
			</div>
		</div>
	</div>
)

export default Post
