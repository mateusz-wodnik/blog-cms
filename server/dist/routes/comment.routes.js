'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _comment = require('../controllers/comment.controller');

var CommentController = _interopRequireWildcard(_comment);

var _comment2 = require('./middlewares/comment');

var _comment3 = _interopRequireDefault(_comment2);

var _multer = require('multer');

var _multer2 = _interopRequireDefault(_multer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var router = new _express.Router();

// Get all Comments
router.route('/').get(CommentController.getComments);
router.route('/:post').get(CommentController.getPostComments);
router.route('/:id').post(_comment3.default.single('avatar'), CommentController.addComment);
router.route('/response/:id').post(_comment3.default.single('avatar'), CommentController.addResponseComment);

exports.default = router;