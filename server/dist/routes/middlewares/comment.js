'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _multer = require('multer');

var _multer2 = _interopRequireDefault(_multer);

var _mkdirpPromise = require('mkdirp-promise');

var _mkdirpPromise2 = _interopRequireDefault(_mkdirpPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var storage = _multer2.default.diskStorage({
	destination: function destination(req, file, cb) {
		(0, _mkdirpPromise2.default)('public/images/comments/').then(function (res) {
			return cb(null, 'public/images/comments/');
		}).catch(console.error);
	},
	filename: function filename(req, file, cb) {
		var avatar = Date.now() + '-' + file.originalname;
		req.body.avatar = '/images/comments/' + avatar;
		cb(null, avatar);
	}
});

var uploadCommentImage = (0, _multer2.default)({ storage: storage });

exports.default = uploadCommentImage;