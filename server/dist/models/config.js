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
	"link": { type: String, default: 'No link' }
}, { timestamps: true });

MenuItemSchema.add({ "dropdown": [MenuItemSchema] });

var ConfigSchema = new Schema({
	"menu": [MenuItemSchema]
}, { timestamps: true });

exports.default = _mongoose2.default.model('Config', ConfigSchema);