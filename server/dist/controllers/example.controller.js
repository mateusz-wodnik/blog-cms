'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getExamples = getExamples;
exports.addExample = addExample;
exports.updateExample = updateExample;
exports.deleteExample = deleteExample;
exports.getExample = getExample;

var _post = require('../models/post');

var _post2 = _interopRequireDefault(_post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getExamples(req, res) {
	console.log('Received GET request');
	_post2.default.find(function (err, docs) {
		if (err) {
			res.status(500).send(err);
		}
		res.send(docs);
	});
}

function addExample(req, res) {
	console.log('Received POST');
	var newExample = new _post2.default(req.body);
	newExample.save(function (err, docs) {
		if (err) res.status(500).send(err);
		res.send(docs);
	});
}

function updateExample(req, res) {
	console.log('Received PUT');
	_post2.default.update({ _id: req.params.id }, req.body, function (err) {
		return res.send({ _id: req.params.id });
	});
}

function deleteExample(req, res) {
	console.log('Received DELETE');
	_post2.default.remove({ _id: req.params.id }, function (err) {
		return res.send({ _id: req.params.id });
	});
}

function getExample(req, res) {
	console.log('Received GET for single example');
	_post2.default.findById(req.params.id, function (err, doc) {
		res.send(doc);
	});
}