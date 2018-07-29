import React, { Component } from 'react'
import './Comments.css'
import placeholder from './placeholder.jpeg'


class Comments extends Component {
	render() {
		const { comments, handleAddComment } = this.props
		return(
			<section className="blog__comments comments">
				<header className="comments__header">
					<p className="comments__number">{comments.length} Komentarze</p>
				</header>
				<div className="comments__add">
					<form onSubmit={handleAddComment} className="comments__form">
						<div className="comments__img">
							<input type='file' name="image" className="comments__file" />
						</div>
						<div className="comments__text">
							<input className="comments__name" type="text" name="username" placeholder="Nazwa"/>
							<textarea className="comments__text" type="text" name="content" placeholder="Twój komentarz"/>
						</div>
						<button className="comments__submit">Wyślij</button>
					</form>
				</div>
				<div className="comments__content">
					{comments.map((comment, idx) => <Comment key={idx} date={new Date(comment.createdAt)} content={comment.content} username={comment.username} img={comment.img} response={comment.response}/>)}
				</div>
			</section>
		)
	}
}

const Comment = ({content, username, img, date, response=[]}) => (
	<div className="comments__comment comment">
		<header className="comment__header">
			<img className="comment__img" src={img || placeholder} alt=""/>
		</header>
		<div className="comment__content">
			<h5 className="comment__name">{username}<small className="comment__date">{date.toLocaleDateString()}</small></h5>
			<p className="comment__text">{content}</p>
			<div className="comment__response">
				{response.map((res, idx) => <Comment key={idx} text={res.text} name={res.name} img={res.img} date={res.date} response={res.response}/>)}
			</div>
		</div>
	</div>
)

export default Comments
