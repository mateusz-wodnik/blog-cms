import Post from '../models/post';

export function getPosts(req, res) {
	console.log('Received GET request')
	let items = {}
	// Strip response in response to provided queries in request 
	if(req.query.short === 'true') {
		items = '-content'
	} else if (req.query.categories === 'true') {
		items = ['categories', '-_id']
	}
	let query = {}
	// Construct mongoose search object from queries
	if(req.query.featured === 'true') {
		query = {featured: true}
	} else if(req.query.slider === 'true') {
		query = {slider: true}
	} else if(req.query.category) {
		query = {categories: req.query.category}
	}
	Post.find(query, items)
		.then(posts => res.send(posts))
		.catch(err => res.send(err))
}

export function addPost(req, res) {
	console.log(`Received POST`)
	console.log('elo')
	const post = JSON.parse(req.body.post)
	post.img = `/images/${req.file.filename}`
	Post.create(post)
		.then(res => {
			console.log(res)
			res.send(res)
		})
		.catch(err => res.send(err))
}

export function updatePost(req, res) {
	try {
		const post = JSON.parse(req.body.post)
		if(req.file) post.img = `/images/${req.file.filename}`
		delete post.createdAt
		delete post.updatedAt
		Post.update(
			{_id: req.params.id},
			post
		)
			.then(post => res.send(post))
			.catch(err => res.send(err))
	} catch (err) {
		res.send(err)
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
		.populate('comments')
		.then(post => res.send(post))
		.catch(err => res.send(403, err))
}

export function uploadPostImage(req, res) {
	console.log('POST upload image')
	res.json(`/images/${req.file.originalname}`)
}
