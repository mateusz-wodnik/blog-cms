'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getComments = getComments;
exports.getPostComments = getPostComments;
exports.addComment = addComment;
exports.addResponseComment = addResponseComment;

var _comment = require('../models/comment');

var _comment2 = _interopRequireDefault(_comment);

var _post = require('../models/post');

var _post2 = _interopRequireDefault(_post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getComments(req, res) {
	console.log('Received GET request');
	_comment2.default.find().then(function (comments) {
		return res.send(comments);
	}).catch(function (err) {
		return res.send(err);
	});
}

function getPostComments(req, res) {
	console.log('Received GET request');
	_comment2.default.find({ post: req.params.post }).then(function (comments) {
		return res.send(comments);
	}).catch(function (err) {
		return res.send(err);
	});
}

function addComment(req, res) {
	console.log('POST add comment');
	try {
		var _req$body = req.body,
		    username = _req$body.username,
		    content = _req$body.content,
		    avatar = _req$body.avatar,
		    _req$body$post = _req$body.post,
		    post = _req$body$post === undefined ? req.params.id : _req$body$post;

		var comments = { username: username, content: content, avatar: avatar, post: post };
		_comment2.default.create(comments).then(function (comment) {
			_post2.default.update({ _id: req.params.id }, { $addToSet: { comments: comment } }).then(function (raw) {
				return res.send(comment);
			}).catch(function (err) {
				return res.send(403, err);
			});
		}).catch(function (err) {
			return res.send(err);
		});
	} catch (err) {
		res.send(err);
	}
}

function addResponseComment(req, res) {
	try {
		var _req$body2 = req.body,
		    username = _req$body2.username,
		    content = _req$body2.content,
		    avatar = _req$body2.avatar;

		var comments = { username: username, content: content, avatar: avatar };
		_comment2.default.create(comments).then(function (comment) {
			_comment2.default.update({ _id: req.params.id }, { $addToSet: { response: comment } }).then(function (updated) {
				res.send(comment);
			}).catch(function (err) {
				return console.log(err);
			});
		}).catch(function (err) {
			return res.send(err);
		});
	} catch (err) {
		res.send(err);
	}
}