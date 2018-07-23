import { Router } from 'express';
import * as PostController from '../controllers/post.controller';
const router = new Router();

import { validator } from './validators/post.validator'

// Get all Posts
router.route('/').get(PostController.getPosts);

router.route('/').post(validator, PostController.addPost);

router.route('/:id').put(validator, PostController.updatePost);

router.route('/:id').delete(PostController.deletePost);

router.route('/:id').get(PostController.getPost);

export default router;
