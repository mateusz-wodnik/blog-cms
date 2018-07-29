import React from 'react'
import date from '../../_utils/date'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'


const Comment = ({comment, isNew=false, handleResponse}) => {
	const { username, createdAt, content, response=[] } = comment
	return(
		<li className={`comments__comment card${isNew ? ' comments__comment--new' : ''}`}>
			<header className="comments__info card-header">
				<h5 className="comments__user">{username}</h5>
				<p className="comments__date">{date(createdAt, true, false)} <span>{date(createdAt, false, true)}</span></p>
			</header>
			<section className="comments__content card-body">
				<p className="comments__content">{content}</p>
				<div className="comment__response">
					{response.map((comment, idx) => {
						console.log(comment)
						return <Comment key={idx}
										 comment={comment}
										 handleResponse={handleResponse}
						/>
					}
					)}
				</div>
			</section>
			<footer className="comments__response card-footer">
				<p className="comments__show-response">Send response <FontAwesomeIcon icon={faAngleDown}/></p>
				<form className="comments__form" data-id={comment._id}>
					<textarea className="comments__response-content" name="response"></textarea>
					<button className="comments__submit btn btn-success" name="commentResponseSubmit">Send</button>
				</form>
			</footer>
		</li>
	)
}

export default Comment
