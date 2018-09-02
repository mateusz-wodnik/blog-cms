'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var MenuItemSchema = new Schema({
	"name": { type: String, default: 'No name' },
	"link": { type: String, default: 'No link' },
	"active": { type: Boolean, default: false },
	"top": { type: Boolean, default: false },
	"dropdown": [{ type: Schema.ObjectId, ref: 'MenuItem' }]
}, { timestamps: true });

var autoPopulateLead = function autoPopulateLead(next) {
	this.populate('dropdown');
	next();
};

MenuItemSchema.pre('findOne', autoPopulateLead).pre('find', autoPopulateLead);

exports.default = _mongoose2.default.model('MenuItem', MenuItemSchema);