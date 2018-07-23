'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.validator = undefined;

var _check = require('express-validator/check');

var validator = exports.validator = [(0, _check.check)('title').isString(), (0, _check.check)('content').isString()];