import React, { Component } from 'react'
import './Comments.css'
import placeholder from './placeholder.jpeg'


class Comments extends Component {
	render() {
		const {comments} = this.props
		return(
			<section className="blog__comments comments">
				<header className="comments__header">
					<p className="comments__number">{comments.length} Komentarze</p>
				</header>
				<div className="comments__add">
					<img className="comments__img" src={placeholder} alt=""/>
					<form className="comments__form">
						<input className="comments__name" type="text" name="name" placeholder="Nazwa"/>
						<textarea className="comments__text" type="text" name="text" placeholder="Twój komentarz"/>
					</form>
					<button className="comments__submit">Wyślij</button>
				</div>
				<div className="comments__content">
					{comments.map((comment, idx) => <Comment key={idx} date={comment.date} text={comment.text} name={comment.name} img={comment.img} response={comment.response}/>)}
				</div>
			</section>
		)
	}
}

const Comment = ({text, name, img, date, response=[]}) => (
	<div className="comments__comment comment">
		<header className="comment__header">
			<img className="comment__img" src={img || placeholder} alt=""/>
		</header>
		<div className="comment__content">
			<h5 className="comment__name">{name}<small className="comment__date">{date.toLocaleDateString()}</small></h5>
			<p className="comment__text">{text}</p>
			<div className="comment__response">
				{response.map((res, idx) => <Comment key={idx} text={res.text} name={res.name} img={res.img} date={res.date} response={res.response}/>)}
			</div>
		</div>
	</div>
)

export default Comments
