'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _post = require('../controllers/post.controller');

var PostController = _interopRequireWildcard(_post);

var _postImages = require('./middlewares/postImages');

var _postImages2 = _interopRequireDefault(_postImages);

var _multer = require('multer');

var _multer2 = _interopRequireDefault(_multer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var router = new _express.Router();

// Get all Posts
router.route('/').get(PostController.getPosts);

router.route('/').post(_postImages2.default.single('image'), PostController.addPost);

router.route('/:id').put(_postImages2.default.single('image'), PostController.updatePost);

router.route('/image').post(_postImages2.default.single('image'), PostController.uploadPostImage);

router.route('/:id').delete(PostController.deletePost);

router.route('/:id').get(PostController.getPost);

exports.default = router;