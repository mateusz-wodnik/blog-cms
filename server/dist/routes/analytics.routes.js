'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _post = require('../controllers/post.controller');

var PostController = _interopRequireWildcard(_post);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var router = new _express.Router();

// Get all Posts
router.route('/').get(AnalyticsController.getComments);

exports.default = router;