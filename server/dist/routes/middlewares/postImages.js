'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _multer = require('multer');

var _multer2 = _interopRequireDefault(_multer);

var _mkdirp = require('mkdirp');

var _mkdirp2 = _interopRequireDefault(_mkdirp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var storage = _multer2.default.diskStorage({
	destination: function destination(req, file, cb) {
		(0, _mkdirp2.default)('public/images', function (err) {
			if (err) console.error(err);
			cb(null, 'public/images');
		});
	},
	filename: function filename(req, file, cb) {
		cb(null, file.originalname);
	}
});

var uploadImage = (0, _multer2.default)({ storage: storage });

exports.default = uploadImage;