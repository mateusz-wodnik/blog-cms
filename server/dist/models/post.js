'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Schema = _mongoose2.default.Schema;

var PostSchema = new Schema(_defineProperty({
	title: { type: String, required: true },
	content: { type: String, required: true },
	featured: { type: Boolean, default: false },
	slider: { type: Boolean, default: false },
	img: { type: String },
	categories: [{ type: String }],
	comments: [{ type: Schema.ObjectId, required: true }],
	prev: {
		name: { type: String, required: true },
		link: { type: String, required: true }
	}
}, 'prev', {
	name: { type: String, required: true },
	link: { type: String, required: true }
}), { timestamps: true });

exports.default = _mongoose2.default.model('Post', PostSchema);