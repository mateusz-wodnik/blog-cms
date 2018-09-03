'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.uploadLogo = uploadLogo;
exports.updateMenu = updateMenu;
exports.getConfig = getConfig;

var _config = require('../models/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function uploadLogo(req, res) {
	console.log('POST upload logo');
	res.json('/images/' + req.file.originalname);
}

function updateMenu(req, res) {
	console.log('POST update config menu');
	_config2.default.update({}, { menu: req.body }, { multi: true, upsert: true }).then(function (updated) {
		return res.send(updated);
	}).catch(function (err) {
		return res.send(err);
	});
}

function getConfig(req, res) {
	console.log('GET config');
	_config2.default.find().then(function (configs) {
		console.log(configs);
		res.send(configs[0]);
	});
}