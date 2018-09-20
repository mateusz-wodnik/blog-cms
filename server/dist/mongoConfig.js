"use strict";

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// if(process.env.mongoUser) {
//     mongoose.connect("mongodb://" + process.env.mongoUser + ":" + process.env.mongoPassword + "@ds125342.mlab.com:25342/blog-rest-admin");
// } else {
//     const database = 'blog'
//     mongoose.connect(`mongodb://localhost/${database}`);
// }

_mongoose2.default.connect("mongodb://admin:admin14@ds125342.mlab.com:25342/blog-rest-admin");