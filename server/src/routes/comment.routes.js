import { Router } from 'express';
import * as CommentController from '../controllers/comment.controller';
import { validator } from './validators/post.validator'
import uploadCommentImage from './middlewares/comment'

const router = new Router();

import multer from 'multer'


// Get all Comments
router.route('/').get(CommentController.getComments);
router.route('/:post').get(CommentController.getPostComments);
router.route('/:id').post(uploadCommentImage.single('avatar'), CommentController.addComment);
router.route('/response/:id').post(uploadCommentImage.single('avatar'), CommentController.addResponseComment);

export default router;
