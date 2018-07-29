import React from 'react'
import date from '../../_utils/date'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'


const Comment = ({comment, isNew, response=[]}) => (
	<li className={`comments__comment card${isNew ? ' comments__comment--new' : ''}`}>
		<header className="comments__info card-header">
			<h5 className="comments__user">{comment.username}</h5>
			<p className="comments__date">{date(comment.createdAt, true, false)} <span>{date(comment.createdAt, false, true)}</span></p>
		</header>
		<section className="comments__content card-body">
			<p className="comments__content">{comment.content}</p>
			<div className="comment__response">
				{response.map((res, idx) => <Comment key={idx} text={res.text} name={res.name} img={res.img} date={res.date} response={res.response}/>)}
			</div>
		</section>
		<footer className="comments__response card-footer">
			<p className="comments__show-response">Send response <FontAwesomeIcon icon={faAngleDown}/></p>
			<form className="comments__form">
				<textarea className="comments__response-content" name="response"></textarea>
				<button className="comments__submit btn btn-success" name="commentResponseSubmit">Send</button>
			</form>
		</footer>
	</li>
)

export default Comment
