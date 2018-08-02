import { Router } from 'express';
import * as CommentController from '../controllers/comment.controller';
import { validator } from './validators/post.validator'
import uploadCommentImage from './middlewares/comment'

const router = new Router();

import multer from 'multer'


// Get all Posts
router.route('/:id').post(uploadCommentImage.single('image'), CommentController.addComment);

export default router;
