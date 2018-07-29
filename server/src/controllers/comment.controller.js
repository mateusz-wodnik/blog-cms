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
	try {
		// validationResult(req).throw()
		Comment.create({...req.body})
			.then(comment => {
				console.log(comment)
				res.send(comment)
			})
			.catch(err => res.send(err.mapped()))
	} catch (err) {
		res.send(err)
	}
}

export function addImage () {
	console.log('addimage')
	res.json(`http://localhost:3000/images/comments/${req.body.username}/${req.file.originalname}`)
}
