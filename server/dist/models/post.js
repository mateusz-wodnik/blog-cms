'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var PostSchema = new Schema({
	title: { type: String, default: 'No title' },
	content: { type: String, default: 'No content' },
	featured: { type: Boolean, default: false },
	slider: { type: Boolean, default: false },
	img: { type: String },
	categories: [{ type: String }],
	comments: [{ type: Schema.ObjectId, required: true, ref: 'Comment' }],
	prev: {
		name: { type: String, default: '' },
		link: { type: String, default: '' }
	},
	next: {
		name: { type: String, default: '' },
		link: { type: String, default: '' }
	}
}, { timestamps: true });

exports.default = _mongoose2.default.model('Post', PostSchema);