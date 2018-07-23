'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _post = require('../controllers/post.controller');

var PostController = _interopRequireWildcard(_post);

var _post2 = require('./validators/post.validator');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var router = new _express.Router();

// Get all Posts
router.route('/').get(PostController.getPosts);

router.route('/').post(_post2.validator, PostController.addPost);

router.route('/:id').put(_post2.validator, PostController.updatePost);

router.route('/:id').delete(PostController.deletePost);

router.route('/:id').get(PostController.getPost);

exports.default = router;