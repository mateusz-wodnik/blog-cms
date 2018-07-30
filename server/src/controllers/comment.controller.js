import Comment from '../models/comment';
import { validationResult } from 'express-validator/check'
import Post from '../models/post'

export function getComments(req, res) {
	console.log('Received GET request')
	Comment.find()
		.then(comments => res.send(comments))
		.catch(err => res.send(err))
}

export function addComment(req, res) {
	console.log('POST add comment')
	console.log(req.body)
	try {
		// validationResult(req).throw()
		const { username, content, avatar } = req.body
		const comments = {username, content, avatar}
		Comment.create(comments)
			.then(comment => {
				if(req.query.response === 'true') {
					Comment.update({_id: req.params.id}, {$addToSet: {response: comment}})
						.then(res => console.log(res))
						.catch(err => console.log(err))
				} else {
					Post.update({_id: req.params.id}, {$addToSet: {comments: comment}})
						.then(res => console.log(res))
						.catch(err => console.log(err))
				}

				res.send(comment)
			})
			.catch(err => res.send(err))
	} catch (err) {
		res.send(err)
	}
}

export function addImage () {
	console.log('addimage')
	res.json(`http://localhost:3000/images/comments/${req.body.username}/${req.file.originalname}`)
}
