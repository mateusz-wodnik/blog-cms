import React, { Component } from 'react'
import './Comments.css'
import placeholder from './placeholder.jpeg'


class Comments extends Component {
	render() {
		const { comments, handleAddComment, handleCommentImage, user={} } = this.props
		console.log(user)
		return(
			<section className="blog__comments comments">
				<header className="comments__header">
					<p className="comments__number">{comments.length} Komentarze</p>
				</header>
				<div className="comments__add">
					<form onSubmit={handleAddComment} className="comments__form">
						<div id="newCommentImg" className="comments__img" style={{backgroundImage: `url(${user.avatar})`}}>
							<input onChange={handleCommentImage} type='file' name="image" className="comments__file" />
						</div>
						<div className="comments__text">
							<input required={true} className="comments__name" type="text" name="username" placeholder="Nazwa" defaultValue={user.name}/>
							<textarea required={true} className="comments__content" type="text" name="content" placeholder="Twój komentarz"/>
						</div>
						<button className="comments__submit">Wyślij</button>
					</form>
				</div>
				<div className="comments__list">
					{comments.map((comment, idx) => <Comment key={idx} date={new Date(comment.createdAt)} content={comment.content} username={comment.username} avatar={comment.avatar} response={comment.response}/>)}
				</div>
			</section>
		)
	}
}

const Comment = ({content, username, avatar, date, response=[]}) => (
	<div className="comments__comment comment">
		<header className="comment__header">
			<img className="comment__img" src={avatar || placeholder} alt=""/>
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
