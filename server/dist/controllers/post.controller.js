'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getPosts = getPosts;
exports.addPost = addPost;
exports.updatePost = updatePost;
exports.deletePost = deletePost;
exports.getPost = getPost;
exports.uploadPostImage = uploadPostImage;

var _post = require('../models/post');

var _post2 = _interopRequireDefault(_post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getPosts(req, res) {
	console.log('Received GET request');
	var items = {};
	// Strip response in response to provided queries in request 
	if (req.query.short === 'true') {
		items = '-content';
	} else if (req.query.categories === 'true') {
		items = ['categories', '-_id'];
	}
	var query = {};
	// Construct mongoose search object from queries
	if (req.query.featured === 'true') {
		query = { featured: true };
	} else if (req.query.slider === 'true') {
		query = { slider: true };
	} else if (req.query.category) {
		query = { categories: req.query.category };
	}
	_post2.default.find(query, items).then(function (posts) {
		return res.send(posts);
	}).catch(function (err) {
		return res.send(err);
	});
}

function addPost(req, res) {
	console.log('Received POST');
	console.log('elo');
	var post = JSON.parse(req.body.post);
	post.img = '/images/' + req.file.filename;
	_post2.default.create(post).then(function (res) {
		console.log(res);
		res.send(res);
	}).catch(function (err) {
		return res.send(err);
	});
}

function updatePost(req, res) {
	try {
		var post = JSON.parse(req.body.post);
		if (req.file) post.img = '/images/' + req.file.filename;
		delete post.createdAt;
		delete post.updatedAt;
		_post2.default.update({ _id: req.params.id }, post).then(function (post) {
			return res.send(post);
		}).catch(function (err) {
			return res.send(err);
		});
	} catch (err) {
		res.send(err);
	}
}

function deletePost(req, res) {
	console.log('Received DELETE');
	_post2.default.remove({ _id: req.params.id }).then(function (post) {
		return res.send(post);
	}).catch(function (err) {
		return res.send(err);
	});
}

function getPost(req, res) {
	console.log('Received GET for single example');
	_post2.default.findById(req.params.id).populate('comments').then(function (post) {
		return res.send(post);
	}).catch(function (err) {
		return res.send(403, err);
	});
}

function uploadPostImage(req, res) {
	console.log('POST upload image');
	res.json('/images/' + req.file.originalname);
}