import { Router } from 'express';
import * as CommentController from '../controllers/comment.controller';
import { validator } from './validators/post.validator'
import uploadCommentImage from './middlewares/comment'

const router = new Router();

import multer from 'multer'


// Get all Posts
router.route('/').get(CommentController.getComments);

router.route('/:id').post(uploadCommentImage.fields([{name: 'avatar'}, {name: 'username'}, {name: 'comment'}]), CommentController.addComment);

// router.route('/:id').put(CommentController.updateComment);
//
// router.route('/:id').delete(CommentController.deleteComment);

export default router;
