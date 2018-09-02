import React from 'react'
import date from '../../_utils/date'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import './Comment.css'

const Comment = ({comment, comments, isNew=false, handleResponse}) => {
	const { username, createdAt, content, response=[] } = comment
	return (
		<li className={`comments__comment comment card${isNew ? ' comments__comment--new' : ''}`}>
			<header className="comment__info card-header">
				<h5 className="comment__user">{username}</h5>
				<p className="comment__date">{date(createdAt, true, false)} <span>{date(createdAt, false, true)}</span></p>
			</header>
			<section className="comment__content card-body">
				<p className="comment__text">{content}</p>
				{response.length ? <input type="checkbox" className="comment__toggle" /> : null}
				<div className="comment__response">
					{response.map((comment, idx) => (
						<Comment key={idx}
								comments={comments}
								comment={comments[comment]}
								handleResponse={handleResponse}
						/>
					))}
				</div>
			</section>
			<footer className="comment__footer card-footer">
				<form className="comment__form input-group" data-id={comment._id}>
					<input type="text" placeholder="Your response" className="comment__reply-text form-control" name="response" />
					<button className="comment__send btn btn-success" name="commentResponseSubmit">Send</button>
				</form>
				<FontAwesomeIcon icon={faAngleDown}/>
			</footer>
		</li>
	)
}

export default Comment
