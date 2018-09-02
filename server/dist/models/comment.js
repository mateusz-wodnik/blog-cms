'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var CommentSchema = new Schema({
	content: { type: String, required: true },
	avatar: { type: String },
	username: { type: String, required: true },
	post: { type: Schema.ObjectId },
	response: [{ type: Schema.ObjectId, ref: 'Comment', autopopulate: true }]
}, { timestamps: true });

var autoPopulateLead = function autoPopulateLead(next) {
	this.populate('response');
	next();
};

CommentSchema.pre('findOne', autoPopulateLead).pre('find', function (next) {
	if (this.getQuery()._id) this.populate('response');
	next();
});

exports.default = _mongoose2.default.model('Comment', CommentSchema);