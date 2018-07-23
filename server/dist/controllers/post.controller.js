'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.getPosts = getPosts;
exports.addPost = addPost;
exports.updatePost = updatePost;
exports.deletePost = deletePost;
exports.getPost = getPost;

var _post = require('../models/post');

var _post2 = _interopRequireDefault(_post);

var _check = require('express-validator/check');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getPosts(req, res) {
	console.log('Received GET request');
	_post2.default.find(function (err, posts) {
		if (err) {
			res.status(500).send(err);
		}
		res.send(posts);
	});
}

function addPost(req, res) {
	console.log('Received POST');
	try {
		(0, _check.validationResult)(req).throw();
		_post2.default.create(_extends({}, req.body)).then(function (post) {
			return res.send(post);
		}).catch(function (err) {
			return res.send(err.mapped());
		});
	} catch (err) {
		res.send(err.mapped());
	}
}

function updatePost(req, res) {
	try {
		(0, _check.validationResult)(req).throw();
		_post2.default.update({ _id: req.params.id }, req.body).then(function (post) {
			return res.send(post);
		}).catch(function (err) {
			return res.send(err);
		});
	} catch (err) {
		res.send(err.mapped());
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
	_post2.default.findById(req.params.id).then(function (post) {
		return res.send(post);
	}).catch(function (err) {
		return res.send(err);
	});
}