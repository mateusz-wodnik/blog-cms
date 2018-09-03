"use strict";

var _mongoose = require("mongoose");

var _mongoose3 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (process.env.mongoUser) {
    _mongoose2.default.connect("mongodb://" + process.env.mongoUser + ":" + process.env.mongoPassword + "@ds125342.mlab.com:25342/blog-rest-admin");
} else {
    var database = 'blog';
    _mongoose3.default.connect("mongodb://localhost/" + database);
}