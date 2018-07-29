import Post from '../models/post';
import { validationResult } from 'express-validator/check'

export function getPosts(req, res) {
	console.log('Received GET request')
	const short = req.query.short === 'true' ? '-content' : ''
	let query = {}
	if(req.query.featured === 'true') {
		query = {featured: true}
	} else if(req.query.slider === 'true') {
		query = {slider: true}
	}
	Post.find(query, short)
		.then(posts => res.send(posts))
		.catch(err => res.send(err))
}

export function addPost(req, res) {
	console.log(`Received POST`)
	try {
		validationResult(req).throw()
		Post.create({...req.body})
			.then(post => res.send(post))
			.catch(err => res.send(err.mapped()))
	} catch (err) {
		res.send(err.mapped())
	}
}

export function updatePost(req, res) {
	try {
		validationResult(req).throw()
		Post.update(
			{_id: req.params.id},
			req.body
		)
			.then(post => res.send(post))
			.catch(err => res.send(err))
	} catch (err) {
		res.send(err.mapped())
	}
}

export function deletePost(req, res) {
	console.log(`Received DELETE`)
	Post.remove({_id: req.params.id})
		.then(post => res.send(post))
		.catch(err => res.send(err))
}

export function getPost(req, res) {
	console.log(`Received GET for single example`)
	Post.findById(req.params.id)
		.then(post => res.send(post))
		.catch(err => res.send(err))
}

export function uploadPostImage(req, res) {
	console.log('POST upload image')

}
